import Ember from 'ember';

const domains = [{
  id: 'information-et-donnees',
  title: 'Informations et données',
  topics: [{
    title: 'Mener une recherche et une veille d’information',
    description: 'Mener une recherche et une veille d’information pour répondre à un besoin d’information et se tenir au courant de l’actualité d’u sujet (avec un moteur de recherche, au sein d’un réseau social, par abonnement à des flux ou des lettres d’information, ou tout autre moyen.)',
    themes: 'Web et navigation ; Moteur de recherche et requête ; Veille d’information, flux encuration ; Evaluation de l’information ; Source et citation ; Gouvernance d’internet et ouverture du web ; Abondance de l’information, filtrage et personnalisation ; Recul critique face à l’information et aux médias ; Droit d’auteur.'
  }, {
    title: 'Gérer des données',
    description: 'Stocker et organiser des données pour les retrouver, les conserver et en faciliter l’accès et la gestion (avec un gestionnaire de fichiers, un espace de stockage en ligne, des tags, des classeurs, des bases de données, un système d’information, etc.).',
    themes: 'Dossier et fichier ; Stockage et compression ; Transfert et synchronisation ; Recherche et méta-données ; Indexation sémantique et libellé (tag) ; Structuration des données ; Système d’information ; Localisation des données et droit applicable ; Modèles et stratégies économiques ; Sécurité du système d’information.'
  }, {
    title: 'Traiter des données',
    description: 'Appliquer des traitements à des données pour les analyser et les interpréter (avec un tableur, un programme, un logiciel de traitement d’enquête, une requête calcul dans une base de données, etc.).',
    themes: 'Dossier et fichier ; Stockage et compression ; Transfert et synchronisation ; Recherche et méta-données ; Indexation sémantique et libellé (tag) ; Structuration des données ; Système d’information ; Localisation des données et droit applicable ; Modèles et stratégies économiques ; Sécurité du système d’information.'
  }]
}, {
  id: 'communication-et-collaboration',
  title: 'Communication et collaboration',
  topics: [{
    title: 'Interagir',
    description: 'Interagir avec des individus et de petits groupespour échanger dans divers contextes liés à la vie privée ou à une activité professionnelle, de façon ponctuelle et récurrente (avec une messagerie électronique, une messagerie instantanée, un système de visio-conférence, etc.).',
    themes: 'Protocoles pour l\'interaction ; Modalités d\'interaction et rôles ; Applications et services pour l\'interaction ; Vie privée et confidentialité ; Identité numérique et signaux ; Vie connectée ; Codes de communication et netiquette'
  }, {
    title: 'Partager et publier',
    description: 'Partager et publier des informations et des contenus pour communiquer ses propres productions ou opinions, relayer celles des autres en contexte de communication publique(avec des plateformes de partage, des réseaux sociaux, des blogs, des espaces de forum et de commentaire, des CMS, etc.).',
    themes: 'Protocoles et modalités de partage ; Applications et services pour le partage ; Règles de publication et visibilité ; Réseaux sociaux ; Liberté d\'expression et droit à l\'information ; Formation en ligne ; Vie privée et confidentialité ; Identité numérique et signaux ; Pratiques sociales et participation citoyenne ; e- Réputation et influence ; Ecriture pour le web ; Codes de communication et netiquette ; Droit d\'auteur'
  }, {
    title: 'Collaborer',
    description: 'Collaborer dans un groupe pour réaliser un projet, co-produire des ressources, des connaissances, des données, et pour apprendre (avec des plateformes de travail collaboratif et de partage de document, des éditeurs en ligne, des fonctionnalités de suivi de modifications ou de gestion de versions, etc.).',
    themes: 'Modalités de collaboration et rôles ; Applications et services de partage de document et d\'édition en ligne ; Versions et révisions ; Droits d\'accès et conflit d\'accès ; Gestion de projet ; Droit d\'auteur ; Vie connectée ; Vie privée et confidentialité'
  }, {
    title: 'S\'insérer dans le monde numérique',
    description: 'Maîtriser les stratégies et enjeux de la présence en ligne, et choisir ses pratiques pour se positionner en tant qu\'acteur social, économique et citoyen dans le monde numérique, en lien avec ses règles, limites et potentialités, et en accord avec des valeurs et/ou pour répondre à des objectifs (avec les réseaux sociaux et les outils permettant de développer une présence publique sur le web, et en lien avec la vie citoyenne, la vie professionnelle, la vie privée, etc.).',
    themes: 'Identité numérique et signaux ; e-Réputation et influence ; Codes de communication et netiquette ; Pratiques sociales et participation citoyenne ; Modèles et stratégies économiques ; Questions éthiques et valeurs ; Gouvernance d\'internet et ouverture du web ; Liberté d\'expression et droit à l\'information'
  }]
}, {
  id: 'creation-de-contenu',
  title: 'Création de contenu',
  topics: [{
    title: 'Développer des documents textuels',
    description: '',
    themes: ''
  }, {
    title: 'Développer des documents multimédia',
    description: '',
    themes: ''
  }, {
    title: 'Adapter les documents à leur finalité',
    description: '',
    themes: ''
  }, {
    title: 'Programmer',
    description: '',
    themes: ''
  }]
}, {
  id: 'protection-et-securite',
  title: 'Protection et sécurité',
  topics: [{
    title: 'Sécuriser l\'environnement numérique',
    description: '',
    themes: ''
  }, {
    title: 'Protéger les données personnelles et la vie privée',
    description: '',
    themes: ''
  }, {
    title: 'Protéger la santé, le bien-être et l\'environnement',
    description: '',
    themes: ''
  }]
}, {
  id: 'environnement-numerique',
  title: 'Environnement numérique',
  topics: [{
    title: 'Résoudre des problèmes techniques',
    description: '',
    themes: ''
  }, {
    title: 'Construire un environnement numérique',
    description: '',
    themes: ''
  }]
}];

export default Ember.Route.extend({

  panelActions: Ember.inject.service(),

  model() {
    return domains;
  }

});
