import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function SkillsSection() {
  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend",
      skills: [
        {
          name: "React",
          image: "/skills/react.png",
        },
        {
          name: "Next.js",
          image: "/skills/next.svg",
        },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      skills: [
        {
          name: "JavaScript",
          image: "/skills/javascript.png",
        },
        {
          name: "TypeScript",
          image: "/skills/typescript.png",
        },
        {
          name: "PHP",
          image: "/skills/php.png",
        },
        {
          name: "Golang",
          image: "/skills/golang.png",
        },
        {
          name: "Postgree",
          image: "/skills/postgree.jpg",
        },
        {
          name: "Rest API",
          image: "/skills/restapi.jpg",
        },
        {
          name: "MySQL",
          image: "/skills/mysql.png",
        },
      ],
    },
    {
      id: "devops",
      name: "DevOps",
      skills: [
        {
          name: "GCP",
          image: "/skills/gcp.png",
        },
        {
          name: "AWS",
          image: "/skills/aws.png",
        },
        {
          name: "Docker",
          image: "/skills/docker.png",
        },
      ],
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-background" id="skill">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Technical Expertise
        </h2>

        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors"
                      >
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-3 overflow-hidden">
                          <Image
                            src={skill.image || "/placeholder.svg"}
                            alt={`${skill.name} logo`}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <h3 className="font-medium text-center">
                          {skill.name}
                        </h3>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
