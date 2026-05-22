import HeroClient from "@/components/sections/HeroClient";
import ClientBenefits from "@/components/sections/ClientBenefits";
import ReferralSection from "@/components/sections/ReferralSection";
import TiersGrid from "@/components/sections/TiersGrid";
import CTAFinal from "@/components/sections/CTAFinal";

export const metadata = {
  title: "Espace Client — Corsiva",
  description: "Réservez un véhicule premium Corsiva pour votre mariage, week-end ou déplacement professionnel en Auvergne-Rhône-Alpes.",
};

export default function ClientPage() {
  return (
    <>
      <HeroClient />
      <ClientBenefits />
      <ReferralSection />
      <TiersGrid />
      <CTAFinal
        eyebrow="Prêt à conduire ?"
        title="Réservez votre véhicule d'exception"
        subtitle="BMW, Porsche, Mercedes — disponibles à Chambéry, Lyon, Annecy, Grenoble. Livraison sur votre lieu."
        cta="Réserver maintenant"
        href="mailto:contact@corsiva.fr"
        secondaryCta="Appeler"
        secondaryHref="tel:0480819138"
      />
    </>
  );
}
