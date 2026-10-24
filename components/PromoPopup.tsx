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
        className="relative max-h-[92dvh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white p-2 shadow-2xl sm:p-3"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close promotional offer"
          className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
        >
          <X size={26} />
        </button>

        <Image
          src="/images/bearing-bear-promo.jpg"
          alt="Bearing Bear LLC home maker and companion care services promotional flyer"
          width={1200}
          height={1600}
          priority
          className="mx-auto h-auto max-h-[84dvh] w-full rounded-lg object-contain"
        />
      </div>
    </div>
  );
}