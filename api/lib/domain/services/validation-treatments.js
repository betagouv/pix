function t1(string) {
  // Remove uppercase/spaces/accents/diacritics, see http://stackoverflow.com/a/37511463/827989
  return string.toString().trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '');
}

function t2(string) {
  return string.toString().replace(/[^a-zA-Z0-9 ]+/g, '').replace('/ {2,}/', ' ').replace(/\s\s+/g, ' ');
}

module.exports = {
  t1,
  t2
};
