"use client";
import Aboutme from "@/components/Aboutme";
import MyExperience from "@/components/Experience";
import Jumbotron from "@/components/Jumbotron";
import MyPorto from "@/components/Myporto";
import Testimonial from "@/components/Testimonial";
import MySkill from "@/components/Myskill";
import Coba from "@/components/Coba";

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <MySkill />
      <Aboutme />
      <MyPorto />
      <MyExperience />
      <Testimonial />
      <Coba />
    </div>
  );
}
