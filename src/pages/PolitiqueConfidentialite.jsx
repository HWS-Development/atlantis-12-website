import Seo from "../components/Common/Seo";

export default function PolitiqueConfidentialite() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-20 px-[8vw] md:px-[10vw]">
      <Seo
        title="Politique de Confidentialité | Atlantis 12 Essaouira"
        description="Politique de confidentialité et de protection des données personnelles d'Atlantis 12, maison d'hôtes & d'art à Essaouira, Maroc."
      />
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
          Politique de Confidentialité
        </h1>
        <p className="font-body text-xs text-foreground/50 mb-10">Dernière mise à jour : 17/05/2025</p>

        <Section n="1" title="Responsable du traitement">
          <P>
            Le responsable du traitement des données personnelles collectées sur ce site est :
          </P>
          <div className="font-body text-sm leading-relaxed text-foreground/75 space-y-1 pl-4 border-l-2 border-primary/20 my-3">
            <p className="font-semibold">Atlantis 12 SARL</p>
            <p>Douar Laraich, Ounagha, Essaouira, Maroc</p>
            <p>ICE : 003046032000041</p>
            <p>E-mail : a.benabdeljalil@atlantis12essaouira.com</p>
            <p>Téléphone : +212 666 29 22 85</p>
          </div>
        </Section>

        <Section n="2" title="Données collectées">
          <P>Dans le cadre de votre navigation ou de votre réservation, nous pouvons collecter :</P>
          <Ul>
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Dates de séjour souhaitées</li>
            <li>Préférences liées au séjour (chambre, activités)</li>
            <li>Données de paiement (traitées par notre prestataire de paiement sécurisé)</li>
          </Ul>
        </Section>

        <Section n="3" title="Finalités du traitement">
          <P>Vos données personnelles sont utilisées pour :</P>
          <Ul>
            <li>Traiter et confirmer votre réservation</li>
            <li>Vous contacter concernant votre séjour</li>
            <li>Répondre à vos demandes via le formulaire de contact</li>
            <li>Respecter nos obligations légales (fiche de police, facturation)</li>
            <li>Améliorer nos services et votre expérience utilisateur</li>
          </Ul>
        </Section>

        <Section n="4" title="Base légale du traitement">
          <P>Le traitement de vos données repose sur :</P>
          <Ul>
            <li>L'exécution d'un contrat (réservation de séjour)</li>
            <li>Le respect d'obligations légales (réglementation hôtelière marocaine)</li>
            <li>Votre consentement (formulaire de contact, newsletter le cas échéant)</li>
            <li>L'intérêt légitime d'Atlantis 12 (amélioration des services)</li>
          </Ul>
        </Section>

        <Section n="5" title="Durée de conservation">
          <P>
            Vos données personnelles sont conservées pendant la durée nécessaire aux finalités
            pour lesquelles elles ont été collectées :
          </P>
          <Ul>
            <li>Données de réservation : 5 ans à compter de la fin du séjour</li>
            <li>Données de facturation : 10 ans (obligation comptable)</li>
            <li>Formulaire de contact : 1 an après la dernière communication</li>
          </Ul>
        </Section>

        <Section n="6" title="Partage des données">
          <P>
            Vos données ne sont jamais vendues à des tiers. Elles peuvent être partagées
            uniquement avec :
          </P>
          <Ul>
            <li>Notre prestataire de paiement en ligne (pour le traitement sécurisé des transactions)</li>
            <li>Les autorités marocaines compétentes (obligation légale : fiche de police)</li>
            <li>Notre hébergeur web (pour le fonctionnement technique du site)</li>
          </Ul>
        </Section>

        <Section n="7" title="Cookies">
          <P>
            Ce site utilise uniquement des cookies strictement nécessaires au bon fonctionnement
            du site (préférences de langue, session de navigation). Aucun cookie publicitaire ou
            de tracking tiers n'est utilisé.
          </P>
        </Section>

        <Section n="8" title="Vos droits">
          <P>Conformément à la loi marocaine n° 09-08, vous disposez des droits suivants :</P>
          <Ul>
            <li>Droit d'accès à vos données personnelles</li>
            <li>Droit de rectification des données inexactes</li>
            <li>Droit d'opposition au traitement de vos données</li>
            <li>Droit à la suppression de vos données</li>
          </Ul>
          <P>
            Pour exercer ces droits, vous pouvez nous contacter par e-mail à :{" "}
            <a href="mailto:a.benabdeljalil@atlantis12essaouira.com" className="underline hover:text-primary transition-colors">
              a.benabdeljalil@atlantis12essaouira.com
            </a>
          </P>
        </Section>

        <Section n="9" title="Sécurité des données">
          <P>
            Atlantis 12 met en œuvre les mesures techniques et organisationnelles appropriées
            pour protéger vos données personnelles contre tout accès non autorisé, modification,
            divulgation ou destruction.
          </P>
          <P>
            Les transactions de paiement sont sécurisées par notre prestataire via un protocole
            de chiffrement SSL.
          </P>
        </Section>

        <Section n="10" title="Modification de la politique">
          <P>
            Atlantis 12 se réserve le droit de modifier la présente politique de confidentialité à
            tout moment. Toute modification sera publiée sur cette page avec une date de mise à
            jour actualisée.
          </P>
        </Section>

        <Section n="11" title="Droit applicable">
          <P>
            La présente politique est régie par le droit marocain, et notamment la loi n° 09-08
            relative à la protection des personnes physiques à l'égard du traitement des données
            à caractère personnel.
          </P>
        </Section>
      </div>
    </div>
  );
}

function Section({ n, title, children }) {
  return (
    <section className="mb-8">
      <h2 className="font-body text-lg font-bold text-foreground mb-3">
        {n}. {title}
      </h2>
      <div className="space-y-2">{children}</div>
    </section>
  );
}

function P({ children, className = "" }) {
  return (
    <p className={`font-body text-sm leading-relaxed text-foreground/75 ${className}`}>
      {children}
    </p>
  );
}

function Ul({ children }) {
  return (
    <ul className="list-disc pl-5 font-body text-sm leading-relaxed text-foreground/75 space-y-1">
      {children}
    </ul>
  );
}
