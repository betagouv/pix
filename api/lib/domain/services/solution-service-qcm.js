function areStringListEquivalent(listA, listB) {
  let result = false;
  try {
    const trimmedListA = listA.split(',').map(function(s) { return s.trim(); });
    const trimmedListB = listB.split(',').map(function(s) { return s.trim(); });
    result = (trimmedListA.sort().join(',') === trimmedListB.sort().join(','));
  } catch (e) {
    result = false;
  }
  return result;
}

module.exports = {

  match (answer, solution) {

    if (areStringListEquivalent(answer, solution)) {
      return 'ok';
    }
    return 'ko';
  }

};
