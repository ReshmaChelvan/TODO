import { React, useEffect, useState } from "react";

const NotCompleted = ({ allTask, DeleteId, updateTaskFunction }) => {
  const [Completed, setCompleted] = useState([]);
  useEffect(() => {
    let FinalData = allTask.filter((Filtering) => {
      if (Filtering.status === "COMPLETED") {
        return Filtering;
      }
    });
    setCompleted(FinalData);
  }, [allTask]);
  return (
    <>
      {Completed.length === 0 ? (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="text-center display-5 fw-bold text-black-50 text-opacity-50 ">
                ☹️ THERE IS NO TASK COMPLETED YET
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
                      {Loop.status}
                    </li>
                    <li className="d-flex gap-2 mt-1">
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

export default NotCompleted;
