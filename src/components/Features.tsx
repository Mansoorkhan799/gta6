import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const features = [
  {
    icon: "🌴",
    title: "Vice City Returns",
    description:
      "Explore the sprawling state of Leonida — from neon-lit Vice City streets to swamplands and the Keys. The biggest open world Rockstar has ever built.",
  },
  {
    icon: "👫",
    title: "Dual Protagonists",
    description:
      "Play as Lucia and Jason, a criminal duo inspired by Bonnie and Clyde. GTA 6's first female lead brings a fresh perspective to the franchise.",
  },
  {
    icon: "💻",
    title: "GTA 6 for PC",
    description:
      "Complete PC release guide — download info, estimated system requirements, and everything you need to play GTA VI on your gaming rig.",
  },
  {
    icon: "🎬",
    title: "Cinematic Storytelling",
    description:
      "Rockstar's most ambitious narrative yet. Modern-day crime epic with social media, heists, and the signature GTA satirical edge.",
  },
  {
    icon: "🚗",
    title: "Next-Gen Open World",
    description:
      "Every building enterable, dynamic weather, wildlife ecosystems, and the most detailed traffic and pedestrian AI in gaming history.",
  },
  {
    icon: "📰",
    title: "Latest News & Updates",
    description:
      "Stay ahead with release date updates, trailer breakdowns, pre-order guides, and PC port news — all in one place.",
  },
];

export function Features() {
  return (
    <section className="section-padding bg-surface" aria-labelledby="features-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="section-label text-accent-pink">Why GTA 6</p>
          <h2 id="features-heading" className="display-heading mt-2 tracking-wider">
            THE NEXT EVOLUTION
          </h2>
          <p className="mx-auto mt-3 max-w-2xl px-2 text-sm text-muted sm:mt-4 sm:text-base">
            Grand Theft Auto VI pushes every boundary. Explore our{" "}
            <Link href="/gta6-release-date" className="text-accent-teal underline-offset-4 hover:underline">
              release date
            </Link>,{" "}
            <Link href="/gta6-pre-order" className="text-accent-teal underline-offset-4 hover:underline">
              pre-order
            </Link>, and{" "}
            <Link href="/gta6-download" className="text-accent-teal underline-offset-4 hover:underline">
              download
            </Link>{" "}
            guides for everything you need.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.08}>
              <article className="card-glow group h-full rounded-lg border border-border bg-surface-elevated p-5 transition-all duration-300 hover:border-accent-pink/30 sm:p-6">
                <span className="text-2xl sm:text-3xl" role="img" aria-hidden="true">
                  {feature.icon}
                </span>
                <h3 className="mt-3 font-display text-xl tracking-wider sm:mt-4 sm:text-2xl">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
