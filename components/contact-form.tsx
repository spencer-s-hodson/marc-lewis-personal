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
  const [errors, setErrors] = useState<{
    email?: string;
    phone_number?: string;
  }>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone: string): boolean => {
    // Remove all non-digit characters for validation
    const digitsOnly = phone.replace(/\D/g, '');
    // Accept 10 or 11 digits (with or without country code)
    return digitsOnly.length >= 10 && digitsOnly.length <= 11;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear errors on change and validate if field has content
    if (name === "email") {
      if (value && !validateEmail(value)) {
        setErrors(prev => ({ ...prev, email: "Please enter a valid email address" }));
      } else {
        setErrors(prev => ({ ...prev, email: undefined }));
      }
    }

    if (name === "phone_number") {
      if (value && !validatePhoneNumber(value)) {
        setErrors(prev => ({ ...prev, phone_number: "Please enter a valid phone number (10-11 digits)" }));
      } else {
        setErrors(prev => ({ ...prev, phone_number: undefined }));
      }
    }
  };

  const isDisabled = 
    isLoading || 
    !formData.first_name || 
    !formData.last_name || 
    !formData.email || 
    !formData.phone_number || 
    !formData.inquiry ||
    !!errors.email ||
    !!errors.phone_number;

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
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email}</p>
                )}
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
                  className={errors.phone_number ? "border-destructive" : ""}
                />
                {errors.phone_number && (
                  <p className="text-sm text-destructive mt-1">{errors.phone_number}</p>
                )}
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
                <Button type="submit" disabled={isDisabled} className="cursor-pointer">
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
