export default [
  {
    id: 'highligthed_course_id',
    name: 'Traiter des données',
    description: 'Recherche d\'information, gestion et traitement de données.',
    'image-url': 'http://fakeimg.pl/350x200/?text=First%20Course',
    challenges: ['ref_qcm_challenge_id']
  }, {
    id: 'ref_course_id',
    name: 'First Course',
    description: 'Contient toutes sortes d\'epreuves avec différentes caractéristiques couvrant tous les cas d\'usage.',
    duration: 10,
    'image-url': 'http://fakeimg.pl/350x200/?text=First%20Course',
    challengeId: ['ref_qcm_challenge_id', 'ref_qcu_challenge_id', 'ref_qroc_challenge_id', 'ref_qrocm_challenge_id']
  }, {
    id: 'ref_timed_challenge_course_id',
    name: 'Course with timed challenges',
    description: 'Contient uniquement des épreuves timées',
    duration: 10,
    'image-url': 'http://fakeimg.pl/350x200/?text=First%20Course',
    challenges: ['ref_timed_challenge_id', 'ref_timed_challenge_bis_id']
  }, {
    id: 'pix_name_course_id',
    name: 'Numeroted Course',
    description: 'Contient des challenges qui se suivent et est fait pour vérifier qu\'il est possible de reprendre un challenge',
    duration: 10,
    'image-url': 'http://fakeimg.pl/350x200/?text=First%20Course',
    challengeId: ['first_challenge_id', 'second_challenge_id', 'third_challenge_id', 'fourth_challenge_id', 'fifth_challenge_id']
  }
];
