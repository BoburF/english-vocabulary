import React, { useState } from "react";
import "./Vocabulary.scss";

const Vocabulary = () => {
  const [wordT, setWordT] = useState([
    {
      word: "Description",
      translation: "izoh",
    },
    {
      word: "Human",
      translation: "odam uqwfuwfiqwuni qwdbuijndwqb",
    },
  ]);
  const [wordD, setWordD] = useState([
    {
      word: "Description",
      translation:
        "izoh, bu oshanday shunday zor lorem12 asfnfnewfewkfn ewfnbewjf ewfnwefe",
    },
    {
      word: "Human",
      translation:
        "odam odfmwkqdqw dwqindownq dwqdnoqwndw qdwqmdknwq dwqdnqwikndowqnd qwdnmowqikndoniwqd qwdnowqikndokniwqd qwdnwqndonwqid wqdiwqndonwqdowqikd ewfbewhbfwebfew fewjbfiewjbfijewf jugbweiujfbwe",
    },
  ]);

  const [none, setNone] = useState('none')
  const [none1, setNone1] = useState('flex')

  const Change = (name) => {
    if(name === 'right'){
      setNone1('none')
      setNone('flex')
    }else{
      setNone('none')
      setNone1('flex')
    }
  }

  return (
    <div className="Vocabulary">
      <div className="type_vocabulary">
        <div className="form left" style={{display: none}}>
          <h2 className="title">Words with translation</h2>
          <form>
            <input type="text" placeholder="Word..." />
            <input type="text" placeholder="Translation..." />
            <button>Add to vocaboost</button>
          </form>
          <button className="change_btn left" onClick={(e) => Change(e.currentTarget.className.split(' ')[1])}>Change vocabulary</button>
        </div>
        <div className="form right" style={{display: none1}}>
          <h2 className="title">Words with translation and description</h2>
          <form>
            <input type="text" placeholder="Word..." />
            <textarea placeholder="Description..." />
            <button>Add to vocaboost</button>
          </form>
          <button className="change_btn right" onClick={(e) => Change(e.currentTarget.className.split(' ')[1])}>Change vocabulary</button>
        </div>
      </div>
      <div className="voca">
        <div className="table left" style={{display: none}}>
          <table>
            <thead>
              <tr>
                <th>Word</th>
                <th>Translation</th>
                <th className="none_mobile">Edit</th>
                <th className="none_mobile">Delete</th>
              </tr>
            </thead>
            <tbody>
              {wordT.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.word}</td>
                  <td>
                    <div className="description">{item.translation}</div>
                  </td>
                  <td className="none_mobile">
                    <div className="edit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pen"
                        viewBox="0 0 16 16"
                      >
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                      </svg>
                    </div>
                  </td>
                  <td className="none_mobile">
                    <div className="delete">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fillRule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="table right" style={{display: none1}}>
          <table>
            <thead>
              <tr>
                <th>Word</th>
                <th>Translation</th>
                <th className="none_mobile">Edit</th>
                <th className="none_mobile">Delete</th>
              </tr>
            </thead>
            <tbody>
              {wordD.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.word}</td>
                  <td>
                    <div className="description">{item.translation}</div>
                  </td>
                  <td className="none_mobile">
                    <div className="edit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pen"
                        viewBox="0 0 16 16"
                      >
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                      </svg>
                    </div>
                  </td>
                  <td className="none_mobile">
                    <div className="delete">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fillRule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Vocabulary;
