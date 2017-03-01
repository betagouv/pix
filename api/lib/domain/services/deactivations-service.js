
module.exports = {

  isDefault(deactivations) {
    return !deactivations || (!deactivations.t1) && (!deactivations.t2) && (!deactivations.t3);
  },

  hasOnlyT1(deactivations) {
    if (deactivations && deactivations.t1 && (!deactivations.t2) && (!deactivations.t3)) {
      return true;
    }
    return false;
  },

  hasOnlyT1T2(deactivations) {
    if (deactivations && deactivations.t1 && deactivations.t2 && (!deactivations.t3)) {
      return true;
    }
    return false;
  },

  hasOnlyT1T3(deactivations) {
    if (deactivations && deactivations.t1 && (!deactivations.t2) && deactivations.t3) {
      return true;
    }
    return false;
  },

  hasOnlyT2(deactivations) {
    if (deactivations && deactivations.t2 && (!deactivations.t1) && (!deactivations.t3)) {
      return true;
    }
    return false;
  },

  hasOnlyT3(deactivations) {
    if (deactivations && deactivations.t3 && (!deactivations.t1) && (!deactivations.t2)) {
      return true;
    }
    return false;
  }

};
