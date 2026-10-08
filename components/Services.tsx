"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  HeartHandshake,
  Home,
  UtensilsCrossed,
  Pill,
  CarFront,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Companion Care",
    slug: "companion-care",
    description:
      "Friendly companionship, meaningful conversations, emotional support, and social engagement to reduce loneliness and improve well-being.",
    icon: HeartHandshake,
  },
  {
    title: "Homemaker Services",
    slug: "homemaker-services",
    description:
      "Light housekeeping, laundry, organization, and maintaining a clean, safe, and comfortable living environment.",
    icon: Home,
  },
  {
    title: "Meal Preparation",
       slug: "meal-preparation",
    description:
      "Nutritious meal planning and preparation based on dietary preferences and individual health needs.",
    icon: UtensilsCrossed,
  },
  {
    title: "Medication Reminders",
    slug: "medication-reminders",
    description:
      "Helping clients stay on schedule with medication reminders and daily wellness routines.",
    icon: Pill,
  },
  {
    title: "Transportation Assistance",
      slug: "transportation",
    description:
      "Safe transportation for appointments, grocery shopping, errands, and community outings.",
    icon: CarFront,
  },
  {
    title: "Personal Care Support",
        slug: "personal-care",
    description:
      "Assistance with grooming, dressing, mobility, and other non-medical daily living activities.",
    icon: Sparkles,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-brand-green-pale py-24"
    >

      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-brand-green-light/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-yellow/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* =====================================================
            HEADING
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-block rounded-full bg-white px-5 py-2 text-lg font-bold text-brand-green-dark shadow-sm">
  Our Services
</span>

<h2 className="mt-6 font-heading text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
  Personalized Care That Supports Everyday Living
</h2>

<div
  className="section-heading-divider"
  aria-hidden="true"
/>

<p className="mt-6 text-xl font-semibold leading-relaxed text-gray-700">
  We provide compassionate, dependable, and personalized companion
  care services designed to help seniors and adults maintain their
  independence while enjoying a better quality of life.
</p>

        </motion.div>

        {/* =====================================================
            SERVICE CARDS
        ===================================================== */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-3xl bg-white p-8 shadow-lg transition hover:shadow-2xl"
              >

                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-green-pale transition group-hover:bg-brand-green">

                  <Icon
                    size={32}
                    className="text-brand-green transition group-hover:text-white"
                  />

                </div>

                {/* Title */}

                <h3 className="mt-8 font-heading text-3xl font-bold text-gray-900">
  {service.title}
</h3>

                {/* Description */}

               <p className="mt-4 text-lg font-medium leading-relaxed text-gray-700">
  {service.description}
</p>

                {/* Learn More */}

          <Link
  href={`/services/${service.slug}`}
  className="mt-8 inline-flex min-h-12 items-center gap-3
    text-lg font-bold text-brand-green-dark
    underline decoration-2 underline-offset-4
    transition-colors hover:text-brand-green
    focus-visible:outline focus-visible:outline-2
    focus-visible:outline-offset-4"
>
  Learn More
  <ArrowRight
    size={22}
    aria-hidden="true"
    className="transition-transform group-hover:translate-x-1"
  />
</Link>

              </motion.div>
            );
          })}

        </div>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl bg-brand-green px-10 py-14 text-center text-white shadow-2xl"
        >

          <h3 className="font-heading text-3xl font-bold">
            Looking for Personalized Companion Care?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-relaxed text-white">
  Our compassionate caregivers are ready to provide dependable
  support tailored to your family's needs. Let's discuss how we can
  help your loved one live comfortably and independently.
</p>

        
          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              href="/intake"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-brand-green-dark transition hover:scale-105"
            >
              Schedule Consultation
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-brand-green-dark"
            >
              Contact Us
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}