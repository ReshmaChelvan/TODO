import React, { useState } from "react";
import PreviewTask from "./PreviewTask";
import AddTodo from "./AddTodo";
import id from "react-id-generator";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  //State To Add New Task
  const [task, settask] = useState("");
  const [details, setdetails] = useState("");
  //State To Update Task
  const [Updatetask, seUpdatettask] = useState("");
  const [Updatedetails, setUpdatedetails] = useState("");
  //AllTask Array
  const [allTask, setallTask] = useState([]);
  //This One For Storing The Reference Id It Help To Update Task
  const [idStorage, setidStorage] = useState("");
  //This State Manage The Error Message
  const [errorMessage, setErrorMessage] = useState("");
  //This State Manage Is Used To Control Edit Mode In Update Function
  const [IsEdit, setIsEdit] = useState(false);
  //To Activate The Complete Page
  const [isCompletedPage, setisCompletedPage] = useState();
  //For CheckBox to Enter Change Mode
  const [CheckBox, setCheckBox] = useState(false);
  const [IdOfTheCheckBox, setIdOfTheCheckBox] = useState("");
  //For CheckBox To Change The Status
  const [StatusChange, setStatusChange] = useState(false);
  //This Function Is Used To Save A New Task
  const createTodo = (todo) => {
    if (task === "") {
      setErrorMessage("Please Enter The Task");
      setdetails("");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    } else if (details === "") {
      setErrorMessage("Please Enter The Description");
      settask("");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    } else {
      //This One Stop The Page Reload When we Submit The Task
      todo.preventDefault();
      //React-id-generator it's Basically Create a String For Id It Like "id1"
      const RandomString = id();
      const Status = "NOT COMPLETED";
      const CreateObj = {
        TaskName: task,
        TaskDetails: details,
        id: RandomString,
        status: Status,
      };
      //Taking A Copy And Adding The New Obj With The Help Of Spread Operator
      setallTask([...allTask, CreateObj]);
      settask("");
      setdetails("");
    }
  };

  //This Function Used To Delete Task From AllTask State
  const DeleteId = (id) => {
    const DeletedTask = allTask.filter((FindId) => {
      if (FindId.id !== id) {
        return FindId;
      }
    });
    setallTask(DeletedTask);
  };

  //This Function is Used To Update A AllTask State
  const updateTaskFunction = (id) => {
    //Storing The Id For Reference
    setidStorage(id);

    //Turning On The Update Function
    setIsEdit(true);
  };

  const updatedAllTask = () => {
    if (Updatetask === "") {
      setErrorMessage("Please Enter The UpdateTask");
      setUpdatedetails("");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    } else if (Updatedetails === "") {
      setErrorMessage("Please Enter The UpdateDescription");
      seUpdatettask("");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    } else {
      const FinalOutput = allTask.map((FindSingleId) => {
        if (FindSingleId.id === idStorage) {
          let Update = {
            ...FindSingleId,
            TaskName: Updatetask,
            TaskDetails: Updatedetails,
          };
          return Update;
        } else {
          return FindSingleId;
        }
      });
      setallTask(FinalOutput);
      setUpdatedetails("");
      seUpdatettask("");
      setIsEdit(false);
    }
  };

  //This Function To Cancel The Edit Mode
  const ExitEdit = () => {
    setIsEdit(false);
  };

  const FunctionCheckBox = (Value, IdOfTheTick) => {
    if (Value === true) {
      setIdOfTheCheckBox(IdOfTheTick);
      setStatusChange(Value);
    } else if (Value === false) {
      setIdOfTheCheckBox(IdOfTheTick);
      setStatusChange(Value);
    }
  };
  const StatusChangeFunction = (GetID) => {
    let FinalResult = allTask.map((el) => {
      if (el.id === GetID) {
        let NewData = { ...el, status: "COMPLETED" };
        return NewData;
      } else {
        return el;
      }
    });
    setallTask(FinalResult);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AddTodo
              errorMessage={errorMessage}
              createTodo={createTodo}
              task={task}
              settask={settask}
              setdetails={setdetails}
              details={details}
            />
          }
        />
        <Route
          path="/AddTodo"
          element={
            <PreviewTask
              Updatetask={Updatetask}
              updateTaskFunction={updateTaskFunction}
              seUpdatettask={seUpdatettask}
              allTask={allTask}
              DeleteId={DeleteId}
              IsEdit={IsEdit}
              Updatedetails={Updatedetails}
              setUpdatedetails={setUpdatedetails}
              errorMessage={errorMessage}
              updatedAllTask={updatedAllTask}
              ExitEdit={ExitEdit}
              isCompletedPage={isCompletedPage}
              setisCompletedPage={setisCompletedPage}
              StatusChange={StatusChange}
              setStatusChange={setStatusChange}
              setCheckBox={setCheckBox}
              FunctionCheckBox={FunctionCheckBox}
              StatusChangeFunction={StatusChangeFunction}
              IdOfTheCheckBox={IdOfTheCheckBox}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
