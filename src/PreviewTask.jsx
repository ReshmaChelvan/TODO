import React from "react";
import "./Style.css";
import Header from "./Header";
import Completed from "./Completed";
import NotCompleted from "./NotCompleted";

const PreviewTask = ({
  allTask,
  DeleteId,
  IsEdit,
  Updatetask,
  seUpdatettask,
  Updatedetails,
  setUpdatedetails,
  errorMessage,
  updatedAllTask,
  updateTaskFunction,
  ExitEdit,
  isCompletedPage,
  setisCompletedPage,
  setCheckBox,
  FunctionCheckBox,
  StatusChange,
  StatusChangeFunction,
  IdOfTheCheckBox,
}) => {
  ///ok
  return (
    <>
      <Header />
      {IsEdit === true ? (
        <div className="container-fluid" id="background-Todo">
          <div className="row" id="row-id">
            <div className="col-sm-12 mt-3">
              <label
                htmlFor="Task"
                className="form-label mt-2 h5"
                id="text-color"
              >
                UPDATETODO:
              </label>
              <input
                type="text"
                value={Updatetask}
                onChange={(todo) => seUpdatettask(todo.target.value)}
                className="form-control"
                placeholder="ENTER TODONAME"
              />
              {errorMessage === "Please Enter The UpdateTask" ? (
                <p className="text-white">⚡{errorMessage}</p>
              ) : (
                <p>👍</p>
              )}
              <label
                htmlFor="description"
                className="form-label mt-2 h5"
                id="text-color"
              >
                UPDATEDESCRIPTION:
              </label>
              <input
                type="text"
                className="form-control"
                value={Updatedetails}
                onChange={(todo) => setUpdatedetails(todo.target.value)}
                placeholder="Enter The Description"
              />
              {errorMessage === "Please Enter The UpdateDescription" ? (
                <p className="text-white">⚡{errorMessage}</p>
              ) : (
                <p>👍</p>
              )}
              <div className="d-flex gap-2">
                <button
                  className="btn btn-dark mt-2 p-2"
                  onClick={updatedAllTask}
                >
                  ✔️UPDATE
                </button>
                <button
                  className="btn btn-dark mt-2 p-2"
                  onClick={() => ExitEdit()}
                >
                  ❌CANCEL
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-fluid" id="background-show">
          <div className="row d-flex justify-content-end">
            <div className="col-sm-4 mt-2">
              <div className=" rounded-3 Bg-filter">
                <ul className="d-flex gap-2 justify-content-center p-2 mt-2">
                  <li
                    className="btn btn-light ms-3"
                    id="Animated-button"
                    onClick={() => setisCompletedPage(true)}
                  >
                    COMPLETED
                  </li>
                  <li
                    className="btn btn-light"
                    id="Animated-button"
                    onClick={() => setisCompletedPage(false)}
                  >
                    NOT COMPLETED
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            {allTask.length === 0 ? (
              <>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <h1 className="text-center display-5 fw-bold text-black-50 text-opacity-50 ">
                        THERE IS NO TASK TO SHOW
                      </h1>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {isCompletedPage !== true ? (
                  <Completed
                    allTask={allTask}
                    updateTaskFunction={updateTaskFunction}
                    DeleteId={DeleteId}
                    setCheckBox={setCheckBox}
                    FunctionCheckBox={FunctionCheckBox}
                    StatusChange={StatusChange}
                    StatusChangeFunction={StatusChangeFunction}
                    IdOfTheCheckBox={IdOfTheCheckBox}
                  />
                ) : (
                  <NotCompleted
                    allTask={allTask}
                    updateTaskFunction={updateTaskFunction}
                    DeleteId={DeleteId}
                  />
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PreviewTask;
