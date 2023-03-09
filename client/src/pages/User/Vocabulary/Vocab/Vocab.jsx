import React from 'react';

const Vocab = ({ item, deleteId, update }) => {
  return (
    <>
      <tr>
        <td>{item.word}</td>
        <td>{item.translate}</td>
        <td>{item.description}</td>
        <td className="none_mobile">
          <div className="edit" onClick={() => {update(item._id)}}>
            <i className="fa-solid fa-pencil"></i>
          </div>
        </td>
        <td className="none_mobile">
          <div className="delete" onClick={() => deleteId(item._id)}>
            <i className="fa-solid fa-trash"></i>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Vocab;
