const _ = require('../../infrastructure/utils/lodash-utils');

function _getDifficultyOfKnowledge(knowledgeTag) {
  return parseInt(knowledgeTag.slice(-1));
}

function nextNode(node, direction) {
  return node.slice(0, -1) + (parseInt(node.slice(-1)) + direction);
}

function propagateKnowledge(knowledgeList, startNode, direction) {
  const nodeList = [];

  let node = startNode;
  while (knowledgeList.hasOwnProperty(node)) {
    nodeList.push(node);
    node = nextNode(node, direction);
  }
  return nodeList;
}


function getPerformanceStats(answers, knowledgeData) {

  const acquiredKnowledgeTags = [];
  const notAcquiredKnowledgeTags = [];
  const performanceHistory = [];
  const nbAcquiredKnowledgeTagsByLevel = {};

  [ 1, 2, 3, 4, 5, 6, 7, 8 ].forEach(level => nbAcquiredKnowledgeTagsByLevel[ level ] = 0);

  _.forEach(answers, answer => {
    const challenge = knowledgeData.challengesById[ answer.get('challengeId') ];
    if (challenge) {
      const knowledgeTags = challenge.knowledgeTags;
      const mainKnowledgeTag = knowledgeTags[ 0 ];
      const difficulty = _getDifficultyOfKnowledge(mainKnowledgeTag);
      let outcome = 0;
      let direction = 1;
      let tagBucket = notAcquiredKnowledgeTags;
      if (answer.get('result') === 'ok') {
        outcome = 1;
        direction = -1;
        tagBucket = acquiredKnowledgeTags;
      }
      const relatedKnowledgeTags = propagateKnowledge(knowledgeData.knowledgeTagSet, mainKnowledgeTag, direction);
      performanceHistory.push({ difficulty, outcome });
      tagBucket.push(...relatedKnowledgeTags);
    }
  });

  acquiredKnowledgeTags.forEach(knowledgeTag => {
    const difficulty = _getDifficultyOfKnowledge(knowledgeTag);
    nbAcquiredKnowledgeTagsByLevel[ difficulty ]++;
  });

  return {
    acquiredKnowledgeTags,
    notAcquiredKnowledgeTags,
    performanceHistory,
    nbAcquiredKnowledgeTagsByLevel
  };
}

function _add(a, b) {
  return a + b;
}

function _computeDiagnosis(performanceStats, knowledgeData) {

  const firstFiveLevels = [ 1, 2, 3, 4, 5 ];
  let pixScore = 0;
  firstFiveLevels.forEach(level => {
    if (knowledgeData.nbKnowledgeTagsByLevel[ level ] > 0) {
      pixScore += performanceStats.nbAcquiredKnowledgeTagsByLevel[ level ] * 8 / knowledgeData.nbKnowledgeTagsByLevel[ level ];
    }
  });
  pixScore = Math.floor(pixScore);

  const nbAcquiredKnowledgeTags = firstFiveLevels.map(level => performanceStats.nbAcquiredKnowledgeTagsByLevel[ level ]).reduce(_add);
  const nbKnowledgeTags = firstFiveLevels.map(level => knowledgeData.nbKnowledgeTagsByLevel[ level ]).reduce(_add);

  const highestLevel = Math.max(...firstFiveLevels.filter(level => knowledgeData.nbKnowledgeTagsByLevel[ level ] > 0));
  const estimatedLevel = Math.floor(nbAcquiredKnowledgeTags * highestLevel / nbKnowledgeTags);
  return {
    estimatedLevel,
    pixScore
  };
}

module.exports = {

  nextNode,
  propagateKnowledge,

  getPerformanceStats,

  // TODO A deplacer ailleurs, une fois que getPerformanceStats et _computeDiagnosis seront exposés
  populateScore(assessment, answers, knowledgeData) {

    if (answers.length === 0) {
      return assessment;
    }

    const performanceStats = getPerformanceStats(answers, knowledgeData);
    const diagnosis = _computeDiagnosis(performanceStats, knowledgeData);

    assessment.set('estimatedLevel', diagnosis.estimatedLevel);
    assessment.set('pixScore', diagnosis.pixScore);
    assessment.set('notAcquiredKnowledgeTags', performanceStats.notAcquiredKnowledgeTags);
    assessment.set('acquiredKnowledgeTags', performanceStats.acquiredKnowledgeTags);
    return assessment;
  },

};
