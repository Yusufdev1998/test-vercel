import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface IAppState {
  bears: number;
  increase: (by: number) => void;
}

export const useAppStore = create<IAppState>()(
  devtools(
    immer(set => ({
      bears: 0,
      increase: by =>
        set(state => {
          state.bears += by;
        }),
    }))
  )
);
