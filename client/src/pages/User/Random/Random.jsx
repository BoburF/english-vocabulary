import { useEffect, useState } from 'react';
import { getAllVocab } from '../../../scripts/fetchApi';
import './Random.scss';

const Random = () => {
  const [random, setRandom] = useState([]);
  const [vocabluaries, setVocabluaries] = useState([]);
  const [randomNumber, setRandomNumber] = useState(0);
  const [viewTranslate, setViewTranslate] = useState(false);

  const Random = async () => {
    // setRandom('mana');
    const rand = vocabluaries.sort(() => Math.random() - 0.5);
    setRandomNumber(Math.floor(Math.random() * rand.length));
    setRandom(rand);
    setViewTranslate(false);
  };
  async function f() {
    const token = sessionStorage.getItem('token');
    const getUser = await getAllVocab(token);
    setVocabluaries(getUser.vocab);
  }
  useEffect(() => {
    f();
  }, []);

  return (
    <div className="Random">
      <h2 className="title">Random word your vocabulary</h2>
      <div className="random_word">
        <button title="Random word" onClick={() => Random()}>
          Random
        </button>
        <p>
          {random.length > 0
            ? random[randomNumber].word
            : 'Choose Random vocabulary'}
        </p>
        <button
          className="view-translate"
          onClick={() => setViewTranslate(true)}
        >
          View translate
        </button>
        <p>
          {viewTranslate ? random[randomNumber].translate : 'View translate'}
        </p>
      </div>
    </div>
  );
};

export default Random;
