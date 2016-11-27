const path = require('path');
const replace = require('replace-in-file');
const pixLivePath = path.join(__dirname, '..');

const options = {
  files: `${pixLivePath}/coverage/lcov.info`,
  replace: /SF:app/,
  with: `SF:${pixLivePath}/app`
};

replace(options)
  .then(changedFiles => {
    console.log('Modified files:', changedFiles.join(', '));
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
