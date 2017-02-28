import Ember from 'ember';
import _ from 'pix-live/utils/lodash-custom';

function fmtMSS(s, type) {
  if (!_.isInteger(s) || !s || s === null)  return 0;
  if(type=='jauge') {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
  }
  return (s - (s %= 60)) / 60 + ':' + s;
}

export default Ember.Component.extend({

  _pluralize(mystring, count){
    return (parseInt(count) > 1) ? mystring + 's' : mystring;
  },

  _getTime(allocatedTime){
    return allocatedTime.toString().split(':');
  },

  _getSeconds(seconds){
    return (seconds<1)? '' : seconds + this._pluralize(' seconde', seconds);
  },

  _getMinutes(minutes){
    return (minutes<1)? '' : minutes + this._pluralize(' minute', minutes);
  },

  _formatTimeToHuman(allocatedTime){
    if(! allocatedTime || allocatedTime == 0) return '';
    const time = this._getTime(allocatedTime);

    const glue = (time[0]<1 || time[1]<1)? '' : ' et ';
    return this._getMinutes(time[0]) + glue + this._getSeconds(time[1]);
  },

  allocatedHumanTime: Ember.computed('time', function(){
    return this._formatTimeToHuman(fmtMSS(this.get('time')));
  }),

  allocatedTime: Ember.computed('time', function(){
    return fmtMSS(this.get('time'), 'jauge');
  }),

  actions: {
    confirmWarning() {
      this.sendAction('hasUserConfirmWarning');
    }
  }
});
