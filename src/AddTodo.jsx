import React from "react";
import "./Style.css";
import Header from "./Header";
import { Link } from "react-router-dom";

const AddTodo = ({
  task,
  settask,
  details,
  setdetails,
  createTodo,
  errorMessage,
}) => {
  return (
    <>
      <Header />
      <div className="container-fluid" id="background-Todo">
        <div className="row" id="row-id">
          <div className="col-sm-12 mt-3">
            <label
              htmlFor="Task"
              className="form-label mt-2 h5"
              id="text-color"
            >
              TODONAME:
            </label>
            <input
              type="text"
              value={task}
              onChange={(todo) => settask(todo.target.value)}
              placeholder="ENTER TODONAME"
              className="form-control"
            />
            {errorMessage === "Please Enter The Task" ? (
              <p className="text-white">⚡{errorMessage}</p>
            ) : (
              <p>👍</p>
            )}
            <label
              htmlFor="description"
              className="form-label mt-2 h5"
              id="text-color"
            >
              DESCRIPTION:
            </label>
            <input
              type="text"
              className="form-control"
              value={details}
              onChange={(todo) => setdetails(todo.target.value)}
              placeholder="Enter The Description"
            />
            {errorMessage === "Please Enter The Description" ? (
              <p className="text-white">⚡{errorMessage}</p>
            ) : (
              <p>👍</p>
            )}
            <div className="d-flex gap-2">
              <button className="btn btn-dark p-2" onClick={createTodo}>
                🪄ADD
              </button>
              <Link to="/AddTodo">
                <button className="btn btn-dark p-2" onClick={createTodo}>
                  SHOWTODO
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
