import simpleCourse from './data-course-simple';
import anotherCourse from './data-course-another';
import courseWithNoImage from './data-course-no-image';
import getCourses from './GET-courses';

let challengeQcu = {
  data: {
    type: 'challenge',
    id: 'challenge_qcu_id',
    attributes: {
      type: 'QCU',
      instruction: "Julie a déposé un document dans un espace de stockage partagé avec Pierre. Elle lui envoie un mail pour l’en informer. Quel est le meilleur message ?",
      proposals: "" +
      "- J’ai déposé le document ici : P: > Equipe > Communication > Textes > intro.odt\n " +
      "- Ci-joint le document que j’ai déposé dans l’espace partagé\n " +
      "- J’ai déposé le document intro.odt dans l’espace partagé\n" +
      "- J’ai déposé un nouveau document dans l’espace partagé, si tu ne le trouves pas je te l’enverrai par mail"
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

let newAssessment = {
  data: {
    type: 'assessment',
    id: 'new_assessment_id',
    attributes: {
      userId: 1,
      "user-name": 'Jon Snow',
      "user-email": 'jsnow@winterfell.got'
    },
    relationships: {
      course: {
        data: {
          type: 'course',
          id: 'simple_course_id'
        }
      }
    }
  }
};

let simpleAssessment = {
  data: {
    type: 'assessment',
    id: 'simple_assessment_id',
    attributes: {
      userId: 1,
      "user-name": 'Jon Snow',
      "user-email": 'jsnow@winterfell.got'
    },
    relationships: {
      course: {
        data: {
          type: 'course',
          id: 'simple_course_id'
        }
      }
    }
  }
};

export default function () {

  this.namespace = 'http://localhost:3000/api';

  this.get('/courses', getCourses);

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
    switch (request.params.id) {
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
    return newAssessment;
  });

  this.get('/assessments/:id', function (schema, request) {
    return simpleAssessment;
  });
}
