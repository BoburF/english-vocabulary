import React, { useEffect, useState } from 'react';
import { getAllVocab, postVocab } from '../../../scripts/fetchApi';
import Vocab from './Vocab/Vocab';
import './Vocabulary.scss';

const Vocabulary = () => {
  const [wordD, setWordD] = useState([
    {
      word: 'Description',
      translation: 'Translation',
      description:
        'izoh, bu oshanday shunday zor lorem12 asfnfnewfewkfn ewfnbewjf ewfnwefe',
    },
    {
      word: 'Human',
      translation: 'Odam',
      description:
        'odam odfmwkqdqw dwqindownq dwqdnoqwndw qdwqmdknwq dwqdnqwikndowqnd qwdnmowqikndoniwqd qwdnowqikndokniwqd qwdnwqndonwqid wqdiwqndonwqdowqikd ewfbewhbfwebfew fewjbfiewjbfijewf jugbweiujfbwe',
    },
  ]);
  const [word, setWord] = useState('');
  const [translate, setTranslate] = useState('');
  const [describ, setDescrib] = useState('');

  async function onSubmitHandle(e) {
    e.preventDefault();
    const body = {
      word,
      translate,
      describ
    }
    
    await postVocab(body);
  }
  function inputChangeHandler(e) {
    const { id, value } = e.target;

    if (id === 'word') {
      setWord(value);
    } else if (id === 'translation') {
      setTranslate(value);
    } else if (id === 'description') {
      setDescrib(value);
    }
  }

  // async function getAllVocabulary() {
  //   console.log(await getAllVocab());
  // }
  // useEffect(() => {
  //   getAllVocabulary()
  // })

  return (
    <div className="Vocabulary">
      <div className="type_vocabulary">
        <div className="form right">
          <h2 className="title">Words with translation and description</h2>
          <form onSubmit={(e) => onSubmitHandle(e)}>
            <input
              type="text"
              placeholder="Word..."
              id="word"
              onChange={(e) => inputChangeHandler(e)}
            />
            <input
              type="text"
              placeholder="Translation..."
              id="translation"
              onChange={(e) => inputChangeHandler(e)}
            />
            <textarea
              placeholder="Description..."
              id="description"
              onChange={(e) => inputChangeHandler(e)}
            />
            <button>Add to vocaboost</button>
          </form>
        </div>
      </div>
      <div className="voca">
        <div className="table right">
          <table>
            <thead>
              <tr>
                <th>Word</th>
                <th>Translation</th>
                <th>Description</th>
                <th className="none_mobile">Edit</th>
                <th className="none_mobile">Delete</th>
              </tr>
            </thead>
            <tbody>
              {wordD.map((item, idx) => (
                <Vocab item={item} key={idx} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Vocabulary;
