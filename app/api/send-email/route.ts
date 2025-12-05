import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailBodyContent } from "@/requests/SendEmailRequest";
import EmailTemplate from "@/emails/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const request = await req.json();

    const body: EmailBodyContent = request.body as EmailBodyContent;

    const { data, error } = await resend.emails.send({
      from: `Dr. Marc Lewis Personal Website <${request.from}>`,
      to: request.to,
      replyTo: body.email,
      subject: request.subject,
      react: EmailTemplate({ body }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error", details: (error as any)?.message || error },
      { status: 500 }
    );
  }
}
