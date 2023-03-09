import { useEffect, useState } from 'react';
import { getAllVocab } from '../../../scripts/fetchApi';
import './Random.scss';

const Random = () => {
  const [random, setRandom] = useState([]);
  const [vocabluaries, setVocabluaries] = useState([]);
  const [randomNumber, setRandomNumber] = useState(0);
  const [viewTranslate, setViewTranslate] = useState(false);

  const Random = async () => {
    const rand = vocabluaries.sort(() => Math.random() - 0.5);
    setRandomNumber(Math.floor(Math.random() * rand.length));
    setRandom(rand);
    setViewTranslate(false);
  };
  async function getAllVocabularies() {
    const token = sessionStorage.getItem('token');
    const getUser = await getAllVocab(token);
    setVocabluaries(getUser.vocab);
  }
  useEffect(() => {
    getAllVocabularies();
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
        <div>
          <p style={{marginBottom: "10px", color: "green"}}>Translate: {viewTranslate ? random[randomNumber].translate : ''}</p>
          <p style={{color: "blue"}}>Description: {viewTranslate ? random[randomNumber].description : ''}</p>
        </div>
      </div>
    </div>
  );
};

export default Random;
