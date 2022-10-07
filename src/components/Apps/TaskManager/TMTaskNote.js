import React from "react";

import "./TMTaskNote.css";

export default function TMTaskNote(props) {
  const dt = new Date(props.taskNote.createdDate);
  return (
    <div className="tmtasknote">
      <h3>{`${props.taskNote.owner.firstName} ${props.taskNote.owner.lastName}`}</h3>
      <p>{`${dt.toLocaleDateString()} ${dt.toLocaleTimeString()}`}</p>
      <p>{`${props.taskNote.note}`}</p>
      {props.editable && (
        <button onClick={() => props.editTaskNote(props.taskNote._id)}>
          Edit
        </button>
      )}
    </div>
  );
}
