import { useMemo } from "react";
import TaskCard from "./TaskCard";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const TodoList = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const todoTasks = useMemo(() => tasks.filter((t) => !t.done), [tasks]);
  const doneTasks = useMemo(() => tasks.filter((t) => t.done), [tasks]);

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
