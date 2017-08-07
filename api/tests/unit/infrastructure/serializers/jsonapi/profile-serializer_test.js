const { describe, it, expect } = require('../../../../test-helper');
const serializer = require('../../../../../lib/infrastructure/serializers/jsonapi/profile-serializer');
const Profile = require('../../../../../lib/domain/models/data/profile');
const User = require('../../../../../lib/domain/models/data/user');
const Organization = require('../../../../../lib/domain/models/data/organization');
const Assessment = require('../../../../../lib/domain/models/data/assessment');

describe('Unit | Serializer | JSONAPI | profile-serializer', () => {

  describe('#serialize', function() {

    let user;
    let areas;
    let competences;
    let expectedJson;
    let organizations;
    let assessments;
    let courses;

    beforeEach(() => {
      user = new User({
        id: 'user_id',
        'firstName': 'Luke',
        'lastName': 'Skywalker',
        'email': 'luke@sky.fr'
      });

      areas = [
        {
          id: 'recAreaA',
          name: 'area-name-1'
        },
        {
          id: 'recAreaB',
          name: 'area-name-2'
        }
      ];

      competences = [
        {
          id: 'recCompA',
          name: 'competence-name-1',
          index: '1.1',
          areaId: 'recAreaA',
          courseId: 'recBxPAuEPlTgt72q11'
        },
        {
          id: 'recCompB',
          name: 'competence-name-2',
          index: '1.2',
          areaId: 'recAreaB',
          courseId: 'recBxPAuEPlTgt72q99'
        }];

      assessments = [new Assessment(
        {
          courseId: 'courseID1',
          estimatedLevel: 8,
          pixScore: 128
        })];

      organizations = [
        new Organization({ id: 'organizationId1', name: 'etablissement 1', email: 'best.etablishment@company.com', type: 'SCO', code: 'ABCD12' }),
        new Organization({ id: 'organizationId2', name: 'etablissement 2', email: 'best.enterprise@company.com', type: 'PRO', code: 'EFGH34' })
      ];

      courses = [{ id: 'courseID1', competences: ['recCompB'] }];

      expectedJson = {
        data: {
          type: 'users',
          id: 'user_id',
          attributes: {
            'first-name': 'Luke',
            'last-name': 'Skywalker',
            'total-pix-score': 128,
            'email': 'luke@sky.fr'
          },
          relationships: {
            competences: {
              data: [
                { type: 'competences', id: 'recCompA' },
                { type: 'competences', id: 'recCompB' }
              ]
            },
            organizations: {
              data: [
                { type: 'organizations', id: 'organizationId1' },
                { type: 'organizations', id: 'organizationId2' }
              ]
            }
          },

        },
        included: [
          {
            type: 'areas',
            id: 'recAreaA',
            attributes: {
              name: 'area-name-1'
            }
          },
          {
            type: 'areas',
            id: 'recAreaB',
            attributes: {
              name: 'area-name-2'
            }
          },
          {
            type: 'competences',
            id: 'recCompA',
            attributes: {
              name: 'competence-name-1',
              index: '1.1',
              level: -1,
              'course-id': 'recBxPAuEPlTgt72q11'
            },
            relationships: {
              area: {
                data: {
                  type: 'areas',
                  id: 'recAreaA'
                }
              }
            }
          },
          {
            type: 'competences',
            id: 'recCompB',
            attributes: {
              name: 'competence-name-2',
              index: '1.2',
              level: 8,
              'pix-score': 128,
              'course-id': 'recBxPAuEPlTgt72q99'
            },
            relationships: {
              area: {
                data: {
                  type: 'areas',
                  id: 'recAreaB'
                }
              }
            }
          },
          {
            type: 'organizations',
            id: 'organizationId1',
            attributes: {
              name: 'etablissement 1',
              email: 'best.etablishment@company.com',
              type: 'SCO',
              code : 'ABCD12'
            }
          },
          {
            type: 'organizations',
            id: 'organizationId2',
            attributes: {
              name: 'etablissement 2',
              email: 'best.enterprise@company.com',
              type: 'PRO',
              code : 'EFGH34'
            }
          }
        ]
      };
    });

    it('should serialize a Profile into JSON:API data of type "users"', function() {
      // Given
      const profile = new Profile(user, competences, areas, assessments, courses, organizations);

      // When
      const userSerialized = serializer.serialize(profile);

      // Then
      expect(userSerialized).to.be.deep.equal(expectedJson);
    });

    it('should not serialize "total-pix-score" user attribute when no assessments', function() {
      // Given
      const profile = new Profile(user, competences, areas, [], [], []);

      // When
      const userSerialized = serializer.serialize(profile);

      // Then
      expect(userSerialized.data.attributes).not.to.have.property('total-pix-score');
    });
  });

});
