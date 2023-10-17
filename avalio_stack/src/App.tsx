import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import TodoList from "./components/TodoList";
import NewTaskModal from "./components/newTaskModal";
import { toggle } from "./redux/modalSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const opened = useSelector((state: RootState) => state.newTaskModal.opened);

  return (
    <div className="w-full h-screen bg-slate-100 flex justify-start pt-20 items-center flex-col">
      <div className="w-full  md:max-w-[80%] lg:max-w-[60%] flex flex-col items-center">
        <h1 className="text-5xl text-gray-300 font-bold mb-10">TODO-LIST</h1>
        <div className="flex w-full justify-between p-5">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="gray"
              className="w-12 h-12 bg-slate-200 p-2 rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <p className="pl-5 font-medium text-slate-400">Kovalsky</p>
          </div>
          <button
            onClick={() => dispatch(toggle(true))}
            className="py-2 px-5 rounded-lg text-white hover:brightness-90 bg-blue-600 font-medium"
          >
            Add Task
          </button>
        </div>
        <div className="w-full flex  justify-center items-center">
          <TodoList />
        </div>
      </div>
      {opened && <NewTaskModal />}
    </div>
  );
}

export default App;
