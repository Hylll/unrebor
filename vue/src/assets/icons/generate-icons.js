/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path');
const { readFileSync, writeFile } = require('fs');

const input = readFileSync(resolve(__dirname, './icomoon.svg'), 'utf-8');

const formattedInput = input.split('\n');
const filteredInput = formattedInput.filter((line) => line.includes('glyph-name'));

const iconNames = filteredInput.map((line) => {
  const { groups: { name } } = line.match(/glyph-name="(?<name>[a-z0-9-]+)"/);
  return name;
});

const filePath = `${__dirname}/iconNames.json`;
const fileContent = JSON.stringify(iconNames);

writeFile(filePath, fileContent, (err) => {
  if (err) throw err;

  console.log('Icons successfully generated !');
});
