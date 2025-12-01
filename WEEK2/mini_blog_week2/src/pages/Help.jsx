import React from "react";

export default function Help() {
  const faqs = [
    {
      id: 1,
      question: "Comment créer un nouvel article ?",
      answer:
        "Cliquez sur le bouton 'Nouvel article' dans la barre de navigation, remplissez le formulaire avec le titre et le contenu, puis cliquez sur 'Publier'.",
    },
    {
      id: 2,
      question: "Comment modifier un article ?",
      answer:
        "Allez à l'article que vous souhaitez modifier, cliquez sur l'icône d'édition, apportez vos changements, et cliquez sur 'Enregistrer'.",
    },
    {
      id: 3,
      question: "Puis-je supprimer un article ?",
      answer:
        "Oui, cliquez sur l'icône de corbeille sur l'article. Vous devrez confirmer la suppression avant qu'elle soit définitive.",
    },
    {
      id: 4,
      question: "Comment chercher un article ?",
      answer:
        "Utilisez la barre de recherche en haut de la page et entrez le titre ou des mots-clés de l'article.",
    },
    {
      id: 5,
      question: "Puis-je ajouter des commentaires ?",
      answer:
        "Oui, accédez à un article et utilisez la section commentaires en bas de la page pour partager vos pensées.",
    },
    {
      id: 6,
      question: "Comment contacter le support ?",
      answer:
        "Envoyez-nous un email à support@miniblog.com ou utilisez le formulaire de contact dans la section 'À propos'.",
    },
  ];

  const [openId, setOpenId] = React.useState(null);
  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen p-4 md:p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Foire Aux Questions (FAQ)
        </h1>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-lg overflow-hidden shadow-sm bg-white dark:bg-gray-800">
              <button
                className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                onClick={() => toggleFaq(faq.id)}>
                <span className="font-medium">{faq.question}</span>
                <span className="text-gray-500 dark:text-gray-300">
                  {openId === faq.id ? "▼" : "▶"}
                </span>
              </button>
              {openId === faq.id && (
                <div className="p-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
                  <p className="text-gray-700 dark:text-gray-200">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
