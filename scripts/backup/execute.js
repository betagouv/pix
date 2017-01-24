const Airtable = require('airtable');
const fs = require('fs');

const tables = ['Epreuves','Tests','Images Propositions','Acquis'];
let base = new Airtable({ apiKey: 'myKey' }).base('appHAIFk9u1qqglhX');
let currentDumpDir = '';
let dumpFiles = [];
let counter = 0;

createDailyBackUpRepo();
createFiles();
fetchData();


function fetchData() {
  let dataJson = [];
  let t = 0;
  console.log('-----------------'+tables[counter]+'-----------------');
  base(tables[counter]).select().eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      dataJson.push(JSON.stringify(record));
    });
    console.log(dataJson);
    writeIntoFile(dumpFiles[counter],dataJson,fetchNextPage);
    console.log('page'+ t);
    t++;
  }, function done(error) {
    if (error) {
      console.log(error);
    }
    console.log('----------------- * END '+tables[counter]+' *----------------- \n');
    fetchNext();
  });
}

function fetchNext(){
  counter++;
  if (counter > tables.length) return;
  return fetchData();
}

function createFiles() {
  tables.forEach(function (item) {
    const currentFile = 'Pix_Production_' + item.replace(' ', '') + '.json';
    dumpFiles.push(currentDumpDir + '/' + currentFile);
    fs.openSync(currentDumpDir + '/' + currentFile, 'w+');
  });
}
function createDailyBackUpRepo() {
  const today = new Date();
  let month = parseInt(today.getMonth()) + 1;
  month =  month <= 9? '0'+ month : month + 1;
  const day = parseInt(today.getDate()) <= 9? '0'+ today.getDate()  : today.getDate();
  currentDumpDir = today.getFullYear() + '-' + ( month ) + '-' + day;
  if (!fs.existsSync(currentDumpDir)) {
    fs.mkdirSync(currentDumpDir);
  }
}
function writeIntoFile(fileName, dataJson,callback) {
  fs.writeFile(fileName, dataJson, function (err, data) {
    if (err) throw err;
    console.log('It\'s saved!');
    callback();
  });
}
