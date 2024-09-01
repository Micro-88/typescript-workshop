import {sqaureNumber} from './map';
import {doSomeStuff} from './doSomeStuff';

console.log('Try npm run lint/fix!');

const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';
const trailing = 'Semicolon';
const why = {am: 'I tabbed?'};
const iWish = "I didn't have a trailing space...";
const sicilian = true;
const vizzini = sicilian ? !sicilian : sicilian;
const re = /foo {3}bar/;

doSomeStuff('example1', 'example2', ['example3']);
const numbers = [2, 4, 6, 8];

console.log(sqaureNumber(numbers));
