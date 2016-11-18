import refQcmChallengeFull from '../challenges/ref-qcm-challenge-full';
import refQcuChallengeFull from '../challenges/ref-qcu-challenge-full';
import refQrocChallengeFull from '../challenges/ref-qroc-challenge-full';
import refQrocmChallengeFull from '../challenges/ref-qrocm-challenge-full';

export default {
  data: {
    type: "courses",
    id: "first_course_id",
    attributes: {
      name: "First Course",
      description: "Contient toutes les sortes d\'epreuves",
      duration: 10,
      "image-url": 'http://fakeimg.pl/350x200/?text=First%20Course'
    },
    relationships: {
      challenges: {
        data: [{
          type: "challenges",
          id: refQcmChallengeFull.data.id
        }, {
          type: "challenges",
          id: refQcuChallengeFull.data.id
        }, {
          type: "challenges",
          id: refQrocChallengeFull.data.id
        }, {
          type: "challenges",
          id: refQrocmChallengeFull.data.id
        }]
      }
    }
  }
};
