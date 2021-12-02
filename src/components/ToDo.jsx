import { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { FiEdit } from "react-icons/fi";

import "./ToDo.css";

export default function ToDo({ todo }) {
  const [scratch, setScratch] = useState(false);
  return (
    <div
      className={`to-do ${scratch ? "scratch" : ""}`}
      onClick={() => setScratch(!scratch)}
    >
      <div className="description">This is the first to do list</div>
      <div className="buttons">
        <TiDeleteOutline className="delete-button"/>
        <FiEdit className="edit-button"/>
      </div>
    </div>
  );
}
