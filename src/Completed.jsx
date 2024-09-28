import { React, useEffect, useState } from "react";
import "./Style.css";

const Completed = ({
  IdOfTheCheckBox,
  allTask,
  DeleteId,
  updateTaskFunction,
  StatusChange,
  FunctionCheckBox,
  StatusChangeFunction,
}) => {
  const [Completed, setCompleted] = useState([]);
  useEffect(() => {
    let FinalData = allTask.filter((Filtering) => {
      if (Filtering.status === "NOT COMPLETED") {
        return Filtering;
      }
    });
    setCompleted(FinalData);
  }, [Completed]);
  return (
    <>
      {Completed.length === 0 ? (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="text-center display-5 fw-bold text-black-50 text-opacity-50 ">
                😊HEY YOU COMPLETED ALL TASK HERE
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            {Completed.map((Loop) => (
              <div className="col-sm-4 p-4">
                <div className="card p-4" id="card-color">
                  <ul className="remove-list" key={Loop.id}>
                    <li>
                      <span className="text-danger">TASKNAME: </span>
                      {Loop.TaskName}
                    </li>
                    <li>
                      <span className="text-danger">DETAILS: </span>
                      {Loop.TaskDetails}
                    </li>
                    <li>
                      <span className="text-warning">STATUS: </span>
                      {Loop.status}{" "}
                      <input
                        type="checkbox"
                        className="form-check-input ms-1"
                        onChange={(e) =>
                          FunctionCheckBox(e.target.checked, Loop.id)
                        }
                      />
                    </li>
                    <li className="d-flex gap-2 mt-1 ">
                      {StatusChange !== false && Loop.id === IdOfTheCheckBox ? (
                        <button
                          className="button btn"
                          id="Button-Change"
                          onClick={() => {
                            StatusChangeFunction(Loop.id);
                          }}
                        >
                          DONE
                        </button>
                      ) : (
                        <button
                          className="button btn"
                          onClick={() => updateTaskFunction(Loop.id)}
                        >
                          EDIT
                        </button>
                      )}
                      <button
                        className="btn button-two"
                        onClick={() => DeleteId(Loop.id)}
                      >
                        DELETE
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Completed;
