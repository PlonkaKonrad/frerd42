import { FC, useState } from "react";
import useTasksStore, { Task } from "../stores/tasksStore";

interface TaskCardProps {
  task: Task;
}

const TaskCard: FC<TaskCardProps> = ({ task }) => {
  const { toggleDone, removeTask } = useTasksStore();
  const [blockButton, setBlockButton] = useState(false);

  const handleToggleDone = () => {
    setBlockButton(true);
    if (!task.done) {
      setTimeout(() => {
        toggleDone(task.id);
        setBlockButton(false);
      }, 500);
    } else {
      toggleDone(task.id);
      setBlockButton(false);
    }
  };

  return (
    <div className="w-full min-h-[100px] shadow-lg rounded-xl bg-slate-50 my-2 p-5">
      <div className="flex items-center">
        {!task.done ? (
          <div className="mark-done-checkbox">
            <input
              disabled={blockButton}
              onChange={handleToggleDone}
              type="checkbox"
              id={task.id}
              name="cb"
            />
            <label htmlFor={task.id} />
          </div>
        ) : (
          <button
            onClick={handleToggleDone}
            className="p-3 text-red-300 hover:text-red-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={4}
              stroke="currentColor"
              className="w-6 h-6 bg-blue"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
        <p className={`font-medium ${task.done && "line-through"}`}>
          {task.title}
        </p>
      </div>
      <p className="text-sm text-slate-400">
        {new Date(task.createdAt).toLocaleString()}
      </p>
      {task.description && (
        <p className={`text-sm ${task.done && "line-through"}`}>
          {task.description}
        </p>
      )}
      <button
        onClick={() => removeTask(task.id)}
        className="text-sm text-red-500 hover:text-red-800 w-full text-end"
      >
        Remove task
      </button>
    </div>
  );
};

export default TaskCard;
