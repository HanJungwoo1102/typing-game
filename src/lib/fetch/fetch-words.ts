import Word from '../models/word';

const fetchWords = async () => {
  const response = await fetch('https://my-json-server.typicode.com/kakaopay-fe/resources/words');
  if (response.ok) {
    const words: Word[] = await response.json();

    return words;
  }
};

export default fetchWords;
