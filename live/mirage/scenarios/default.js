export default function(server) {
  server.create('user', {
    firstName: 'François',
    lastName: 'Hisquin',
    email: 'fhi@octo.com',
    password: 'FHI4EVER',
    cgu: true,
    recaptchaToken: 'recaptcha-token-xxxxxx'
  });

  server.loadFixtures('areas');
  server.loadFixtures('competences');

}
