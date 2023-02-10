import React, { useState, useRef } from "react";
import "./INBOX.css";

export default function INBOX(props) {
  const [newTask, setNewTask] = useState(false);
  const titleRef = useRef("");
  const calendarRef = useRef("");
  const newTaskHandler = () => {
    setNewTask(true);
  };
  const addHandler = (e) => {
    e.preventDefault();
    if (titleRef.current.value === "") {
      window.alert("Please enter a title");
      return;
    }
    let newObj = {
      number: props.list.length + 1,
      title: titleRef.current.value,
      date: new Date(calendarRef.current.value),
    };
    props.append(newObj);
    setNewTask(false);
  };
  const cancelHandler = () => {
    setNewTask(false);
    calendarRef.current.focus();
    calendarRef.current.blur();
    window.location.reload();
  };
  return (
    <div className="inbox">
      <h2 className="inbox__header">INBOX</h2>
      {!newTask && (
        <button className="inbox__button" onClick={newTaskHandler}>
          +AddNew
        </button>
      )}
      {newTask && (
        <form action="" className="inbox__form">
          <input
            type="text"
            name=""
            id=""
            ref={titleRef}
            className="inbox__input"
          />
          <div className="inbox__form-actions">
            <button className="inbox__button" onClick={addHandler}>
              Add Task
            </button>
            <button className="inbox__button" onClick={cancelHandler}>
              Cancel
            </button>
            <input
              type="date"
              ref={calendarRef}
              defaultValue="2023-01-01"
              className="inbox__input"
            />
          </div>
        </form>
      )}
      <div className="inbox__list">
        {props.list.map((list) => {
          return (
            <div key={list.number} className="inbox__list-item">
              <div className="inbox__list-item-content">
                {list.title}({list.date.toLocaleDateString()})
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
