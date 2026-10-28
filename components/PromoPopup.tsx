"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("bearing-bear-promo-dismissed");

    if (!dismissed) {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function closePopup() {
    sessionStorage.setItem("bearing-bear-promo-dismissed", "true");
    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-3 sm:p-6"
      onClick={closePopup}
    >
      <div
  role="dialog"
  aria-modal="true"
  aria-label="Bearing Bear promotional offer"
  className="relative mx-auto max-h-[94dvh] w-fit max-w-[95vw] overflow-hidden rounded-xl bg-transparent p-0 shadow-2xl"
  onClick={(event) => event.stopPropagation()}
>
  <button
    type="button"
    onClick={closePopup}
    aria-label="Close promotional offer"
    className="absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-gray-900 shadow-lg transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
  >
    <X size={24} />
  </button>

  <Image
    src="/images/bearing-bear-promo.png"
    alt="Bearing Bear LLC home maker and companion care services promotional flyer"
    width={1024}
    height={1536}
    priority
    className="block h-auto max-h-[94dvh] w-auto max-w-[95vw] rounded-xl object-contain"
    sizes="95vw"
  />
</div>



    </div>
  );
}