import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
// import * as React from 'react';

import { EmailBodyContent } from "@/requests/SendEmailRequest";

interface EmailTemplateProps {
  body: EmailBodyContent;
}

export default function EmailTemplate(props: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white font-sans">
          <Preview>
            You Have a New Contact Request
          </Preview>
          <Container className="max-w-full">
            <Section className="flex flex-col items-center justify-center text-center">
              <Heading className="text-center mb-6">You Have a New Contact Request</Heading>
              <Row className="w-full max-w-md mx-auto text-left px-6">
                <Column>
                  <Text className="mb-2">
                    <strong>Name:</strong> {props.body.first_name} {props.body.last_name}
                  </Text>
                  <Text className="mb-2">
                    <strong>Email:</strong> {props.body.email}
                  </Text>
                  <Text className="mb-2">
                    <strong>Phone Number:</strong> {props.body.phone_number}
                  </Text>
                  <Text className="mb-2">
                    <strong>Inquiry:</strong>
                    <br />
                    {props.body.inquiry}
                  </Text>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}