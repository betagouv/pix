const _ = include('lib/utils/lodash-utils');

function _countResult(about, desiredResult) {
  return _.reduce(about, function(sum, o) {
    return sum + (o.result === desiredResult ? 1 : 0);
  }, 0);
}


module.exports = {

  getRevalidationStatistics(oldAnswers, newAnswers) {

    // only id and result properties are needed.
    const oldAnswersResult = _.map(oldAnswers, (o) => { return {id : o.id, result: o.attributes.result};});
    const newAnswersResult = _.map(newAnswers, (o) => { return {id : o.id, result: o.attributes.result};});

    const okNewCount = _countResult(newAnswersResult, 'ok');
    const koNewCount = _countResult(newAnswersResult, 'ko');
    const timedoutNewCount = _countResult(newAnswersResult, 'timedout');
    const partiallyNewCount = _countResult(newAnswersResult, 'partially');
    const abandNewCount = _countResult(newAnswersResult, 'aband');
    const notImplementedNewCount = _countResult(newAnswersResult, 'not-implemented');

    const okOldCount = _countResult(oldAnswersResult, 'ok');
    const koOldCount = _countResult(oldAnswersResult, 'ko');
    const timedoutOldCount = _countResult(oldAnswersResult, 'timedout');
    const partiallyOldCount = _countResult(oldAnswersResult, 'partially');
    const abandOldCount = _countResult(oldAnswersResult, 'aband');
    const notImplementedOldCount = _countResult(oldAnswersResult, 'not-implemented');

    const okDiff = okNewCount - okOldCount;
    const koDiff = koNewCount - koOldCount;
    const timedoutDiff = timedoutNewCount - timedoutOldCount;
    const abandDiff = abandNewCount - abandOldCount;
    const partiallyDiff = partiallyNewCount - partiallyOldCount;
    const notImplementedDiff = notImplementedNewCount - notImplementedOldCount;

    return {
      ok: okNewCount,
      okDiff: okDiff,
      ko: koNewCount,
      koDiff: koDiff,
      timedout: timedoutNewCount,
      timedoutDiff: timedoutDiff,
      aband: abandNewCount,
      abandDiff: abandDiff,
      partially: partiallyNewCount,
      partiallyDiff: partiallyDiff,
      notImplemented: notImplementedNewCount,
      notImplementedDiff: notImplementedDiff
    };

  }

};
