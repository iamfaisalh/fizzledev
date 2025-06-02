"use server";

import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations";
import { CONTACT_EMAIL, EMAIL } from "@/lib/constants";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  try {
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    console.log("Form data:", {
      name: rawData.name,
      email: rawData.email?.substring(0, 5) + "...",
      messageLength: rawData.message?.length,
    });

    const validationResult = contactFormSchema.safeParse(rawData);

    if (!validationResult.success) {
      const errors = validationResult.error.flatten().fieldErrors;
      console.log("Validation failed:", errors);

      const firstError = Object.values(errors)[0]?.[0] || "Validation failed";

      return {
        success: false,
        error: firstError,
        validationErrors: errors,
      };
    }

    const { name, email, message } = validationResult.data;

    console.log("Validation passed, sending email...");

    const emailResult = await resend.emails.send({
      from: `Portfolio Contact <${CONTACT_EMAIL}>`,
      to: [EMAIL],
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #1e293b; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #334155;">${message.replace(
              /\n/g,
              "<br>"
            )}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #f1f5f9; border-radius: 8px; font-size: 14px; color: #64748b;">
            <p>This message was sent from the contact form on your portfolio website.</p>
            <p>Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
      reply_to: email,
    });

    console.log("Resend API response:", {
      success: !emailResult.error,
      emailId: emailResult.data?.id,
      error: emailResult.error,
    });

    if (emailResult.error) {
      console.error("Resend API error:", emailResult.error);
      return {
        success: false,
        error: `Email service error: ${
          emailResult.error.message || "Unknown error"
        }`,
      };
    }

    if (!emailResult.data) {
      console.error("No data returned from Resend");
      return {
        success: false,
        error: "Email service did not return confirmation data",
      };
    }

    console.log("Email sent successfully:", emailResult.data.id);

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
      emailId: emailResult.data.id,
    };
  } catch (error) {
    console.error("Contact form submission error:", error);

    if (error instanceof Error) {
      console.error("Error details:", {
        name: error.name,
        message: error.message,
        stack: error.stack?.substring(0, 200),
      });

      return {
        success: false,
        error: `Server error: ${error.message}`,
      };
    }

    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    };
  }
}
