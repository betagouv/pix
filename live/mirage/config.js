let simpleCourse = {
  data: {
    type: "course",
    id: "course_nominal_case_id",
    attributes: {
      name: "Name of the course",
      description: "A short description of the course",
      duration: 10,
      "image-url": 'https://dl.airtable.com/L8AQwmIURNu79XmKFoPO_storage-1209059_960_720.jpg'
    },
    relationships: {
      challenges: {
        data: [
          { type: "challenge", id: "challenge_qcm_id" },
          { type: "challenge", id: "challenge_qcu_id" },
          { type: "challenge", id: "challenge_qrocm_id" }
        ]
      }
    }
  }
};

let anotherCourse = {
  data: {
    type: "course",
    id: "another_course_id",
    attributes: {
      name: "Les données, je gère ! #01",
      description: "Stocker et organiser des données pour les retrouver, les conserver et en faciliter l'accès et la gestion",
      duration: 10,
      "image-url": 'https://dl.airtable.com/L8AQwmIURNu79XmKFoPO_storage-1209059_960_720.jpg'
    },
    relationships: {
      challenges: {
        data: [
          { type: "challenge", id: "recopA530N2rlxYLt" },
          { type: "challenge", id: "recb35pFRQyyXzZUM" },
          { type: "challenge", id: "recttWm9LAfDeqcxk" },
          { type: "challenge", id: "rec9M8rp0Y8uDWzKQ" },
          { type: "challenge", id: "recCIGio3ASSocMXx" }
        ]
      }
    }
  }
};

let courseWithNoImage = {
  data: {
    type: "course",
    id: "course_with_no_image",
    attributes: {
      name: "Test sans image",
      description: "Description d'un test sans image",
      duration: 20
    },
    relationships: {
      challenges: {
        data: [
          { type: "challenge", id: "recOJjFzL0I6QDvJl" },
          { type: "challenge", id: "recmt1vM0Dl3X0CIQ" },
          { type: "challenge", id: "rectkDBolVTyEkoHX" },
          { type: "challenge", id: "recvaILCv8mtzqB2m" },
          { type: "challenge", id: "recLrixSqRxL5vJ54" },
          { type: "challenge", id: "recqxUz6DYwLPVCWh" },
          { type: "challenge", id: "reco9l7yVkQTscB3A" },
          { type: "challenge", id: "recADRNFqsgjIG9Zj" },
          { type: "challenge", id: "rec3mXgYY9E32ShNf" },
          { type: "challenge", id: "recs1xp2Ik6Akrwsp" },
          { type: "challenge", id: "rec8FzKzBkjDYiE8c" }
        ]
      }
    }
  }
};

let challengeQcu = {
  data: {
    type: 'challenge',
    id: 'challenge_qcu_id',
    attributes: {
      type: 'QCU',
      instruction: "Julie a déposé un document dans un espace de stockage partagé avec Pierre. Elle lui envoie un mail pour l’en informer. Quel est le meilleur message ?",
      proposals: "- J’ai déposé le document ici : P: > Equipe > Communication > Textes > intro.odt\n - Ci-joint le document que j’ai déposé dans l’espace partagé\n - J’ai déposé le document intro.odt dans l’espace partagé\n - J’ai déposé un nouveau document dans l’espace partagé, si tu ne le trouves pas je te l’enverrai par mail"
    }
  }
};

let challengeQcm = {
  data: {
    type: 'challenge',
    id: 'challenge_qcm_id',
    attributes: {
      type: 'QCM',
      instruction: "Que peut-on dire des œufs de catégorie A ?",
      proposals: "- Ils sont bio.\n - Ils pèsent plus de 63 grammes.\n - Ce sont des oeufs frais.\n - Ils sont destinés aux consommateurs.\n - Ils ne sont pas lavés."
    }
  }
};

let challengeQrocm = {
  data: {
    type: 'challenge',
    id: 'challenge_qrocm_id',
    attributes: {
      type: 'QROCM',
      instruction: "Citez un ou plusieurs logiciel(s) permettant de réaliser un montage vidéo.",
      proposals: "Réponses : ${logiciel} ${logiciel} ${logiciel}"
    }
  }
};

export default function () {

  this.namespace = 'http://localhost:3000/api';

  this.get('/courses', function () {
    return {
      data: [
        simpleCourse.data,
        anotherCourse.data,
        courseWithNoImage.data
      ]
    }
  });

  this.get('/courses/:id', function (schema, request) {

    const courseId = request.params.id;
    if (courseId === 'course_with_no_image') {
      return courseWithNoImage;
    }
    return simpleCourse;
  });

  this.get('/challenges', function () {
    return {
      data: [
        challengeQcu.data,
        challengeQcm.data,
        challengeQrocm.data
      ]
    }
  });

  this.get('/challenges/:id', function (schema, request) {
    switch(request.params.id) {
      case 'challenge_qrocm_id':
        return challengeQrocm;
      case 'challenge_qcm_id':
        return challengeQcm;
      case 'challenge_qcu_id':
      default:
        return challengeQcu;
    }
  });

  this.post('/assessments', function (schema, request) {
    return {
      id: "new_assessment",
      userId: "an_user_id",
      courseId: "course_nominal_case_id",
      userName: "a_username",
      userEmail: "a_user@email.com"
    }
  });

  this.get('/assessments/:id', function (schema, request) {

    return {
      id: "an_assessment_id",
      userId: "an_user_id",
      courseId: "course_nominal_case_id",
      userName: "a_username",
      userEmail: "a_user@email.com"
    }
  });

}
