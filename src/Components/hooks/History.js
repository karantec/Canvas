import { useState } from "react";

export const useHistory = (initial = []) => {
  const [history, setHistory] = useState([initial]);
  const [index, setIndex] = useState(0);

  const set = (state) => {
    const updated = history.slice(0, index + 1);
    setHistory([...updated, state]);
    setIndex(updated.length);
  };

  const undo = () => index > 0 && setIndex((i) => i - 1);
  const redo = () => index < history.length - 1 && setIndex((i) => i + 1);

  return {
    state: history[index],
    set,
    undo,
    redo,
  };
};
