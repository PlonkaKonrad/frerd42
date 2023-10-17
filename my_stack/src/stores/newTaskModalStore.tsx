import { StoreApi, UseBoundStore } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand";

interface NewTaskModalInterface {
  opened: boolean;
  toggle: (value: boolean) => void;
}

const useNewTaskModalStore: UseBoundStore<StoreApi<NewTaskModalInterface>> =
  create(
    persist(
      (set) => ({
        opened: false,
        toggle: (value: boolean) => set({ opened: value }),
      }),
      {
        name: "newTaskModal",
        storage: createJSONStorage(() => localStorage),
      }
    )
  );

export default useNewTaskModalStore;
