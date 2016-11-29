import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Mixin.create({
  _instructionAsObject: Ember.computed('proposals', function () {
    return {
      text: this.get('instruction'),
      illustrationUrl: this.get('illustrationUrl'),
      attachmentUrl: this.get('attachmentUrl'),
      attachmentFilename: this.get('attachmentFilename')
    };
  })
});


