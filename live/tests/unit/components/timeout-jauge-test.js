import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Component | timeout-jauge-component ', function () {

  setupTest('component:timeout-jauge', {});

  let component;

  beforeEach(function () {
    component = this.subject();
  });

  describe('#Test rendering Property', function () {

    describe('#remainingSeconds', function () {
      [
        { allotedTime: new Date(),  expected: 0 },
        { allotedTime: '  ',        expected: 0 },
        { allotedTime: undefined,   expected: 0 },
        { allotedTime: null,        expected: 0 },
        { allotedTime: '0',         expected: 0 },
        { allotedTime: '40',        expected: 40 },
        { allotedTime: '70',        expected: 70 },
        { allotedTime: '120',       expected: 120 },
        { allotedTime: 150,         expected: 150 },
      ].forEach((data) => {

        it(`should return "${data.expected}" when alloting ${data.allotedTime}`, function () {
          // given
          component.set('allotedTime', data.allotedTime);
          // when
          const remainingSeconds = component.get('remainingSeconds');
          // then
          expect(remainingSeconds).to.equal(data.expected);
        });
      });
    });


    describe('#remainingTime', function () {
      [
        { allotedTime: new Date(), expected: '0:00' },
        { allotedTime: '  ',       expected: '0:00' },
        { allotedTime: undefined,  expected: '0:00' },
        { allotedTime: null,       expected: '0:00' },
        { allotedTime: '0',        expected: '0:00' },
        { allotedTime: '40',       expected: '0:40' },
        { allotedTime: '70',       expected: '1:10' },
        { allotedTime: '120',      expected: '2:00' },
        { allotedTime: 150,        expected: '2:30' }
      ].forEach((data) => {

        it(`should return "${data.expected}" when alloting ${data.allotedTime}`, function () {
          // given
          component.set('allotedTime', data.allotedTime);
          // when
          const remainingTime = component.get('remainingTime');
          // then
          expect(remainingTime).to.equal(data.expected);
        });
      });
    });

    describe('#percentageOfTimeout', function () {
      [
        { allotedTime: new Date(), elapsedTime:4000,    expected: 0 },
        { allotedTime: '  ',       elapsedTime:4000,    expected: 0 },
        { allotedTime: undefined,  elapsedTime:4000,    expected: 0 },
        { allotedTime: null,       elapsedTime:4000,    expected: 0 },
        { allotedTime: '0',        elapsedTime:4000,    expected: 0 },
        { allotedTime: '40',       elapsedTime:4000,    expected: 10 },
        { allotedTime: '70',       elapsedTime:35000,   expected: 50 },
        { allotedTime: '120',      elapsedTime:120000,  expected: 100 },
        { allotedTime: 150,        elapsedTime:225000,  expected: 150 }
      ].forEach((data) => {

        it(`should return "${data.expected}" when alloting ${data.allotedTime} and elapsedTime is ${data.elapsedTime}`, function () {
          // given
          component.set('allotedTime', data.allotedTime);
          component.set('elapsedTime', data.elapsedTime);
          // when
          const percentageOfTimeout = component.get('percentageOfTimeout');
          // then
          expect(percentageOfTimeout).to.equal(data.expected);
        });
      });
    });

  });

});
