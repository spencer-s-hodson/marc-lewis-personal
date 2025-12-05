import { z } from "zod";

const ContactFormDataSchema = z.object({
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  email: z.string().email(),
  phone_number: z.string().min(1),
  inquiry: z.string().min(1),
});

export type ContactFormData = z.infer<typeof ContactFormDataSchema>;
