import { ContactFormData } from "@/types/ContactFormData";

export type EmailBodyContent = ContactFormData;

export class SendEmailRequest {
  // TODO: update the to email and from email with a domain that belongs to marc
  public to: string = "drmarclewis@gmail.com";
  public from: string = "noreply@drmarclewis.com";
  public subject: string;
  public body: EmailBodyContent;

  constructor(subject: string, body: EmailBodyContent) {
    this.subject = subject;
    this.body = body;
  }
}
