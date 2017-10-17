const { describe, it, expect } = require('../../../test-helper');
const snapshotsConverter = require('../../../../lib/infrastructure/converter/snapshots-csv-converter');

describe('Unit | Serializer | CSV | snapshots-converter', () => {

  const jsonSnapshots = [{
    id: 2,
    organizationId: 2,
    userId: 1,
    score: '22',
    profile: '{"data":{"type":"users","id":1,"attributes":{"first-name":"PrenomUser","last-name":"NomUser","email":"mPrenomUserdard@octo.com","total-pix-score":22},"relationships":{"competences":{"data":[{"type":"competences","id":"rec6rHqas39zvLZep"},{"type":"competences","id":"recDH19F7kKrfL3Ii"},{"type":"competences","id":"recFpYXCKcyhLI3Nu"},{"type":"competences","id":"recHmIWG6D0huq6Kx"},{"type":"competences","id":"recIhdrmCuEmCDAzj"},{"type":"competences","id":"recIkYm646lrGvLNT"},{"type":"competences","id":"recMiZPNl7V1hyE1d"},{"type":"competences","id":"recNv8qhaY887jQb2"},{"type":"competences","id":"recOdC9UDVJbAXHAm"},{"type":"competences","id":"recbDTF8KwupqkeZ6"},{"type":"competences","id":"rece6jYwH4WEw549z"},{"type":"competences","id":"recfr0ax8XrfvJ3ER"},{"type":"competences","id":"recgxqQfz3BqEbtzh"},{"type":"competences","id":"recofJCxg0NqTqTdP"},{"type":"competences","id":"recsvLz0W2ShyfD63"},{"type":"competences","id":"recudHE5Omrr10qrx"}]}}},"included":[{"id":"recUcSnS2lsOhFIeE","type":"areas","attributes":{"name":"4. Protection et sécurité"}},{"id":"recnrCmBiPXGbgIyQ","type":"areas","attributes":{"name":"5. Environnement numérique"}},{"id":"recoB4JYOBS1PCxhh","type":"areas","attributes":{"name":"2. Communication et collaboration"}},{"id":"recs7Gpf90ln8NCv7","type":"areas","attributes":{"name":"3. Création de contenu"}},{"id":"recvoGdo7z2z7pXWa","type":"areas","attributes":{"name":"1. Information et données"}},{"id":"rec6rHqas39zvLZep","type":"competences","attributes":{"name":"Sécuriser l\'environnement numérique","index":"4.1","level":-1,"course-id":"recO1qH39C0IfggLZ"},"relationships":{"area":{"data":{"type":"areas","id":["recUcSnS2lsOhFIeE"]}}}},{"id":"recDH19F7kKrfL3Ii","type":"competences","attributes":{"name":"Interagir","index":"2.1","level":-1,"course-id":""},"relationships":{"area":{"data":{"type":"areas","id":["recoB4JYOBS1PCxhh"]}}}},{"id":"recFpYXCKcyhLI3Nu","type":"competences","attributes":{"name":"S\'insérer dans le monde numérique","index":"2.4","level":-1,"course-id":""},"relationships":{"area":{"data":{"type":"areas","id":["recoB4JYOBS1PCxhh"]}}}},{"id":"recHmIWG6D0huq6Kx","type":"competences","attributes":{"name":"Adapter les documents à leur finalité","index":"3.3","level":-1,"course-id":"recRKkLdx99wfl3qs"},"relationships":{"area":{"data":{"type":"areas","id":["recs7Gpf90ln8NCv7"]}}}},{"id":"recIhdrmCuEmCDAzj","type":"competences","attributes":{"name":"Résoudre des problèmes techniques","index":"5.1","level":-1,"course-id":"rec5gEPqhxYjz15eI"},"relationships":{"area":{"data":{"type":"areas","id":["recnrCmBiPXGbgIyQ"]}}}},{"id":"recIkYm646lrGvLNT","type":"competences","attributes":{"name":"Gérer des données","index":"1.2","level":-1,"course-id":"recAY0W7xurA11OLZ"},"relationships":{"area":{"data":{"type":"areas","id":["recvoGdo7z2z7pXWa"]}}}},{"id":"recMiZPNl7V1hyE1d","type":"competences","attributes":{"name":"Collaborer","index":"2.3","level":-1,"course-id":""},"relationships":{"area":{"data":{"type":"areas","id":["recoB4JYOBS1PCxhh"]}}}},{"id":"recNv8qhaY887jQb2","type":"competences","attributes":{"name":"Traiter des données","index":"1.3","level":-1,"course-id":"recR9yCEqgedB0LYQ"},"relationships":{"area":{"data":{"type":"areas","id":["recvoGdo7z2z7pXWa"]}}}},{"id":"recOdC9UDVJbAXHAm","type":"competences","attributes":{"name":"Développer des documents textuels","index":"3.1","level":-1,"course-id":"rec43mpMIR5dUzdjh"},"relationships":{"area":{"data":{"type":"areas","id":["recs7Gpf90ln8NCv7"]}}}},{"id":"recbDTF8KwupqkeZ6","type":"competences","attributes":{"name":"Développer des documents multimedia","index":"3.2","level":-1,"course-id":"recVtTay20uxEqubF"},"relationships":{"area":{"data":{"type":"areas","id":["recs7Gpf90ln8NCv7"]}}}},{"id":"rece6jYwH4WEw549z","type":"competences","attributes":{"name":"Programmer","index":"3.4","level":-1,"course-id":"recTMfUJzFaNiUt64"},"relationships":{"area":{"data":{"type":"areas","id":["recs7Gpf90ln8NCv7"]}}}},{"id":"recfr0ax8XrfvJ3ER","type":"competences","attributes":{"name":"Protéger la santé, le bien-être et l\'environnement","index":"4.3","level":-1,"course-id":"recRlIVstCemVM8jE"},"relationships":{"area":{"data":{"type":"areas","id":["recUcSnS2lsOhFIeE"]}}}},{"id":"recgxqQfz3BqEbtzh","type":"competences","attributes":{"name":"Partager et publier","index":"2.2","level":-1,"course-id":""},"relationships":{"area":{"data":{"type":"areas","id":["recoB4JYOBS1PCxhh"]}}}},{"id":"recofJCxg0NqTqTdP","type":"competences","attributes":{"name":"Protéger les données personnelles et la vie privée","index":"4.2","level":-1,"course-id":"recrJ90Sbrotzkb7x"},"relationships":{"area":{"data":{"type":"areas","id":["recUcSnS2lsOhFIeE"]}}}},{"id":"recsvLz0W2ShyfD63","type":"competences","attributes":{"name":"Mener une recherche et une veille d’information","index":"1.1","level":2,"course-id":"recNPB7dTNt5krlMA","pix-score":22},"relationships":{"area":{"data":{"type":"areas","id":["recvoGdo7z2z7pXWa"]}}}},{"id":"recudHE5Omrr10qrx","type":"competences","attributes":{"name":"Construire un environnement numérique","index":"5.2","level":3,"course-id":"recfLYUy8fYlcyAsl"},"relationships":{"area":{"data":{"type":"areas","id":["recnrCmBiPXGbgIyQ"]}}}}]}',
    createdAt: '2017-10-13 09:00:59',
    updatedAt: '2017-10-13 09:00:59',
    completionPercentage: '6',
    studentCode: 'UNIV123',
    campaignCode: 'CAMPAIGN123',
    user: {
      id: 1,
      firstName: 'PrenomUser',
      lastName: 'NomUser',
      email: 'test@test.com',
    }
  },
  {
    id: 1,
    organizationId: 2,
    userId: 1,
    score: null,
    profile: '{"data":{"type":"users","id":1,"attributes":{"first-name":"PrenomUser","last-name":"NomUser","email":"mPrenomUserdard@octo.com"},"relationships":{"competences":{"data":[{"type":"competences","id":"rec6rHqas39zvLZep"},{"type":"competences","id":"recDH19F7kKrfL3Ii"},{"type":"competences","id":"recFpYXCKcyhLI3Nu"},{"type":"competences","id":"recHmIWG6D0huq6Kx"},{"type":"competences","id":"recIhdrmCuEmCDAzj"},{"type":"competences","id":"recIkYm646lrGvLNT"},{"type":"competences","id":"recMiZPNl7V1hyE1d"},{"type":"competences","id":"recNv8qhaY887jQb2"},{"type":"competences","id":"recOdC9UDVJbAXHAm"},{"type":"competences","id":"recbDTF8KwupqkeZ6"},{"type":"competences","id":"rece6jYwH4WEw549z"},{"type":"competences","id":"recfr0ax8XrfvJ3ER"},{"type":"competences","id":"recgxqQfz3BqEbtzh"},{"type":"competences","id":"recofJCxg0NqTqTdP"},{"type":"competences","id":"recsvLz0W2ShyfD63"},{"type":"competences","id":"recudHE5Omrr10qrx"}]}}},"included":[{"id":"recUcSnS2lsOhFIeE","type":"areas","attributes":{"name":"4. Protection et sécurité"}},{"id":"recnrCmBiPXGbgIyQ","type":"areas","attributes":{"name":"5. Environnement numérique"}},{"id":"recoB4JYOBS1PCxhh","type":"areas","attributes":{"name":"2. Communication et collaboration"}},{"id":"recs7Gpf90ln8NCv7","type":"areas","attributes":{"name":"3. Création de contenu"}},{"id":"recvoGdo7z2z7pXWa","type":"areas","attributes":{"name":"1. Information et données"}},{"id":"rec6rHqas39zvLZep","type":"competences","attributes":{"name":"Sécuriser l\'environnement numérique","index":"4.1","level":-1,"course-id":"recO1qH39C0IfggLZ"},"relationships":{"area":{"data":{"type":"areas","id":["recUcSnS2lsOhFIeE"]}}}},{"id":"recDH19F7kKrfL3Ii","type":"competences","attributes":{"name":"Interagir","index":"2.1","level":-1,"course-id":""},"relationships":{"area":{"data":{"type":"areas","id":["recoB4JYOBS1PCxhh"]}}}},{"id":"recFpYXCKcyhLI3Nu","type":"competences","attributes":{"name":"S\'insérer dans le monde numérique","index":"2.4","level":-1,"course-id":""},"relationships":{"area":{"data":{"type":"areas","id":["recoB4JYOBS1PCxhh"]}}}},{"id":"recHmIWG6D0huq6Kx","type":"competences","attributes":{"name":"Adapter les documents à leur finalité","index":"3.3","level":-1,"course-id":"recRKkLdx99wfl3qs"},"relationships":{"area":{"data":{"type":"areas","id":["recs7Gpf90ln8NCv7"]}}}},{"id":"recIhdrmCuEmCDAzj","type":"competences","attributes":{"name":"Résoudre des problèmes techniques","index":"5.1","level":-1,"course-id":"rec5gEPqhxYjz15eI"},"relationships":{"area":{"data":{"type":"areas","id":["recnrCmBiPXGbgIyQ"]}}}},{"id":"recIkYm646lrGvLNT","type":"competences","attributes":{"name":"Gérer des données","index":"1.2","level":-1,"course-id":"recAY0W7xurA11OLZ"},"relationships":{"area":{"data":{"type":"areas","id":["recvoGdo7z2z7pXWa"]}}}},{"id":"recMiZPNl7V1hyE1d","type":"competences","attributes":{"name":"Collaborer","index":"2.3","level":-1,"course-id":""},"relationships":{"area":{"data":{"type":"areas","id":["recoB4JYOBS1PCxhh"]}}}},{"id":"recNv8qhaY887jQb2","type":"competences","attributes":{"name":"Traiter des données","index":"1.3","level":-1,"course-id":"recR9yCEqgedB0LYQ"},"relationships":{"area":{"data":{"type":"areas","id":["recvoGdo7z2z7pXWa"]}}}},{"id":"recOdC9UDVJbAXHAm","type":"competences","attributes":{"name":"Développer des documents textuels","index":"3.1","level":-1,"course-id":"rec43mpMIR5dUzdjh"},"relationships":{"area":{"data":{"type":"areas","id":["recs7Gpf90ln8NCv7"]}}}},{"id":"recbDTF8KwupqkeZ6","type":"competences","attributes":{"name":"Développer des documents multimedia","index":"3.2","level":-1,"course-id":"recVtTay20uxEqubF"},"relationships":{"area":{"data":{"type":"areas","id":["recs7Gpf90ln8NCv7"]}}}},{"id":"rece6jYwH4WEw549z","type":"competences","attributes":{"name":"Programmer","index":"3.4","level":-1,"course-id":"recTMfUJzFaNiUt64"},"relationships":{"area":{"data":{"type":"areas","id":["recs7Gpf90ln8NCv7"]}}}},{"id":"recfr0ax8XrfvJ3ER","type":"competences","attributes":{"name":"Protéger la santé, le bien-être et l\'environnement","index":"4.3","level":-1,"course-id":"recRlIVstCemVM8jE"},"relationships":{"area":{"data":{"type":"areas","id":["recUcSnS2lsOhFIeE"]}}}},{"id":"recgxqQfz3BqEbtzh","type":"competences","attributes":{"name":"Partager et publier","index":"2.2","level":-1,"course-id":""},"relationships":{"area":{"data":{"type":"areas","id":["recoB4JYOBS1PCxhh"]}}}},{"id":"recofJCxg0NqTqTdP","type":"competences","attributes":{"name":"Protéger les données personnelles et la vie privée","index":"4.2","level":-1,"course-id":"recrJ90Sbrotzkb7x"},"relationships":{"area":{"data":{"type":"areas","id":["recUcSnS2lsOhFIeE"]}}}},{"id":"recsvLz0W2ShyfD63","type":"competences","attributes":{"name":"Mener une recherche et une veille d’information","index":"1.1","level":-1,"course-id":"recNPB7dTNt5krlMA"},"relationships":{"area":{"data":{"type":"areas","id":["recvoGdo7z2z7pXWa"]}}}},{"id":"recudHE5Omrr10qrx","type":"competences","attributes":{"name":"Construire un environnement numérique","index":"5.2","level":-1,"course-id":"recfLYUy8fYlcyAsl"},"relationships":{"area":{"data":{"type":"areas","id":["recnrCmBiPXGbgIyQ"]}}}}]}',
    createdAt: '2017-10-12 16:55:50',
    updatedAt: '2017-10-12 16:55:50',
    completionPercentage: '0',
    studentCode: 'AAA',
    campaignCode: 'EEE',
    user: {
      id: 1,
      firstName: 'PrenomUser',
      lastName: 'NomUser',
      email: 'test@test.com',
    }
  }];

  const expectedTextHeadersCSV = '"Nom","Prénom","Numéro Etudiant","Code Campagne","Date","Score Pix","Tests Réalisés","Mener une recherche et une veille d’information","Gérer des données","Traiter des données","Interagir","Partager et publier","Collaborer","S\'insérer dans le monde numérique","Développer des documents textuels","Développer des documents multimedia","Adapter les documents à leur finalité","Programmer","Sécuriser l\'environnement numérique","Protéger les données personnelles et la vie privée","Protéger la santé, le bien-être et l\'environnement","Résoudre des problèmes techniques","Construire un environnement numérique",\n';
  const expectedTextCSVFirstUser = '"NomUser","PrenomUser","UNIV123","CAMPAIGN123",13/10/2017,22,"2/16",2,,,,,,,,,,,,,,,3,\n';
  const expectedTextCSVSecondUser = '"NomUser","PrenomUser","AAA","EEE",12/10/2017,,"0/16",,,,,,,,,,,,,,,,,\n';

  describe('#convertJsonToCsv()', () => {

    it('should convert an JSON object to a String Object', () => {
      // when
      const result = snapshotsConverter.convertJsonToCsv({});

      // then
      expect(result).to.be.a('string');
      expect(result).to.equal('');

    });

    it('should set first line with headers informations', () => {
      // when
      const result = snapshotsConverter.convertJsonToCsv(jsonSnapshots);

      // then
      expect(result).to.contains(expectedTextHeadersCSV);
    });

    it('should set informations for users', () => {
      // when
      const result = snapshotsConverter.convertJsonToCsv(jsonSnapshots);

      // then
      expect(result).to.contains(expectedTextCSVFirstUser);
      expect(result).to.contains(expectedTextCSVSecondUser);
    });

    it('should return string with headers and users informations', () => {
      // when
      const result = snapshotsConverter.convertJsonToCsv(jsonSnapshots);

      // then
      expect(result).to.contains(expectedTextHeadersCSV + expectedTextCSVFirstUser + expectedTextCSVSecondUser);
    });
  });
});
