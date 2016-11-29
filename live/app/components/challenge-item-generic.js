import Ember from 'ember';
import callOnlyOnce from '../utils/call-only-once';

const ChallengeItemGeneric = Ember.Component.extend({

  /* CSS properties
  ––––––––––––––––––––––––––––––––––––––––––––––––––*/
  tagName: 'article',
  classNames: ['challenge-item'],
  attributeBindings: ['challenge.id:data-challenge-id'],


  /* Actions
  ––––––––––––––––––––––––––––––––––––––––––––––––––*/
  actions: {

    // callOnlyOnce : prevent double-clicking from creating double record.
    validate: callOnlyOnce(function () {
      if (this._hasError()) {
        this.set('errorMessage', this._getErrorMessage());
        return this.sendAction('onError', this.get('errorMessage'));
      }
      const value = this._getAnswerValue();
      this.sendAction('onValidated', this.get('challenge'), this.get('assessment'), value);
    }),

    skip: callOnlyOnce(function () {
      this.set('errorMessage', null);
      this.sendAction('onValidated', this.get('challenge'), this.get('assessment'), '#ABAND#');
    })
  }

});

export default ChallengeItemGeneric;
