import { expect } from 'chai';
import { describeModel, it } from 'ember-mocha';
import OriginalChallenge from 'pix-live/models/challenge';
import ChallengeSerializer from 'pix-live/serializers/challenge';

describeModel(
  'challenge',
  'Unit | Serializer | Challenge',
  {},
  function () {

    const serializer = new ChallengeSerializer();
    const Challenge = OriginalChallenge.extend({}); // copy the class to avoid side effects
    Challenge.modelName = 'challenge';

    function normalizePayload(payload) {
      serializer.normalizeResponse(null, Challenge, payload, payload.id, null);
      return payload;
    }

    it('normalizes correctly', function () {

      const payload = {
        id: 'recgS0TFyy0bXTjIL',
        type: 'QCM',
        instruction: "Que peut-on dire des œufs de catégorie A ?",
        proposals: "- Ils sont bio. - Ils pèsent plus de 63 grammes. - Ce sont des oeufs frais. - Ils sont destinés aux consommateurs. - Ils ne sont pas lavés."
      };

      const expected = {
        id: payload.id,
        type: payload.type,
        instruction: payload.instruction,
        proposals: payload.proposals
      };
      const challenge = normalizePayload(payload);

      expect(challenge).to.be.deep.equal(expected);
    });
  }
);
