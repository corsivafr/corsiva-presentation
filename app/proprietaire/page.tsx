import HeroOwner from "@/components/sections/HeroOwner";
import BentoBenefits from "@/components/sections/BentoBenefits";
import StepsSection from "@/components/sections/StepsSection";
import StatsBanner from "@/components/sections/StatsBanner";
import SpacesCards from "@/components/sections/SpacesCards";
import CTAFinal from "@/components/sections/CTAFinal";

const ownerSteps = [
  {
    number: "01",
    title: "Soumettez votre véhicule",
    desc: "Envoyez-nous les infos de votre BMW, Porsche ou Mercedes. Notre équipe évalue et vous rappelle sous 24h.",
  },
  {
    number: "02",
    title: "On gère tout",
    desc: "Inspection, assurance, photographies, mise en ligne — Corsiva prend en charge l'intégralité du processus.",
  },
  {
    number: "03",
    title: "Vous encaissez",
    desc: "Recevez vos revenus chaque mois, directement sur votre compte. Zéro contrainte, zéro paperasse.",
  },
];

export default function ProprietairePage() {
  return (
    <>
      <HeroOwner />
      <BentoBenefits />
      <StepsSection
        eyebrow="Comment ça marche"
        title="En 3 étapes simples"
        subtitle="Du premier contact à vos premiers revenus, tout est fluide."
        steps={ownerSteps}
      />
      <StatsBanner />
      <SpacesCards />
      <CTAFinal
        eyebrow="Démarrer maintenant"
        title="Prêt à rentabiliser votre véhicule ?"
        subtitle="Rejoignez 300+ propriétaires qui génèrent des revenus réguliers avec Corsiva. Inscription gratuite, sans engagement."
        cta="Nous contacter"
        href="mailto:contact@corsiva.fr"
      />
    </>
  );
}
