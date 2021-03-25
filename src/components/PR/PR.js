import React from "react";
import Desc from "../Desc/Desc";

import "./PR.css";

const PR = ({ item }) => {
  const { number, title, body, user, state, labels, created_at } = item;

  return (
    <tr className="pr">
      <td>{number}</td>
      <td>{title}</td>
      <td>{body.substr(0, 300)}...</td>
      <td>{user.login}</td>
      <td>{user.avatar_url}</td>
      <td>{state}</td>
      <td>
        <table>
          <tbody>
            {labels?.length > 0 &&
              labels.map((label) => (
                <Desc key={label.id} label={label.description} />
              ))}
          </tbody>
        </table>
      </td>
      <td>{new Date(created_at).toLocaleDateString()}</td>
    </tr>
  );
};

export default PR;
