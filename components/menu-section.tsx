"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";

interface MenuItem {
  name: string;
  description?: string;
  price: string;
  subtext?: string;
  spicy?: number;
  image?: string;
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
}

export interface MenuSectionProps {
  category: MenuCategory;
}

export function MenuSection({ category }: MenuSectionProps) {
  const springProps = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="space-y-8">
      {category.description && (
        <animated.div style={springProps} className="text-center">
          <h2 className="text-2xl font-bold">{category.name}</h2>
          <p className="text-gray-600">Please provide a description for this category.</p>
        </animated.div>
      )}

      {/* Placeholder for Video Clips */}
      <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
        <p className="absolute inset-0 flex items-center justify-center text-gray-500">
          Please provide a video showcasing food preparation and ambiance.
        </p>
      </div>

      {/* Signature Dishes Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {category.items.map((item, index) => (
          <Card key={index} className="shadow-md">
            <CardContent>
              <Image
                src={item.image || "/images/placeholder.png"}
                alt={item.name}
                width={300}
                height={200}
                className="rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
              <p className="text-gray-500">Please provide a description for this dish.</p>
              <p className="text-gray-700 font-bold">Please provide the price for this dish.</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Placeholder for Testimonials Slider */}
      <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
        <p className="absolute inset-0 flex items-center justify-center text-gray-500">
          Please provide customer testimonials to display here.
        </p>
      </div>
    </div>
  );
}
