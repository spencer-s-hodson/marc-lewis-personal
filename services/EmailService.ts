import { SendEmailRequest } from "@/requests/SendEmailRequest";
import { ContactFormData } from "@/types/ContactFormData";

export class EmailService {
  public async sendContactFormEmail(contactFormData: ContactFormData): Promise<string> {
    try {
      // create the send email request
      const sendEmailRequest = new SendEmailRequest(
        "Contact Form Submission",
        contactFormData
      );

      // send the email
      const response = await this.sendEmail(sendEmailRequest);

      // return the response
      return response;
    } catch (error) {
      throw error;
    }
  }

  private async sendEmail(request: SendEmailRequest): Promise<string> {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify(request),
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message);
      }

      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default EmailService;