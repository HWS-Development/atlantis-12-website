import Seo from "../components/Common/Seo";

export default function MentionsLegales() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-20 px-[8vw] md:px-[10vw]">
      <Seo
        title="Mentions Légales | Atlantis 12 Essaouira"
        description="Mentions légales du site atlantis12essaouira.com — éditeur, directrice de publication, registre de commerce."
      />
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-10">Mentions Légales</h1>

        <section className="mb-8">
          <h2 className="font-body text-lg font-bold text-foreground mb-3">Éditeur du site</h2>
          <div className="font-body text-sm leading-relaxed text-foreground/75 space-y-1">
            <p className="font-semibold">Atlantis 12 SARL</p>
            <p>Douar Laraich, Ounagha, Essaouira, Maroc</p>
            <p>Registre de Commerce : 6085</p>
            <p>ICE : 003046032000041</p>
            <p>Directrice de la publication : Mme Asmae Benabdeljalil</p>
            <p>Téléphone : +212 666 29 22 85</p>
            <p>E-mail : a.benabdeljalil@atlantis12essaouira.com</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="font-body text-lg font-bold text-foreground mb-3">Adresse postale</h2>
          <p className="font-body text-sm leading-relaxed text-foreground/75">
            B.P. 1319, Bureau de poste Essaouira Gare – Essaouira – Maroc
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-body text-lg font-bold text-foreground mb-3">Site internet</h2>
          <p className="font-body text-sm leading-relaxed text-foreground/75">
            <a href="https://www.atlantis12essaouira.com" className="underline hover:text-primary transition-colors">
              www.atlantis12essaouira.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
