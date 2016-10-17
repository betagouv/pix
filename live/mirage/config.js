let courseNominalCase = {
  id: "course_nominal_case",
  name: "Name of the course",
  description: "A short description of the course",
  duration: 10,
  imageUrl: "https://dl.airtable.com/L8AQwmIURNu79XmKFoPO_storage-1209059_960_720.jpg",
  challenges: [
    "challenge_qcm",
    "challenge_qcu",
    "challenge_qrocm"
  ]
};

let courseWithNoImage = {
  challenges: [
    "recOJjFzL0I6QDvJl",
    "recmt1vM0Dl3X0CIQ",
    "rectkDBolVTyEkoHX",
    "recvaILCv8mtzqB2m",
    "recLrixSqRxL5vJ54",
    "recqxUz6DYwLPVCWh",
    "reco9l7yVkQTscB3A",
    "recADRNFqsgjIG9Zj",
    "rec3mXgYY9E32ShNf",
    "recs1xp2Ik6Akrwsp",
    "rec8FzKzBkjDYiE8c"
  ],
  duration: 20,
  description: "Description d'un test sans image",
  name: "Test sans image",
  id: "course_with_no_image"
};

export default function () {

  this.namespace = 'http://localhost:3000/api';

  this.get('/courses', function (schema) {
    return [
      courseNominalCase,
      courseWithNoImage, {
        imageUrl: "https://dl.airtable.com/L8AQwmIURNu79XmKFoPO_storage-1209059_960_720.jpg",
        challenges: [
          "recopA530N2rlxYLt",
          "recb35pFRQyyXzZUM",
          "recttWm9LAfDeqcxk",
          "rec9M8rp0Y8uDWzKQ",
          "recCIGio3ASSocMXx",
          "rec5WobQ3QkC07jt4",
          "recyNr3bZvwZNY3Is"
        ],
        duration: 10,
        description: "Stocker et organiser des données pour les retrouver, les conserver et en faciliter l'accès et la gestion",
        name: "Les données, je gère ! #01",
        id: "recqBFUffy0sCq6ah"
      }, {
        imageUrl: "https://dl.airtable.com/JVqXboM4THi4s4LphLZa_challenger-space-shuttle-1102029_960_720.jpg",
        challenges: [
          "recin0ZPtJyNNrBoy",
          "recyRNeHrvhUBgunU",
          "recr6dEmRR24Y4DqO",
          "recceHsyX1AnV3kdW",
          "recCI6TqfMF8isLhp",
          "recNrZgtDdxDJUyGc"
        ],
        description: "Un test regroupant des idées d'épreuves nouvelles",
        name: "France Strategy Experimental Challenge",
        id: "recURdA2VWp4TD30H"
      }, {
        imageUrl: "https://dl.airtable.com/UvNdR6gpQY2C2su9zSaR_online-942410_640.jpg",
        challenges: [
          "rec7Mxf1sJtM6arxn",
          "rec18uKPBdNiCoj5o",
          "rec2cTjc7hEVgLov8",
          "recnG44mATYoymcZQ",
          "recc4uJS8p5RZJFzT",
          "rec9OW8LijTWUpQOL",
          "recuOF3usxmx6paw8",
          "rectcCOXbKJT3ottj",
          "rec0I61XwUNnPBs0e",
          "recT8Oo8DO2SZzfvt",
          "recSCxxKQyeJ2Xclz"
        ],
        description: "Produire et éditer des documents image, son et vidéo",
        name: "Développer des documents multimédia #01",
        id: "recSPxMZX653ZhUqS"
      }];
  });

  this.get('/courses/:id', function (schema, request) {

    const courseId = request.params.id;
    if (courseId === 'course_with_no_image') {
      return courseWithNoImage;
    }
    return courseNominalCase;
  });

  this.get('/challenges', function (schema, request) {
    return [{
      type: "QCM",
      proposals: "- Ils sont bio. - Ils pèsent plus de 63 grammes. - Ce sont des oeufs frais. - Ils sont destinés aux consommateurs. - Ils ne sont pas lavés. ",
      instruction: "Que peut-on dire des œufs de catégorie A ? ",
      id: "challenge_qcm"
    }, {
      type: "QCU",
      proposals: "- J’ai déposé le document ici : P: > Equipe > Communication > Textes > intro.odt - Ci-joint le document que j’ai déposé dans l’espace partagé - J’ai déposé le document intro.odt dans l’espace partagé - J’ai déposé un nouveau document dans l’espace partagé, si tu ne le trouves pas je te l’enverrai par mail",
      instruction: "Julie a déposé un document dans un espace de stockage partagé avec Pierre. Elle lui envoie un mail pour l’en informer. Quel est le meilleur message ?",
      id: "challenge_qcu"
    }, {
      type: "QROCM",
      proposals: "Réponses : ${logiciel} ${logiciel} ${logiciel} ",
      instruction: "Citez un ou plusieurs logiciel(s) permettant de réaliser un montage vidéo.",
      id: "challenge_qrocm"
    }]
  });

  this.get('/challenges/:id', function (schema, request) {
    return {
      type: "QCM",
      proposals: "- Ils sont bio. - Ils pèsent plus de 63 grammes. - Ce sont des oeufs frais. - Ils sont destinés aux consommateurs. - Ils ne sont pas lavés. ",
      instruction: "Que peut-on dire des œufs de catégorie A ? ",
      id: "challenge_qcm"
    }
  });

}
