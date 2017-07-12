export default function(server) {

  server.loadFixtures('areas');
  server.loadFixtures('competences');

  server.create('user', {
    id: 1,
    firstName: 'François',
    lastName: 'Hisquin',
    email: 'fhi@octo.com',
    password: 'FHI4EVER',
    cgu: true,
    recaptchaToken: 'recaptcha-token-xxxxxx',
    totalPixScore: 128,
    competenceIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  });

}
