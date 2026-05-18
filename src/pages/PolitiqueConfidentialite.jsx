import Seo from "../components/Common/Seo";

export default function PolitiqueConfidentialite() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-20 px-[8vw] md:px-[10vw]">
      <Seo
        title="Politique de Confidentialité & Cookies | Atlantis 12 Essaouira"
        description="Politique de confidentialité et de cookies d'Atlantis 12 SARL - protection des données personnelles conformément à la loi marocaine 09-08."
      />
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-10">
          Politique de Confidentialité
        </h1>

        <P>
          Atlantis 12 SARL s'engage à protéger la confidentialité et la sécurité des données
          personnelles de ses clients, conformément à la loi marocaine 09-08 relative à la protection
          des données personnelles.
        </P>

        {/* 1. Données collectées */}
        <Section n="1" title="Données collectées">
          <P>Nous pouvons collecter les informations suivantes :</P>
          <Ul>
            <li>nom et prénom,</li>
            <li>numéro de la pièce d'identité,</li>
            <li>adresse e-mail,</li>
            <li>numéro de téléphone,</li>
            <li>adresse postale,</li>
            <li>informations de réservation,</li>
            <li>préférences de séjour,</li>
            <li>informations de paiement,</li>
            <li>données de navigation,</li>
            <li>adresse IP.</li>
          </Ul>
          <P>Certaines données peuvent être collectées automatiquement via des cookies.</P>
        </Section>

        {/* 2. Finalités du traitement */}
        <Section n="2" title="Finalités du traitement">
          <P>Les données collectées sont utilisées afin de :</P>
          <Ul>
            <li>gérer les réservations,</li>
            <li>assurer le suivi client,</li>
            <li>personnaliser l'expérience utilisateur,</li>
            <li>répondre aux demandes des clients,</li>
            <li>envoyer des informations liées au séjour,</li>
            <li>améliorer nos services,</li>
            <li>respecter nos obligations légales.</li>
          </Ul>
        </Section>

        {/* 3. Base légale du traitement */}
        <Section n="3" title="Base légale du traitement">
          <P>Les traitements de données reposent sur :</P>
          <Ul>
            <li>l'exécution du contrat de réservation,</li>
            <li>le consentement du client,</li>
            <li>les obligations légales applicables,</li>
            <li>l'intérêt légitime de l'établissement.</li>
          </Ul>
        </Section>

        {/* 4. Partage des données */}
        <Section n="4" title="Partage des données">
          <P>Les données peuvent être transmises uniquement à :</P>
          <Ul>
            <li>nos prestataires techniques,</li>
            <li>nos prestataires de paiement,</li>
            <li>les autorités compétentes lorsque la loi l'exige.</li>
          </Ul>
          <P>Aucune donnée personnelle n'est vendue à des tiers.</P>
        </Section>

        {/* 5. Conservation des données */}
        <Section n="5" title="Conservation des données">
          <P>
            Les données sont conservées uniquement pendant la durée nécessaire aux finalités pour
            lesquelles elles ont été collectées, sauf obligation légale contraire.
          </P>
        </Section>

        {/* 6. Sécurité des données */}
        <Section n="6" title="Sécurité des données">
          <P>
            Atlantis 12 met en oeuvre des mesures techniques et organisationnelles appropriées afin
            d'assurer la confidentialité et la sécurité des données personnelles.
          </P>
        </Section>

        {/* 7. Vos droits */}
        <Section n="7" title="Vos droits">
          <P>Conformément à la loi 09-08, vous disposez notamment :</P>
          <Ul>
            <li>d'un droit d'accès,</li>
            <li>d'un droit de rectification,</li>
            <li>d'un droit de suppression,</li>
            <li>d'un droit d'opposition,</li>
            <li>d'un droit de limitation du traitement.</li>
          </Ul>
          <P>
            Pour exercer vos droits :{" "}
            <a href="mailto:contact@atlantis12essaouira.com" className="underline hover:text-primary transition-colors">
              contact@atlantis12essaouira.com
            </a>
          </P>
        </Section>

        {/* 8. Modifications */}
        <Section n="8" title="Modifications">
          <P>
            Cette politique peut être modifiée à tout moment afin de respecter les évolutions légales
            ou techniques.
          </P>
        </Section>

        {/* 9. Contact */}
        <Section n="9" title="Contact">
          <P>
            Pour toute question relative à la protection des données personnelles :{" "}
            <a href="mailto:contact@atlantis12essaouira.com" className="underline hover:text-primary transition-colors">
              contact@atlantis12essaouira.com
            </a>
          </P>
        </Section>

        {/* ===== POLITIQUE DE COOKIES ===== */}
        <div className="mt-16 pt-16 border-t border-foreground/10">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
            Politique de Cookies
          </h2>

          {/* 1. Qu'est-ce qu'un cookie ? */}
          <Section n="1" title="Qu'est-ce qu'un cookie ?">
            <P>
              Un cookie est un petit fichier texte enregistré sur votre appareil lors de votre navigation sur
              un site internet.
            </P>
          </Section>

          {/* 2. Utilisation des cookies */}
          <Section n="2" title="Utilisation des cookies">
            <P>Nous utilisons des cookies afin de :</P>
            <Ul>
              <li>assurer le bon fonctionnement du site,</li>
              <li>mémoriser vos préférences,</li>
              <li>analyser la fréquentation du site,</li>
              <li>améliorer l'expérience utilisateur,</li>
              <li>proposer des contenus adaptés.</li>
            </Ul>
          </Section>

          {/* 3. Cookies tiers */}
          <Section n="3" title="Cookies tiers">
            <P>Le site peut utiliser des services tiers tels que :</P>
            <Ul>
              <li>Google Analytics,</li>
              <li>outils publicitaires,</li>
              <li>services intégrés de réservation.</li>
            </Ul>
            <P>Ces services peuvent déposer leurs propres cookies.</P>
          </Section>

          {/* 4. Gestion des cookies */}
          <Section n="4" title="Gestion des cookies">
            <P>Vous pouvez configurer votre navigateur pour :</P>
            <Ul>
              <li>accepter les cookies,</li>
              <li>refuser les cookies,</li>
              <li>supprimer les cookies existants.</li>
            </Ul>
            <P>Le refus de certains cookies peut affecter le fonctionnement du site.</P>
          </Section>

          {/* 5. Contact */}
          <Section n="5" title="Contact">
            <P>
              Pour toute question relative aux cookies :{" "}
              <a href="mailto:contact@atlantis12essaouira.com" className="underline hover:text-primary transition-colors">
                contact@atlantis12essaouira.com
              </a>
            </P>
          </Section>
        </div>
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
