import { StoreApi, UseBoundStore } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand";

export interface Task {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  done: boolean;
}

interface TaskStoreInterface {
  tasks: Task[];
  addNew: (task: Task) => void;
  getTodo: () => Task[];
  getDone: () => Task[];
  toggleDone: (id: string) => void;
  removeTask: (id: string) => void;
}

const useTasksStore: UseBoundStore<StoreApi<TaskStoreInterface>> = create(
  persist(
    (set, get) => ({
      tasks: [
        {
          id: "1",
          title: "Hire Konrad Płonka",
          description: "",
          createdAt: new Date(),
          done: false,
        },
      ],
      addNew: (task: Task) =>
        set((state) => ({
          tasks: [...state.tasks, task],
        })),
      getTodo: () => get().tasks.filter((v) => !v.done),
      getDone: () => get().tasks.filter((v) => v.done),
      toggleDone: (id) => {
        set((state) => {
          const updatedTasks = [...state.tasks];
          const taskIndex = updatedTasks.findIndex((task) => task.id === id);
          if (taskIndex !== -1) {
            updatedTasks[taskIndex].done = !updatedTasks[taskIndex].done;
          }
          return {
            tasks: updatedTasks,
          };
        });
      },
      removeTask: (id) => {
        set((state) => {
          return {
            tasks: [...state.tasks.filter((t) => t.id !== id)],
          };
        });
      },
    }),
    {
      name: "tasks",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useTasksStore;
