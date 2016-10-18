import qcuChallenge from '../challenges/qcu-challenge';
import qcmChallenge from '../challenges/qcm-challenge';
import qrocmChallenge from '../challenges/qrocm-challenge';

export default {
  data: {
    type: "course",
    id: "simple_course_id",
    attributes: {
      name: "Name of the course",
      description: "A short description of the course",
      duration: 10,
      "image-url": 'https://dl.airtable.com/L8AQwmIURNu79XmKFoPO_storage-1209059_960_720.jpg'
    },
    relationships: {
      challenges: {
        data: [{
          type: "challenge",
          id: qcmChallenge.data.id
        }, {
          type: "challenge",
          id: qcuChallenge.data.id
        }, {
          type: "challenge",
          id: qrocmChallenge.data.id
        }]
      }
    }
  }
};
