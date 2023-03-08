import React, { useEffect, useState } from 'react';
import {
  deleteVocab,
  getAllVocab,
  postVocab,
} from '../../../scripts/fetchApi';
import Vocab from './Vocab/Vocab';
import './Vocabulary.scss';

const Vocabulary = () => {
  const [wordD, setWordD] = useState();
  const [body, setBody] = useState();
  const [word, setWord] = useState('');
  const [translate, setTranslate] = useState('');
  const [description, setDescrib] = useState('');
  const [deleteItemId, setDeleteItemId] = useState('');
  // const [updateItemId, setUpdateItemId] = useState('');

  async function onSubmitHandle(e) {
    e.preventDefault();
    const data = {
      word,
      translate,
      description,
    };
    setBody(data);
    console.log(data);

    const token = sessionStorage.getItem('token');
    await postVocab(data, token);
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

  useEffect(() => {
    async function f() {
      if (deleteItemId !== '') {
        const token = sessionStorage.getItem('token');
        await deleteVocab(deleteItemId, token);
      }
    }
    f();
  }, [deleteItemId]);

  async function getAllVocabulary() {
    const token = sessionStorage.getItem('token');
    const getUser = await getAllVocab(token);
    console.log(getUser);
    setWordD(getUser.vocab);
  }
  useEffect(() => {
    getAllVocabulary();
  }, [body]);

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
          {wordD ? (
            <table>
              <>
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
                    <Vocab
                      item={item}
                      key={idx}
                      deleteId={setDeleteItemId}
                      // update={setUpdateItemId}
                    />
                  ))}
                </tbody>
              </>
            </table>
          ) : (
            <p
              style={{
                width: '100%',
                fontSize: '30px',
                textAlign: 'center',
                marginTop: '20px',
              }}
            >
              No one word
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Vocabulary;
// [
//   {
//     word: 'Description',
//     translation: 'Translation',
//     description:
//       'izoh, bu oshanday shunday zor lorem12 asfnfnewfewkfn ewfnbewjf ewfnwefe',
//     id: 1,
//   },
//   {
//     word: 'Human',
//     translation: 'Odam',
//     description:
//       'odam odfmwkqdqw dwqindownq dwqdnoqwndw qdwqmdknwq dwqdnqwikndowqnd qwdnmowqikndoniwqd qwdnowqikndokniwqd qwdnwqndonwqid wqdiwqndonwqdowqikd ewfbewhbfwebfew fewjbfiewjbfijewf jugbweiujfbwe',
//     id: 2,
//   },
// ]
