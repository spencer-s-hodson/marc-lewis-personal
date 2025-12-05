import EmailTemplate from "@/emails/email-template";

export default function Test() {
  return (
    <div>
      <EmailTemplate
        body={{
          first_name: "John",
          last_name: "Doe",
          email: "john.doe@example.com",
          phone_number: "1234567890",
          inquiry: "This is a test inquiry"
        }}
      />
    </div>
  );
}