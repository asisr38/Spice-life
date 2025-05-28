import { MotionSection } from "@/components/motion-section";
import { SectionHeader } from "@/components/section-header";
import { MenuSection } from "@/components/menu-section";

export default function MenuPage() {
  const menuImages = [
    "/images/menu-qr-code.png",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF4EF] to-[#F28C28]">
      <MotionSection className="py-20 bg-[#FEF3E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Menu"
            subtitle="Explore our offerings"
            className="mb-16"
          />
          <div className="flex flex-col space-y-4">
            <a
              href="/locations/location1/order"
              className="text-lg font-semibold text-[#F28C28] hover:underline"
            >
              Order Online - Location 1
            </a>
            <a
              href="/locations/location2/order"
              className="text-lg font-semibold text-[#F28C28] hover:underline"
            >
              Order Online - Location 2
            </a>
          </div>
          <MenuSection category={{ id: "1", name: "All Items", items: [] }} images={menuImages} />
        </div>
      </MotionSection>
    </div>
  );
}
