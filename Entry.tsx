import React from "react";
import Time from "./Time";
import Task from "./Task";
import AddButton from "./AddButton";

interface Props {
  onClick: () => void;
}

const Entry = ({ onClick }: Props) => {
  return (
    <div className="entry">
      <Time />
      <Task />
      <AddButton onClick={onClick} color="light"></AddButton>
    </div>
  );
};

export default Entry;
