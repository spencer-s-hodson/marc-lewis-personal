import { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Dr. Marc Lewis and his work in human performance.",
};

export default function About() {
  return (
    <Content />
  );
}