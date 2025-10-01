export default function Footer() {
  return (
    <div className="legacy-green text-white text-xs">
      <div className="container-std py-3 flex flex-wrap gap-4 opacity-90">
        <a href="/terms" className="underline">Politique de confidentialité</a>
        <a href="terms" className="underline">Conditions Générales de Vente</a>
        <a href="/cancellation" className="underline">Politique d’annulation</a>
        <span className="ml-auto">© {new Date().getFullYear()} Atlantis 12</span>
      </div>
    </div>

  );
}
