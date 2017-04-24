import { expect} from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe.only('Unit | Component | signupTextfieldComponent', function () {

  setupTest('component:signup-textfield', {});

  describe('When validationStatus gets "default", Component computed property: ', function () {

    [
      {property: 'hasIcon', expectedValue: true},
      {property: 'iconType', expectedValue: ''},
      {property: 'validationMessage', expectedValue: ''},
      {property: 'inputValidationStatus', expectedValue: 'signup-textfield__input--default'},
    ].forEach(({property, expectedValue}) => {
      it(`${property} should return ${expectedValue} `, function () {
        // Given
        const component = this.subject();
        // When
        component.set('validationStatus', 'default');
        const propertyValue = component.get(property);
        // Then
        expect(propertyValue).to.equal(expectedValue);
      });
    });
  });
});
