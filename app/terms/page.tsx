export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-black mb-8 uppercase tracking-tight">Conditions d&apos;<span className="text-primary">Utilisation</span></h1>
      
      <div className="prose prose-invert max-w-none space-y-6 text-white/70">
        <p>
          Bienvenue sur Platform Spotlight. En accédant à ce site Web, nous supposons que vous acceptez ces conditions d&apos;utilisation. Ne continuez pas à utiliser Platform Spotlight si vous n&apos;acceptez pas toutes les conditions énoncées sur cette page.
        </p>

        <h2 className="text-2xl font-bold text-white uppercase mt-12">Licence</h2>
        <p>
          Sauf indication contraire, Platform Spotlight et/ou ses concédants de licence détiennent les droits de propriété intellectuelle pour tout le contenu de Platform Spotlight. Tous les droits de propriété intellectuelle sont réservés. Vous pouvez y accéder à partir de Platform Spotlight pour votre usage personnel, sous réserve des restrictions définies dans les présentes conditions d&apos;utilisation.
        </p>

        <h2 className="text-2xl font-bold text-white uppercase mt-12">Restrictions</h2>
        <p>Vous ne devez pas :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Republier le contenu de Platform Spotlight</li>
          <li>Vendre, louer ou sous-licencier le contenu de Platform Spotlight</li>
          <li>Reproduire, dupliquer ou copier le contenu de Platform Spotlight</li>
          <li>Redistribuer le contenu de Platform Spotlight</li>
        </ul>

        <h2 className="text-2xl font-bold text-white uppercase mt-12">Avis de non-responsabilité</h2>
        <p>
          Dans la mesure maximale autorisée par la loi applicable, nous excluons toutes les représentations, garanties et conditions relatives à notre site Web et à l&apos;utilisation de ce site Web. Rien dans cet avis de non-responsabilité ne :
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>limitera ou exclura notre ou votre responsabilité en cas de décès ou de blessure corporelle ;</li>
          <li>limitera ou exclura notre ou votre responsabilité en cas de fraude ou de fausse déclaration frauduleuse ;</li>
          <li>limitera l&apos;une de nos ou de vos responsabilités d&apos;une manière qui n&apos;est pas autorisée par la loi applicable.</li>
        </ul>
      </div>
    </div>
  );
}
