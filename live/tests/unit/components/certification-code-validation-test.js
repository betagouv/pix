import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';
import sinon from 'sinon';

describe('Unit | Component | certification-code-value', function() {

  setupTest('component:certification-code-validation', {});
  let component;
  beforeEach(function() {
    component = this.subject();
  });

  describe('#submit', function() {
    let storeStub;
    let storeCreateRecordStub;
    let storeSaveStub;
    let course;

    beforeEach(() => {
      storeSaveStub = sinon.stub().resolves({ id: 12 });
      course = {
        save: storeSaveStub,
      };
      storeCreateRecordStub = sinon.stub().returns(course);
      storeStub = {
        createRecord: storeCreateRecordStub,
      };
    });

    it('should create and save a new course', function() {
      // given
      component.set('store', storeStub);
      component.set('codeSession', 'ABCD12');

      // when
      component.send('submit');

      // then
      sinon.assert.called(storeCreateRecordStub);
      sinon.assert.calledWith(storeCreateRecordStub, 'course', { sessionCode: 'ABCD12' });
      sinon.assert.called(storeSaveStub);
    });
  });
});
