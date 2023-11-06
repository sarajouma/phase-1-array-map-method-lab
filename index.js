const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(Captilizedsentence);
  
}
function Captilizedsentence(str) {
  let sentences = str.split(' ');
  for (let i = 0; i < sentences.length; i++) {
    let sentence = sentences[i];
    sentences[i] = sentence.charAt(0).toUpperCase() + sentence.slice(1);
  }
  return sentences.join(' ');
}

