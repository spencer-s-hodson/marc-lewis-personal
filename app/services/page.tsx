import ServicesTabs from "@/components/services/services-tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore consulting, coaching, and workshop services offered by Dr. Marc Lewis in applied sport science and performance optimization.",
};

export default function Services() {
  return <ServicesTabs />;
}
