"use client";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react";
import { EmailService } from "@/services/EmailService";
import { toast } from "sonner";
import { ContactFormData } from "@/types/ContactFormData";

export function ContactForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const emailService = new EmailService();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    first_name: "Spencer",
    last_name: "Hodson",
    email: "spencer.s.hodson@gmail.com",
    phone_number: "9497099241",
    inquiry: "I have a question about the contact form.",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    const toastOptions = {
      position: "top-center" as const,
      duration: 5000,
    }

    try {
      const response = await emailService.sendContactFormEmail(formData);
      console.log(response);
      toast.success("Email sent successfully! You'll be contacted shortly.", toastOptions);
    } catch (error) {
      toast.error("Failed to send email, please try again later.", {
        ...toastOptions,
        style: {
          backgroundColor: "red",
          color: "white",
        },
      });
    }
  };

  return (
    <div className={cn("flex flex-col gap-6 max-w-3xl mx-auto", className)} {...props}>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              {/* Name */}
              <div className="flex flex-col md:flex-row gap-6">
                <Field className="md:flex-1">
                  <FieldLabel className="gap-0" htmlFor="first_name">
                    First Name
                    <span className="text-destructive">*</span>
                  </FieldLabel>
                  <Input
                    id="first_name"
                    name="first_name"
                    type="text"
                    placeholder="John"
                    required
                    value={formData.first_name}
                    onChange={handleChange}
                  />
                </Field>
                <Field className="md:flex-1">
                  <FieldLabel className="gap-0" htmlFor="last_name">
                    Last Name
                    <span className="text-destructive">*</span>
                  </FieldLabel>
                  <Input
                    id="last_name"
                    name="last_name"
                    type="text"
                    placeholder="Doe"
                    required
                    value={formData.last_name}
                    onChange={handleChange}
                  />
                </Field>
              </div>

              {/* Email */}
              <Field>
                <FieldLabel className="gap-0" htmlFor="email">
                  Email
                  <span className="text-destructive">*</span>
                </FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </Field>

              {/* Phone Number */}
              <Field>
                <FieldLabel className="gap-0" htmlFor="phone_number">
                  Phone Number
                  <span className="text-destructive">*</span>
                </FieldLabel>
                <Input
                  id="phone_number"
                  name="phone_number"
                  type="tel"
                  placeholder="(123) 456-7890"
                  required
                  value={formData.phone_number}
                  onChange={handleChange}
                />
              </Field>

              {/* Inquiry */}
              <Field>
                <FieldLabel className="gap-0" htmlFor="inquiry">
                  Inquiry
                  <span className="text-destructive">*</span>
                </FieldLabel>
                <Textarea
                  className="min-h-32"
                  id="inquiry"
                  name="inquiry"
                  placeholder="I have a question about..."
                  autoGrow
                  required
                  value={formData.inquiry}
                  onChange={handleChange}
                />
              </Field>

              {/* Submit Button */}
              <Field>
                <Button type="submit">Submit</Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
