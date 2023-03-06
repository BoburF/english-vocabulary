import React from 'react';

const Vocab = ({ item, id }) => {
  return (
    <tr>
      <td>{item.word}</td>
      <td>{item.translation}</td>
      <td>{item.description}</td>
      <td className="none_mobile">
        <div className="edit">
          <i className="fa-solid fa-pencil"></i>
        </div>
      </td>
      <td className="none_mobile">
        <div className="delete" onClick={() => id(item.id)}>
          <i className="fa-solid fa-trash"></i>
        </div>
      </td>
    </tr>
  );
};

export default Vocab;
