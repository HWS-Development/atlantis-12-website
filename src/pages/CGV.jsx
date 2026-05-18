import Seo from "../components/Common/Seo";

export default function CGV() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-20 px-[8vw] md:px-[10vw]">
      <Seo
        title="Conditions Générales de Vente | Atlantis 12 Essaouira"
        description="Conditions Générales de Vente d'Atlantis 12 - maison d'hôtes & d'art près d'Essaouira, Maroc. Réservation, paiement, annulation, obligations."
      />
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
          Conditions Générales de Vente
        </h1>
        <p className="font-body text-xs text-foreground/50 mb-10">Dernière mise à jour : 17/05/2025</p>

        {/* 1. Objet */}
        <Section n="1" title="Objet">
          <P>
            Les présentes Conditions Générales de Vente définissent les droits et obligations des
            parties dans le cadre de la réservation à distance de services proposés par Atlantis 12.
          </P>
          <P>
            Toute réservation effectuée via notre plateforme implique l'acceptation pleine et entière
            des présentes Conditions Générales de Vente.
          </P>
        </Section>

        {/* 2. Services proposés */}
        <Section n="2" title="Services proposés">
          <P>
            Les services incluent l'hébergement ainsi que les prestations complémentaires proposées
            sur le site, notamment :
          </P>
          <Ul>
            <li>petit-déjeuner,</li>
            <li>table d'hôtes,</li>
            <li>balades en dromadaire,</li>
            <li>ateliers de peinture intuitive,</li>
            <li>massages sous les arganiers,</li>
            <li>autres activités proposées par l'établissement.</li>
          </Ul>
          <P>
            Les photographies et descriptions sont fournies à titre indicatif et ne présentent pas de
            caractère contractuel.
          </P>
        </Section>

        {/* 3. Prix et taxes */}
        <Section n="3" title="Prix et taxes">
          <P>
            Le prix total de la réservation est affiché avant validation de la commande, en Dirhams
            Marocains en HT et en TTC.
          </P>
          <P>Certaines périodes peuvent être soumises :</P>
          <Ul>
            <li>à une durée minimale de séjour,</li>
            <li>à des conditions particulières d'annulation.</li>
          </Ul>
          <P>Les taxes locales et taxes de séjour sont à régler directement sur place.</P>
          <P>
            Toute modification légale des taxes applicables sera automatiquement répercutée sur les
            tarifs.
          </P>
          <P>Les éventuels frais de change ou frais bancaires restent à la charge du client.</P>
        </Section>

        {/* 4. Processus de réservation et paiement */}
        <Section n="4" title="Processus de réservation et paiement">
          <P className="font-semibold">1) Sélection des services</P>
          <P>Le client sélectionne les prestations souhaitées ainsi que les dates de séjour.</P>
          <P className="font-semibold">2) Récapitulatif</P>
          <P>Un récapitulatif détaillé de la réservation est présenté avant paiement.</P>
          <P className="font-semibold">3) Paiement</P>
          <P>
            En cliquant sur « Continuez », le client remplit ses informations personnelles, confirme sa
            commande et procède au paiement.
          </P>
          <P>
            La validation de la réservation suppose l'acceptation préalable des présentes Conditions
            Générales de Vente.
          </P>
          <P className="font-semibold">4) Confirmation de réservation</P>
          <P>
            L'établissement enverra une confirmation de réservation par e-mail dans un délai maximal
            de 24 heures.
          </P>
          <P>
            La réservation est réputée ferme et définitive à l'issue de l'ensemble des étapes du
            processus de réservation et après confirmation par l'établissement.
          </P>
          <P className="font-semibold mt-4">Frais supplémentaires</P>
          <P>
            Tous les services consommés sur place et non réglés en ligne devront être payés
            intégralement lors du départ.
          </P>
        </Section>

        {/* 5. Obligations et règlement intérieur */}
        <Section n="5" title="Obligations et règlement intérieur">
          <P>
            Conformément à la réglementation marocaine applicable aux établissements
            d'hébergement touristique, les couples de nationalité marocaine souhaitant séjourner dans
            la même chambre pourront être invités à présenter un acte de mariage ou tout document
            officiel justifiant de leur situation matrimoniale lors de l'enregistrement.
          </P>
          <P>
            Conformément à la réglementation en vigueur, les clients devront présenter une pièce
            d'identité et compléter une fiche de police à leur arrivée.
          </P>
          <P className="font-semibold">Conditions de séjour</P>
          <Ul>
            <li>Check-in : à partir de 15h00</li>
            <li>Check-out : jusqu'à 12h00</li>
          </Ul>
          <P className="font-semibold">Politique de l'établissement</P>
          <Ul>
            <li>L'établissement est réservé exclusivement à une clientèle adulte (« Adult Only »).</li>
            <li>Les animaux de compagnie ne sont pas autorisés.</li>
            <li>Toutes les chambres sont strictement non-fumeurs.</li>
          </Ul>
          <P>Le client s'engage à respecter le règlement intérieur de l'établissement.</P>
          <P>
            En cas de comportement contraire aux bonnes mœurs, à l'ordre public ou au règlement
            intérieur, l'établissement pourra exiger le départ immédiat du client, sans indemnité ni
            remboursement.
          </P>
        </Section>

        {/* 6. Responsabilité */}
        <Section n="6" title="Responsabilité">
          <P>
            Les photographies, descriptions et informations figurant sur le site internet sont fournies à
            titre indicatif et n'ont pas de valeur contractuelle.
          </P>
          <P>
            Atlantis 12 ne pourra être tenu responsable de l'inexécution ou de la mauvaise exécution
            de la réservation en cas de force majeure, du fait d'un tiers, du fait du client ou de tout
            événement échappant raisonnablement à son contrôle.
          </P>
          <P>La responsabilité de l'établissement ne saurait notamment être engagée en cas :</P>
          <Ul>
            <li>d'indisponibilité du réseau internet,</li>
            <li>d'intrusion extérieure ou de cyberattaque,</li>
            <li>de virus informatique,</li>
            <li>de prépaiement refusé ou non autorisé par l'établissement bancaire du client,</li>
            <li>de panne ou dysfonctionnement des réseaux, équipements, systèmes informatiques, services d'électricité ou d'approvisionnement en eau.</li>
          </Ul>
          <P>
            Toute réservation ou paiement irrégulier, incomplet, frauduleux ou imputable au client
            pourra entraîner l'annulation de la réservation sans indemnisation.
          </P>
          <P>
            L'établissement s'efforcera d'informer les clients, dans la mesure du possible, de tout
            travaux, intervention technique ou événement susceptible d'occasionner une gêne
            temporaire durant le séjour.
          </P>
        </Section>

        {/* 7. Politique d'annulation */}
        <Section n="7" title="Politique d'annulation">
          <P>
            Lorsque les conditions tarifaires le permettent, l'annulation peut être effectuée directement
            auprès de l'établissement.
          </P>
          <P>Les frais d'annulation suivants s'appliquent :</P>
          <Ul>
            <li>Plus de 31 jours avant l'arrivée : 30 % du montant total du séjour</li>
            <li>Entre 30 et 8 jours avant l'arrivée : 50 % du montant total du séjour</li>
            <li>Entre 7 jours et la date d'arrivée : 100 % du montant total du séjour</li>
            <li>No-show : 100 % du montant total du séjour</li>
          </Ul>
        </Section>

        {/* 8. Force majeure */}
        <Section n="8" title="Force majeure">
          <P>
            Nous ne pourrons être tenus responsables en cas d'empêchement ou de retard causé par
            un événement de force majeure ou toute circonstance échappant raisonnablement à notre
            contrôle, notamment :
          </P>
          <Ul>
            <li>catastrophe naturelle,</li>
            <li>pandémie,</li>
            <li>incendie,</li>
            <li>acte terroriste,</li>
            <li>inondation,</li>
            <li>panne technique majeure,</li>
            <li>interruption des réseaux ou services essentiels.</li>
          </Ul>
        </Section>

        {/* 9. Propriété intellectuelle */}
        <Section n="9" title="Propriété intellectuelle">
          <P>
            L'ensemble des contenus présents sur le site (textes, images, logos, illustrations,
            marques) est protégé par les lois relatives à la propriété intellectuelle.
          </P>
          <P>Toute reproduction ou utilisation sans autorisation préalable est interdite.</P>
        </Section>

        {/* 10. Modification des CGV */}
        <Section n="10" title="Modification des CGV">
          <P>
            Atlantis 12 se réserve le droit de modifier les présentes Conditions Générales de Vente à
            tout moment.
          </P>
          <P>Les nouvelles conditions entreront en vigueur dès leur publication sur le site internet.</P>
        </Section>

        {/* 11. Droit applicable et litiges */}
        <Section n="11" title="Droit applicable et litiges">
          <P>Les présentes Conditions Générales de Vente sont régies par le droit marocain.</P>
          <P>
            Les parties s'efforceront de résoudre amiablement tout différend avant toute action
            judiciaire.
          </P>
          <P>Tout litige sera soumis aux juridictions compétentes du Maroc.</P>
        </Section>

        {/* 12. Convention de preuve */}
        <Section n="12" title="Convention de preuve">
          <P>
            L'acceptation électronique des présentes Conditions Générales de Vente ainsi que la
            validation de la réservation ont valeur de signature électronique et constituent une preuve
            des échanges et transactions intervenus entre les parties.
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
