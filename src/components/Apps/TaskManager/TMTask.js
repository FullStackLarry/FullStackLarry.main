import React from "react";

import "./TMTask.css";

export default function TMTask(props) {
  return (
    <div
      className="tmtask"
      data-selected={props.selected}
      onClick={() => props.clickTask(props.task._id)}
    >
      <h3>{`${props.task.name}`}</h3>
      <p>{`${props.task.description}`}</p>
      <div className="tmtask-status">
        <div className="tmtask-label">Status:</div>
        <div className="tmtask-info">{`${props.task.status}`}</div>
      </div>
      <div className="tmtask-status">
        <div className="tmtask-label">Assigned By:</div>
        <div className="tmtask-info">{`${props.task.ownerName}`}</div>
      </div>
      <div className="tmtask-dates">
        <div className="tmtask-label">Assigned:</div>
        <div className="tmtask-info">
          {`${
            props.task.assignedDate
              ? new Date(props.task.assignedDate).toLocaleDateString()
              : ""
          }`}
        </div>
        <div className="tmtask-label">Started:</div>
        <div className="tmtask-info">
          {`${
            props.task.startedDate
              ? new Date(props.task.startedDate).toLocaleDateString()
              : ""
          }`}
        </div>
        <div className="tmtask-label">Completed:</div>
        <div className="tmtask-info">
          {`${
            props.task.completedDate
              ? new Date(props.task.completedDate).toLocaleDateString()
              : ""
          }`}
        </div>
      </div>
      {props.editable && (
        <button onClick={() => props.editTask(props.task._id)}>Edit</button>
      )}
    </div>
  );
}
