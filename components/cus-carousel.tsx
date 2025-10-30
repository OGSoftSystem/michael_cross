"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

const Items = ["mc1", "mc2", "mc3"];
export function CustomCarousel() {
  return (
    <Carousel
      className="w-full"
      // opts={{
      //   align: "start",
      //   loop: true,
      // }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {Items.map((i, index) => (
          <CarouselItem key={index}>
            <ImageContainer src={`${i}.jpeg`} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}

function ImageContainer({ src }: { src: string }) {
  return (
    <div className="w-[500px] h-[300px] relative">
      <Image src={`/images/${src}`} alt="about" fill className="bg-cover" />
    </div>
  );
}
