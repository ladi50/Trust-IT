import React from "react";

const Desc = ({ label }) => {
  return (
    <tr>
      <td className="header__td">
        <span className="header__td-span">-</span> <span>{label}</span>
      </td>
    </tr>
  );
};

export default Desc;
