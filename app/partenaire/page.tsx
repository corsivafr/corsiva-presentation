import HeroPartner from "@/components/sections/HeroPartner";
import StepsSection from "@/components/sections/StepsSection";
import CommissionsTable from "@/components/sections/CommissionsTable";
import PartnerProfiles from "@/components/sections/PartnerProfiles";
import CTAFinal from "@/components/sections/CTAFinal";

export const metadata = {
  title: "Espace Partenaire — Corsiva",
  description: "Devenez partenaire Corsiva et touchez jusqu'à 15% de commission sur chaque location que vous apportez. Programme pour concierges, wedding planners et conseillers privés.",
};

const partnerSteps = [
  {
    number: "01",
    title: "Demande de partenariat",
    desc: "Contactez-nous pour valider votre profil. Réponse sous 48h pour les professionnels du secteur premium.",
  },
  {
    number: "02",
    title: "Partagez votre lien",
    desc: "Recevez votre code partenaire personnalisé et commencez à envoyer des leads dès le lendemain.",
  },
  {
    number: "03",
    title: "Touchez vos commissions",
    desc: "Paiement automatique sous 48h après confirmation de chaque location. Tableau de bord en temps réel.",
  },
];

export default function PartenairePage() {
  return (
    <>
      <HeroPartner />
      <StepsSection
        eyebrow="Comment ça fonctionne"
        title="Devenir partenaire en 3 étapes"
        subtitle="Simple, rapide, sans contrainte. Vous vous concentrez sur vos clients, nous gérons le reste."
        steps={partnerSteps}
      />
      <CommissionsTable />
      <PartnerProfiles />
      <CTAFinal
        eyebrow="Rejoindre le programme"
        title="Commencez à générer des commissions"
        subtitle="Aucun stock à gérer, aucun investissement. Juste votre réseau et notre flotte."
        cta="Devenir partenaire"
        href="mailto:contact@corsiva.fr"
        secondaryCta="Appeler"
        secondaryHref="tel:0480819138"
      />
    </>
  );
}
