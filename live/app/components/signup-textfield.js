import Ember from 'ember';

const INPUT_VALIDATION_STATUS_MAP = {
  default: 'signup-textfield__input--default'
};

const ICON_TYPE_STATUS_MAP = {
  default: ''
};

export default Ember.Component.extend({
  classNames: ['signup-textfield'],

  label: '',
  validationStatus:'',
  textfieldName: '',
  _textfield: '',
  _validationMessage: '',


  hasIcon: Ember.computed('validationStatus', function(){
    return this.get('validationStatus') === 'default';
  }),

  iconType: Ember.computed('validationStatus', function(){
    const inputValidationStatus = this.get('validationStatus');
    return ICON_TYPE_STATUS_MAP[inputValidationStatus] || '';
  }),

  validationMessage: Ember.computed('validationStatus', function(){
    if(this.get('validationStatus') === 'default'){
      return '';
    }
  }),

  inputValidationStatus: Ember.computed('validationStatus', function(){
    const inputValidationStatus = this.get('validationStatus');
    return INPUT_VALIDATION_STATUS_MAP[inputValidationStatus] || '';
  }),

  actions: {
    validate(){
      const inputValue = this.get('_textfield');
      this.sendAction('validate', inputValue);
    }
  }
});
