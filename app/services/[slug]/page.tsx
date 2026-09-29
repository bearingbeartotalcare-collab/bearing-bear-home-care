import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  HeartHandshake,
  Home,
  UtensilsCrossed,
  Pill,
  CarFront,
  Sparkles,
} from "lucide-react";

const services = {
  "companion-care": {
    title: "Companion Care",
    description:
      "Friendly companionship, meaningful conversations, emotional support, and social engagement to help reduce loneliness and support well-being.",
    icon: HeartHandshake,
    intro:
      "Companion care is about building meaningful connections and helping people feel supported in their everyday lives.",
    benefits: [
      "Friendly conversation and companionship",
      "Social engagement and enjoyable activities",
      "Emotional support and a caring presence",
      "Support with maintaining everyday routines",
    ],
  },

  "homemaker-services": {
    title: "Homemaker Services",
    description:
      "Light housekeeping, laundry, organization, and help maintaining a clean, safe, and comfortable living environment.",
    icon: Home,
    intro:
      "A comfortable home can make everyday life easier. Homemaker services help with household tasks so clients can enjoy a more organized living space.",
    benefits: [
      "Light housekeeping and tidying",
      "Laundry and clothing organization",
      "Help keeping frequently used areas organized",
      "Support with maintaining a comfortable home",
    ],
  },

  "meal-preparation": {
    title: "Meal Preparation",
    description:
      "Meal planning and preparation based on individual preferences and agreed dietary needs.",
    icon: UtensilsCrossed,
    intro:
      "Enjoying regular meals can be easier with a little help. Our caregivers can assist with meal preparation according to the client's preferences and care plan.",
    benefits: [
      "Meal preparation based on personal preferences",
      "Help with planning everyday meals",
      "Assistance with simple kitchen tasks",
      "Support with established meal routines",
    ],
  },

  "medication-reminders": {
    title: "Medication Reminders",
    description:
      "Reminders to help clients follow their established medication schedules and daily wellness routines.",
    icon: Pill,
    intro:
      "Caregivers can provide reminders according to the client's established routine and care plan. This service does not replace a pharmacist, nurse, or other qualified medical professional.",
    benefits: [
      "Reminders at agreed times",
      "Support with maintaining daily routines",
      "Communication of concerns to the designated contact",
      "A consistent, supportive approach to reminders",
    ],
  },

  transportation: {
    title: "Transportation Assistance",
    description:
      "Assistance with transportation for appointments, grocery shopping, errands, and community outings.",
    icon: CarFront,
    intro:
      "Getting to appointments and running everyday errands can be challenging. Transportation assistance helps clients access important destinations and community activities.",
    benefits: [
      "Transportation for scheduled appointments",
      "Grocery shopping and everyday errands",
      "Community outings and activities",
      "Assistance coordinated around individual needs",
    ],
  },

  "personal-care": {
    title: "Personal Care Support",
    description:
      "Assistance with grooming, dressing, mobility, and other agreed non-medical daily living activities.",
    icon: Sparkles,
    intro:
      "Personal care support helps with everyday activities while respecting each client's dignity, preferences, and independence.",
    benefits: [
      "Assistance with dressing and grooming",
      "Support with everyday personal routines",
      "Mobility assistance as agreed in the care plan",
      "Respectful, person-centered support",
    ],
  },
};

type ServiceSlug = keyof typeof services;

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!Object.hasOwn(services, slug)) {
    notFound();
  }

  const service = services[slug as ServiceSlug];
  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-brand-green-pale px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/#services"
            className="mb-10 inline-flex items-center gap-2
              text-lg font-bold text-brand-green-dark
              underline underline-offset-4
              hover:text-brand-green"
          >
            <ArrowLeft size={20} aria-hidden="true" />
            All Services
          </Link>

          <div className="flex h-16 w-16 items-center justify-center
            rounded-2xl bg-brand-green text-white">
            <Icon size={32} aria-hidden="true" />
          </div>

          <h1 className="mt-8 text-4xl font-bold leading-tight
            text-gray-950 sm:text-5xl">
            {service.title}
          </h1>

          <div
            className="section-heading-divider !mx-0"
            aria-hidden="true"
          />

          <p className="mt-6 max-w-3xl text-xl font-medium
            leading-relaxed text-gray-800">
            {service.description}
          </p>

          <Link
            href="/intake"
            className="mt-8 inline-flex min-h-14 items-center
              justify-center gap-3 rounded-xl bg-brand-green
              px-7 py-4 text-lg font-bold text-white
              transition-colors hover:bg-brand-green-dark
              focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-4"
          >
            Schedule a Consultation
            <ArrowRight size={22} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Service details */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-950">
              How We Can Help
            </h2>

            <div
              className="section-heading-divider !mx-0"
              aria-hidden="true"
            />

            <p className="mt-6 text-lg font-medium
              leading-relaxed text-gray-700">
              {service.intro}
            </p>
          </div>

          <div className="rounded-3xl border border-green-100
            bg-brand-green-pale p-7 sm:p-9">
            <h2 className="text-2xl font-bold text-gray-950">
              What This Service May Include
            </h2>

            <ul className="mt-6 space-y-4">
              {service.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3
                    text-lg font-medium leading-relaxed
                    text-gray-800"
                >
                  <span
                    className="mt-2 h-2.5 w-2.5 shrink-0
                      rounded-full bg-brand-green"
                    aria-hidden="true"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="bg-brand-green px-6 py-16 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Let's Talk About Your Care Needs
          </h2>

          <p className="mt-5 text-lg font-medium
            leading-relaxed text-white">
            Every person's needs are different. Contact us to discuss
            the support you're looking for and whether this service
            is appropriate for your situation.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/intake"
              className="inline-flex min-h-14 items-center
                justify-center rounded-xl bg-white px-7 py-4
                text-lg font-bold text-brand-green-dark
                hover:bg-green-50"
            >
              Schedule Consultation
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center
                justify-center rounded-xl border-2 border-white
                px-7 py-4 text-lg font-bold text-white
                hover:bg-white hover:text-brand-green-dark"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}