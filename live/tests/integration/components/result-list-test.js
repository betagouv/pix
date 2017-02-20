import {expect} from 'chai';
import {describe, it} from 'mocha';
import {setupComponentTest} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe.only('Integration | Component | result list', function () {
  setupComponentTest('result-list', {
    integration: true
  });

  function renderComponent() {
    this.render(hbs`{{result-list answer index}}`);
  }

  function addItemsToComponent(item,value){
    this.set(item,value);
  }

  describe('Component Rendering', function () {

    it('should render component', function () {
      // When
      addItemsToComponent.call(this, 'answer', '');
      addItemsToComponent.call(this, 'index', 0);

      renderComponent.call(this);
      // Then
      expect(this.$()).to.have.length(1);
    });

    it('should render an item in list', function () {
      // when
      renderComponent.call(this);
      // then
      expect(this.$('.result-list__item')).to.be.length(1);
    });

    it('should render an item in list with an index', function () {
      // when
      renderComponent.call(this);
      // then
      expect(this.$('.result-list__index')).to.be.length(1);
    });

    it('should render an item in list with an icon', function () {
      // when
      renderComponent.call(this);
      // then
      expect(this.$('.result-list__icon')).to.be.length(1);
    });

    it('should render an item in list with an instruction', function () {
      // when
      renderComponent.call(this);
      // then
      expect(this.$('.result-list__instruction')).to.be.length(1);
    });

    it('should render an item in list with a correction', function () {
      // when
      renderComponent.call(this);
      // then
      expect(this.$('.result-list__correction')).to.be.length(1);
    });

  });

  describe('Component behavior', function () {

    it('should render an red icon when aswer is false', function () {
      // When
      addItemsToComponent.call(this, 'answer', '');
      addItemsToComponent.call(this, 'index', 0);

      renderComponent.call(this);
      // Then
      expect(this.$()).to.have.length(1);
    });
  });
});
