const Answer = require('../../domain/models/data/answer');

module.exports = {

  get(id) {

    return new Promise((resolve, reject) => {
    
      Answer.where('id', id)
        .fetch()
        .then((answer) => resolve(answer))
        .catch((err) => reject(err));
        
    });

  }
};
