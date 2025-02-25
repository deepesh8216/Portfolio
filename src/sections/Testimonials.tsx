import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image"; // ✅ Import Next.js Image component
import grainImage from '@/assets/images/grain.jpg'
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Mrinall Kumar",
    position: "Teammate @ ITER — SOA",
    text: "Working together on various projects, I’ve seen an exceptional dedication to problem-solving and innovation. His ability to understand and implement complex ideas is truly commendable.",
    avatar: memojiAvatar1,
  },
  {
    name: "Hritik Kumar",
    position: "Collaborator @ ITER — SOA",
    text: "Working with Deepesh was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Yagya Saini",
    position: "Project Partner @ ITER — SOA",
    text: "His ability to break down complicated concepts and implement them efficiently helped our team tremendously. A reliable and resourceful developer.",
    avatar: memojiAvatar3,
  },
  {
    name: "Sailesh Kumar",
    position: "Coding Buddy @ ITER — SOA",
    text: "A problem-solver at heart, he always finds the most optimized solutions to challenges. His skills in frontend development made our projects look professional and polished.",
    avatar: memojiAvatar4,
  },
  {
    name: "Ratnesh Roy",
    position: "Team Member @ ITER — SOA",
    text: "His passion for web development is evident in every project. The commitment to clean code and user-friendly design is what sets him apart.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Peer Testimonials" title="What My Teammates Say About Me" description="Here’s what my peers and collaborators from ITER — SOA have to say about working with me on various projects."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_7%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:70s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
              {testimonials.map(testimonial => (
                <Card key={testimonial.name} 
                className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
                  <div className="flex gap-4 items-center">
                    <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                    <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full" />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-white/40">{testimonial.position}</div>
                    </div>
                  </div>
                  <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                </Card>
              ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
