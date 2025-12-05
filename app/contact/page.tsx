import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Dr. Marc Lewis for consulting, speaking engagements, or collaboration opportunities.",
};

export default function Contact() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Interested in consulting, speaking engagements, or collaboration opportunities? 
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full pb-16 md:pb-24">
        <div className="container px-4 mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}