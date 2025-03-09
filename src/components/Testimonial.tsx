import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Kevin",
    username: "@kevin",
    body: "This product is fantastic. I can’t believe how great it is.",
    img: "/testimonial/boy.png",
  },
  {
    name: "Chloe",
    username: "@chloe",
    body: "I'm amazed by how seamless everything feels. It's truly impressive.",
    img: "/testimonial/gamer.png",
  },
  {
    name: "David",
    username: "@david",
    body: "I've never encountered anything quite like this before. Outstanding work.",
    img: "/testimonial/man.png",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is exactly what I needed. It's so convenient and well-designed.",
    img: "/testimonial/woman.png",
  },
  {
    name: "Lucy",
    username: "@lucy",
    body: "Absolutely brilliant! I'll be telling all my friends about it.",
    img: "/testimonial/girl.png",
  },
  {
    name: "cammila",
    username: "@cammila",
    body: "A game-changer for sure. The experience has exceeded my expectations.",
    img: "/testimonial/human.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Testimonial() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-12 text-center">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 mb-8 rounded-full"></div>
          <p className="mt-4 text-muted-foreground text-lg max-w-3xl mx-auto">
            Don't just take our word for it — hear from some of our satisfied
            clients.
          </p>
        </div>

        <div className="relative w-full overflow-hidden py-4">
          <div className="mb-8">
            <Marquee pauseOnHover className="[--duration:20s]">
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
          </div>

          <div>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
          </div>

          {/* Edge gradients with increased width for better visibility */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
