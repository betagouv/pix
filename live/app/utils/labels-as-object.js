function deletePlaceholderInLabel(keyInput) {
  if (keyInput.indexOf('#') != -1) {
    keyInput = keyInput.substring(0, keyInput.indexOf('#'));
  }
  return keyInput;
}

function parseChallenge(proposals) {
  const proposalsWithoutLineBreak = proposals.replace(/\n/g, '');
  const proposalsSplitted = proposalsWithoutLineBreak.split(/\$\{|}/).slice(0, -1);
  const labelsAsObject = {};
  proposalsSplitted.forEach((element, index) => {
    if (index % 2 != 0) {
      element = deletePlaceholderInLabel(element);
      labelsAsObject[element] = proposalsSplitted[index - 1];
    }
  });
  return labelsAsObject;
}

export default function labelsAsObject(labels) {

  const labelsAsObject = parseChallenge(labels);
  return labelsAsObject;
}
