
module.exports = {

  isDefault(deactivations) {
    return !deactivations || (!deactivations.t1) && (!deactivations.t2) && (!deactivations.t3);
  },

  hasOnlyT1(deactivations) {
    return deactivations.t1 && (!deactivations.t2) && (!deactivations.t3);
  }

};
