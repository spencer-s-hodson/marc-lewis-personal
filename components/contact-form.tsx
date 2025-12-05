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
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    inquiry: "",
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

    setIsLoading(true);

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
    } finally {
      setIsLoading(false);
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
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
