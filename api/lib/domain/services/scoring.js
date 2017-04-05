const _ = require('../../infrastructure/utils/lodash-utils');

const OUTCOME_FROM_A_CORRECT_ANSWER = 1;
const OUTCOME_FROM_A_WRONG_ANSWER = 0;

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


function _createPerformanceRecord(challenge, answer) {
  const knowledgeTags = challenge.knowledgeTags;
  const mainKnowledgeTag = knowledgeTags[ 0 ];
  const difficulty = _getDifficultyOfKnowledge(mainKnowledgeTag);

  const outcome = (answer.get('result') === 'ok') ? OUTCOME_FROM_A_CORRECT_ANSWER : OUTCOME_FROM_A_WRONG_ANSWER;

  return { difficulty, outcome };
}

function _evaluateAcquiredSkillTagsByLevel(acquiredKnowledgeTags) {
  const nbAcquiredKnowledgeTagsByLevel = {};
  [ 1, 2, 3, 4, 5, 6, 7, 8 ].forEach(level => nbAcquiredKnowledgeTagsByLevel[ level ] = 0);

  acquiredKnowledgeTags.forEach(knowledgeTag => {
    const difficulty = _getDifficultyOfKnowledge(knowledgeTag);
    nbAcquiredKnowledgeTagsByLevel[ difficulty ]++;
  });

  return nbAcquiredKnowledgeTagsByLevel;
}

function getPerformanceStats(answers, knowledgeData) {

  const acquiredKnowledgeTags = [];
  const notAcquiredKnowledgeTags = [];
  const performanceHistory = [];

  _.forEach(answers, answer => {
    const challenge = knowledgeData.challengesById[ answer.get('challengeId') ];
    if (challenge) {

      const knowledgeTags = challenge.knowledgeTags;
      const mainKnowledgeTag = knowledgeTags[ 0 ];

      if (answer.get('result') === 'ok') {
        const listOfAcquiredSkillTags = propagateKnowledge(knowledgeData.knowledgeTagSet, mainKnowledgeTag, -1);
        acquiredKnowledgeTags.push(...listOfAcquiredSkillTags);
      } else {
        const listOfUnknownSkillTags = propagateKnowledge(knowledgeData.knowledgeTagSet, mainKnowledgeTag, 1);
        notAcquiredKnowledgeTags.push(...listOfUnknownSkillTags);
      }

      const performanceRecord = _createPerformanceRecord(challenge, answer);
      performanceHistory.push(performanceRecord);
    }
  });

  const nbAcquiredKnowledgeTagsByLevel = _evaluateAcquiredSkillTagsByLevel(acquiredKnowledgeTags);

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
