import React, { useEffect, useState } from 'react';
import { deleteVocab, getAllVocab, postVocab, updateVocab } from '../../../scripts/fetchApi';
import Vocab from './Vocab/Vocab';
import './Vocabulary.scss';

const Vocabulary = () => {
  const [wordD, setWordD] = useState([]);
  const [word, setWord] = useState('');
  const [translate, setTranslate] = useState('');
  const [description, setDescription] = useState('');
  const [deleteItemId, setDeleteItemId] = useState('');
  const [body, setBody] = useState({});
  const [updateItemId, setUpdateItemId] = useState('');
  const [isAddMode, setIsAddMode] = useState(false);

  function clearInputs() {
    setTranslate('');
    setDescription('');
    setWord('');
  }
  async function onSubmitHandle(e) {
    e.preventDefault();
    const data = {
      word,
      translate,
      description,
    };
    setBody(data);
    const token = sessionStorage.getItem('token');
    isAddMode ? await updateVocab(data, token, updateItemId) : await postVocab(data, token);
    clearInputs();
    await getAllVocabulary();
    setIsAddMode(false);
  }
  function inputChangeHandler(e) {
    const { id, value } = e.target;

    if (id === 'word') {
      setWord(value);
    } else if (id === 'translation') {
      setTranslate(value);
    } else if (id === 'description') {
      setDescription(value);
    }
  }

  async function getAllVocabulary() {
    const token = sessionStorage.getItem('token');
    const getUser = await getAllVocab(token);
    setWordD(getUser.vocab);
  }

  useEffect(() => {
    async function f() {
      if (deleteItemId !== '') {
        const token = sessionStorage.getItem('token');
        await deleteVocab(deleteItemId, token);
      }
      await getAllVocabulary();
    }
    f();
  }, [deleteItemId]);

  useEffect(() => {
    async function f() {
      await getAllVocabulary();
    }
    f()
  }, [body]);

  useEffect(() => {
    function updateVocabulary() {
      const findVocab = wordD.filter((item) => item._id === updateItemId);
      setIsAddMode(findVocab[0] ? true : false);
      setWord(findVocab[0] ? findVocab[0].word : '');
      setTranslate(findVocab[0] ? findVocab[0].translate : '');
      setDescription(findVocab[0] ? findVocab[0].description : '');
    }
    updateVocabulary();
  }, [updateItemId]);

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
              value={word}
              onChange={(e) => inputChangeHandler(e)}
              required
            />
            <input
              type="text"
              placeholder="Translation..."
              id="translation"
              value={translate}
              onChange={(e) => inputChangeHandler(e)}
              required
            />
            <textarea
              placeholder="Description..."
              id="description"
              value={description}
              onChange={(e) => inputChangeHandler(e)}
              required
            />
            {
              !isAddMode ? 
              <button>Add to vocaboost</button> 
              : <button>Update vocabulary</button>
            }
          </form>
        </div>
      </div>
      <div className="voca">
        <div className="table right">
          {wordD.length > 0 ? (
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
                  <Vocab
                    item={item}
                    key={idx}
                    deleteId={setDeleteItemId}
                    update={setUpdateItemId}
                  />
                ))}
              </tbody>
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
