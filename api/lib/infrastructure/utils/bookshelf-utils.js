function isUniqConstraintViolated(err) {
  const SQLITE_UNIQ_CONSTRAINT = 'SQLITE_CONSTRAINT';
  const PGSQL_UNIQ_CONSTRAINT = '23505';

  return (err.code === SQLITE_UNIQ_CONSTRAINT || err.code === PGSQL_UNIQ_CONSTRAINT);
}

function mergeModelWithRelationship(model, relatedModel) {
  const pendingMerge = model.reduce((promises, collection) => {
    promises.push(collection.load([relatedModel]));
    return promises;
  }, []);

  return Promise.all(pendingMerge);
}

module.exports = {
  isUniqConstraintViolated,
  mergeModelWithRelationship
};
