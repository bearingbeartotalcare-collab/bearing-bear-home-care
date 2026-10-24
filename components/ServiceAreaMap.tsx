import Image from "next/image";

export default function ServiceAreaMap() {
  return (
    <section
      aria-labelledby="service-area-heading"
      className="bg-[#f8f6ed] px-4 py-12 sm:px-6 sm:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2
            id="service-area-heading"
            className="font-heading text-3xl font-bold text-[#16351d] sm:text-4xl"
          >
            Our Service Area
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
            Bearing Bear provides companion care and homemaker services
            throughout our designated service area in Palm Beach County.
            Contact us to confirm availability in your community.
          </p>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#f8dc05]" />
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#16351d]/15 bg-white shadow-md">
          <Image
            src="/images/palm-beach-service-area.jpg"
            alt="Map showing communities in Palm Beach County, Florida, including Jupiter, Palm Beach Gardens, West Palm Beach, Wellington, Lake Worth, Boynton Beach, and Boca Raton"
            width={1210}
            height={1240}
            className="h-auto max-h-[750px] w-full object-contain"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      </div>
    </section>
  );
}