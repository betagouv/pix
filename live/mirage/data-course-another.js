export default {
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