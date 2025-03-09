"use client";
import Aboutme from "@/components/Aboutme";
import ContactMe from "@/components/Contactme";
import MyExperience from "@/components/Experience";
import Jumbotron from "@/components/Jumbotron";
import MyPorto from "@/components/Myporto";
import SkillsSection from "@/components/Myskill";
import { Testimonial } from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <SkillsSection />
      <Aboutme />
      <MyPorto />
      <MyExperience />
      <Testimonial />
      <ContactMe />
    </div>
  );
}
