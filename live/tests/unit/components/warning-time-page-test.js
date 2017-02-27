import {expect} from 'chai';
import {describe, it} from 'mocha';
import {setupTest} from 'ember-mocha';


describe('Unit | Component | warning-page-component ', function () {
  setupTest('component:warning-page', {});

  let component;

  function initComponent() {
    component = this.subject();
  }

  describe('#Test rendering Property', function () {

    [
      '',
      ' ',
      'undefined',
      null,
      0
    ].forEach((value) => {
      it(`AllocatedTime should return 0 when passing ${value}`, function () {
        // given
        initComponent.call(this);
        // when
        component.set('time', value);
        // then
        expect(component.get('allocatedTime')).to.equal(0);
      });

      it(`AllocatedHumanTime should return '' when passing ${value}`, function () {
        // given
        initComponent.call(this);
        // when
        component.set('time', value);
        // then
        expect(component.get('allocatedHumanTime')).to.equal('');
      });
    });

    it('AllocatedTime should return 0:10 when passing 10', function () {
      // given
      initComponent.call(this);
      // when
      component.set('time', 10);
      // then
      expect(component.get('allocatedTime')).to.equal('0:10');
    });

    it('AllocatedHumanTime should return 10 secondes when passing 10', function () {
      // given
      initComponent.call(this);
      // when
      component.set('time', 10);
      // then
      expect(component.get('allocatedHumanTime')).to.equal('10 secondes');
    });


    it('should return 1:00 when passing 60', function () {
      // given
      initComponent.call(this);
      // when
      component.set('time', 60);
      // then
      expect(component.get('allocatedTime')).to.equal('1:00');
    });

    it('AllocatedHumanTime should return 1 minute when passing 10', function () {
      // given
      initComponent.call(this);
      // when
      component.set('time', 60);
      // then
      expect(component.get('allocatedHumanTime')).to.equal('1 minute');
    });


    it('should return 1:01 when passing 61', function () {
      // given
      initComponent.call(this);
      // when
      component.set('time', 61);
      // then
      expect(component.get('allocatedTime')).to.equal('1:01');
    });

    it('AllocatedHumanTime should return 1 minute et 01 seconde when passing 61', function () {
      // given
      initComponent.call(this);
      // when
      component.set('time', 61);
      // then
      expect(component.get('allocatedHumanTime')).to.equal('1 minute et 01 seconde');
    });


    it('should return 1:10 when passing 70', function () {
      // given
      initComponent.call(this);
      // when
      component.set('time', 70);
      // then
      expect(component.get('allocatedTime')).to.equal('1:10');
    });

    it('AllocatedHumanTime should return 2 minutes et 10 secondes when passing 10', function () {
      // given
      initComponent.call(this);
      // when
      component.set('time', 130);
      // then
      expect(component.get('allocatedHumanTime')).to.equal('2 minutes et 10 secondes');
    });
  });

});
