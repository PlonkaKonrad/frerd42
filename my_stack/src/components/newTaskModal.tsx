import { useState } from "react";
import useNewTaskModalStore from "../stores/newTaskModalStore";
import useTasksStore from "../stores/tasksStore";
import { v4 as uuid } from "uuid";

const NewTaskModal = () => {
  const { toggle } = useNewTaskModalStore();
  const { addNew } = useTasksStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.length < 5) {
      alert("Title need to be longer");
    }
    addNew({
      id: uuid(),
      title,
      description,
      createdAt: new Date(),
      done: false,
    });
    toggle(false);
  };

  return (
    <div className="fixed w-full h-full left-0 top-0 flex items-center justify-center">
      <div
        onClick={() => toggle(false)}
        className="w-full h-full fixed top-0 "
      ></div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="z-10 w-full md:w-[500px] h-[300px] rounded-2xl flex flex-col bg-white shadow-2xl p-5"
      >
        <h3 className="text-slate-400 font-semibold mb-2">Add new task</h3>
        <label htmlFor="task-title" className="text-sm">
          Task title
        </label>
        <input
          id="task-title"
          className="bg-slate-100 p-2 w-full outline-none mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="task-description" className="text-sm">
          Description
        </label>
        <textarea
          id="task-description"
          className="bg-slate-100 p-2 w-full outline-none resize-none h-24"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex justify-between py-2">
          <button
            onClick={() => toggle(false)}
            className="p-2 px-4 bg-slate-200 rounded-lg hover:brightness-90"
          >
            Cancel
          </button>
          <button className="p-2 px-4 bg-blue-500 text-white rounded-lg hover:brightness-90">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTaskModal;
