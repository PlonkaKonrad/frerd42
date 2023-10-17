import { useMemo } from "react";
import useTasksStore from "../stores/tasksStore";
import TaskCard from "./TaskCard";

const TodoList = () => {
  const { getTodo, getDone, tasks } = useTasksStore();
  const todoTasks = useMemo(() => getTodo(), [tasks]);
  const doneTasks = useMemo(() => getDone(), [tasks]);

  return (
    <div className="w-full justify-between flex flex-col md:flex-row">
      <div className="w-full md:w-[50%] shadow-lg bg-white rounded-2xl h-auto flex flex-col p-5 ">
        <h2 className="text-xl font-semibold text-slate-500">Todo</h2>
        <div className="h-[400px] overflow-auto">
          {todoTasks.length > 0 ? (
            <>
              {todoTasks.map((task) => {
                return <TaskCard key={task.id} task={task} />;
              })}
            </>
          ) : (
            <p className="w-full p-20 flex justify-center text-lg text-slate-400">
              Everything's done 🥳
            </p>
          )}
        </div>
      </div>
      <div className="w-full md:w-[50%]  md:pl-5">
        <div className="w-full min-h-[100px] bg-slate-200 -z-10 rounded-xl opacity-70 p-5">
          <h2 className="text-xl font-semibold text-slate-500">Done</h2>
          <div className="h-[400px]  overflow-auto">
            {doneTasks.length > 0 ? (
              <>
                {doneTasks.map((task) => {
                  return <TaskCard key={task.id} task={task} />;
                })}
              </>
            ) : (
              <p className="w-full p-20 flex justify-center text-lg text-slate-600">
                Nothing's here 🫥
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
