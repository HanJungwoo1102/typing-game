import Problem from "../problem";

interface Word {
  text?: string;
  second?: number;
}

const fetchProblems = async () => {
  const response = await fetch('https://my-json-server.typicode.com/kakaopay-fe/resources/words');
  if (response.ok) {
    const words: Word[] = await response.json();

    const problems: Problem[] = [];

    words.forEach((word) => {
      if (word && word.text && word.second) {
        problems.push(new Problem({ text: word.text, second: word.second }))
      }
    })

    return problems;
  }
};

export default fetchProblems;
