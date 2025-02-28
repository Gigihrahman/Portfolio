import React from "react";
import { Card, CardDescription, CardFooter } from "@/components/ui/card";

const Testimonial = () => {
  return (
    <div className="flex m-10 p-10 justify-center items-center gap-8 flex-row space-y-8 sm:space-y-0">
      <Card className="max-w-md bg-white shadow-lg rounded-lg p-6">
        <CardDescription>
          <blockquote className="text-lg font-semibold text-gray-700">
            "Shadcn UI Kit for Figma has completely transformed our design
            process. It's incredibly intuitive and saves us so much time. The
            components are beautifully crafted and customizable."
          </blockquote>
        </CardDescription>
        <CardFooter className="flex m-4 py-4 items-center space-x-4">
          <img
            src="https://randomuser.me/api/portraits/men/76.jpg"
            alt="Lando Norris"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h5 className="font-semibold">Lando Norris</h5>
            <p className="text-sm text-gray-500">Founder at Acme Inc.</p>
          </div>
        </CardFooter>
      </Card>

      <Card className="max-w-md bg-white shadow-lg rounded-lg p-6">
        <CardDescription>
          <blockquote className="text-lg font-semibold text-gray-700">
            "Shadcn UI Kit for Figma has completely transformed our design
            process. It's incredibly intuitive and saves us so much time. The
            components are beautifully crafted and customizable."
          </blockquote>
        </CardDescription>
        <CardFooter className="flex m-4 py-4 items-center space-x-4">
          <img
            src="https://randomuser.me/api/portraits/men/76.jpg"
            alt="Lando Norris"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h5 className="font-semibold">Lando Norris</h5>
            <p className="text-sm text-gray-500">Founder at Acme Inc.</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Testimonial;
