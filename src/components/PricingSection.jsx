import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Hobby",
    price: { monthly: 0, yearly: 0 },
    description: "For individuals and small teams getting started.",
    features: ["AI Content Repurposing", "Basic Analytics", "1 Social Profile", "Community Support"],
    cta: "Get Started for Free",
    featured: false,
  },
  {
    name: "Pro",
    price: { monthly: 29, yearly: 290 },
    description: "For creators and businesses who need more power.",
    features: [
      "Everything in Hobby",
      "Smart Scheduler",
      "Advanced Analytics",
      "5 Social Profiles",
      "Brand Deals CRM",
      "Priority Support",
    ],
    cta: "Start 14-Day Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom needs.",
    features: [
      "Everything in Pro",
      "Dedicated Account Manager",
      "API Access & Integrations",
      "Team Collaboration Tools",
      "Custom Onboarding",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="scroll-mt-16 bg-background text-primary py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-teal-300"
          >
            Simple, transparent pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
          >
            The right plan for you
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl text-secondary"
          >
            Join our beta for free lifetime access. Pricing below is for our public launch.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <span className={`font-medium ${!isYearly ? "text-primary" : "text-secondary"}`}>Monthly</span>
          <label htmlFor="billing-cycle" className="relative inline-flex cursor-pointer items-center">
            <input id="billing-cycle" type="checkbox" className="peer sr-only" checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
            <div className="h-7 w-12 rounded-full bg-white/10 after:absolute after:left-1 after:top-1 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-teal-500 peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-300" />
          </label>
          <span className={`font-medium ${isYearly ? "text-primary" : "text-secondary"}`}>
            Yearly <span className="text-teal-400">(Save 17%)</span>
          </span>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.03 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: "spring", stiffness: 200, damping: 30, delay: 0.2 + plans.indexOf(plan) * 0.1 }}
              className={`relative flex flex-col rounded-3xl border p-8 shadow-2xl ${plan.featured ? "border-teal-400/50 shadow-teal-400/10" : "border-border"}`}
            >
              {plan.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal-400 px-4 py-1 text-sm font-semibold text-slate-950">Most Popular</div>}
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className="mt-4 text-secondary">{plan.description}</p>
              <div className="mt-6">
                {typeof plan.price === "object" ? (
                  <>
                    <span className="text-4xl font-bold">${isYearly ? Math.round(plan.price.yearly / 12) : plan.price.monthly}</span>
                    <span className="text-secondary">/ month</span>
                  </>
                ) : (
                  <span className="text-4xl font-bold">{plan.price}</span>
                )}
              </div>
              <a href="#waitlist" className={`mt-8 w-full rounded-lg py-3 text-center font-semibold transition ${plan.featured ? "bg-teal-400 text-slate-950 hover:bg-teal-300" : "bg-white/10 text-primary hover:bg-white/20"}`}>
                {plan.cta}
              </a>
              <ul className="mt-8 space-y-4 text-sm text-secondary">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-teal-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}