import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe.only('Integration | Component | app menu', function() {
  setupComponentTest('app-menu', {
    integration: true
  });

  function addItemsToMenu(component,items){
    component.set('items',items);
  }

  function renderAppMenu(component) {
    component.render(hbs`{{app-menu items}}`);
  }

  describe('Test render menu item or not according to item', function(){
    it('Should render component App-menu with one item', function(){
      //Given
      addItemsToMenu(this,[{
        title : 'projet',
        href : '/projet'
      }]);
      //When
      renderAppMenu(this);
      //then
      const item = this.$('.app-menu__item > a');
      expect(item).to.have.lengthOf(1);
      expect(item.text()).to.equal('projet');
      expect(item.prop('href')).to.contain('/projet');
    });

    it('Should render component App-menu with multiple items', function(){
      //Given
      addItemsToMenu(this, [
        {
          title: 'projet',
          href: '/projet'
        },
        {
          title: 'menu2',
          href: '/about'
        },
      ]);
      //When
      renderAppMenu(this);
      //then
      //const secondItem = (this.$('.app-menu__item a').length > 1)? this.$('.app-menu__item>a')[1] : this.$('.app-menu__item>a');
      const secondItem = this.$('.app-menu__item a')[1];
      //expect(secondItem).to.have.lengthOf(1);
      //expect(secondItem.text()).to.equal('menu2');
      //expect(secondItem.prop('href')).to.contain('/about');
    });

    it('Should not component App-menu with no item', function(){
      //Given
      addItemsToMenu(this,[]);
      //When
      renderAppMenu(this);
      //then
      expect(this.$('.app-menu__item > a').text()).to.be.empty;
    });

  });






});
