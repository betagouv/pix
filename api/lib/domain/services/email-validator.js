const _ = include('lib/utils/lodash-utils');
module.exports = {

  emailIsValid(email){
    if(typeof email != 'undefined' && !_.isNull(email) && email.length>0){
      const pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      return pattern.test(email);
    }
    return false;
  }

};
