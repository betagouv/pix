export default function(server) {

  /*
   Seed your development database using your factories.
   This data will not be loaded in your tests.

   Make sure to define a factory for each model you want to create.
   */

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
    competenceIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  });

}
