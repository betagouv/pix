import Ember from 'ember';
import _ from 'pix-live/utils/lodash-custom';

function fmtMSS(s) {
  if (!_.isInteger(s))
    return 0;
  return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
}

export default Ember.Component.extend({

  _pluralize(mystring, count){
    return (parseInt(count) > 1) ? mystring + 's' : mystring;
  },

  _formatTimeToHuman(allocatedTime){
    const timeArr = allocatedTime.split(':');
    return timeArr[0] + this._pluralize(' minute', timeArr[0]) + ' et ' + timeArr[1] + this._pluralize(' seconde', timeArr[1]);
  },

  didInsertElement(){
    this.set('allocatedTime', fmtMSS(this.get('time')));
    this.set('allocatedHumanTime', this._formatTimeToHuman(this.get('allocatedTime')));
  },

  actions: {
    confirmWarning() {
      this.sendAction('hasUserConfirmWarning');
    }
  }
});
