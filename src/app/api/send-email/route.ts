import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { sendEmailSchema } from "@/lib/form-schemas";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const parsed = sendEmailSchema.safeParse({
      senderEmail: formData.get("senderEmail") || "",
      senderPassword: formData.get("senderPassword") || "",
      to: formData.get("to"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    });

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: parsed.error.issues[0]?.message ?? "Please review the form and try again.",
        },
        { status: 400 }
      );
    }

    const { to, subject, message } = parsed.data;
    
    // Determine which credentials to use
    const senderEmail = parsed.data.senderEmail || process.env.SMTP_USER;
    const senderPassword = parsed.data.senderPassword || process.env.SMTP_PASS;

    if (!senderEmail || !senderPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "Sender Gmail and App Password must be provided either in the form or configured on the server.",
        },
        { status: 400 }
      );
    }

    // Handle attachment
    const attachment = formData.get("attachment");
    const attachments = [];

    if (attachment instanceof File) {
      if (attachment.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { success: false, message: "Attachment must be under 5MB." },
          { status: 400 }
        );
      }
      const buffer = await attachment.arrayBuffer();
      attachments.push({
        filename: attachment.name,
        content: Buffer.from(buffer),
        contentType: attachment.type || "application/octet-stream",
      });
    }

    // Create dynamic transporter using Gmail & App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: senderEmail,
        pass: senderPassword,
      },
    });

    // Construct and send email
    await transporter.sendMail({
      from: `"${senderEmail.split("@")[0]}" <${senderEmail}>`,
      to,
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #0f172a; line-height: 1.6;">
          <h2 style="color: #0d9488; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px; margin-bottom: 20px;">
            Message sent via DK Enterprise Email Client
          </h2>
          <div style="background-color: #f8fafc; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; white-space: pre-wrap;">${message}</div>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
          <p style="font-size: 12px; color: #64748b; margin-top: 20px;">
            This email was sent using the configured/input Gmail account: <strong>${senderEmail}</strong>.
          </p>
        </div>
      `,
      attachments,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error: any) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Something went wrong while sending your email.",
      },
      { status: 500 }
    );
  }
}
