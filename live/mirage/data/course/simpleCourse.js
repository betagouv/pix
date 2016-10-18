export default {
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
