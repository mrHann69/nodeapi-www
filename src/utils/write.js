const fs = require('fs');

fs.readFile(`${process.cwd()}/src/utils/data.json`, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const dataArray = JSON.parse(data);
  console.log(dataArray);
});


