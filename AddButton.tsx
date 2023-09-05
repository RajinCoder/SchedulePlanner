import React from "react";
import plusSign from "/Users/petermoise/Desktop/REACT-PROJECTS/SchedulePlanner/src/assets/plusSign.png";

interface Props {
  color: string;
  onClick: () => void;
}
const AddButton = ({ color, onClick }: Props) => {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        id="addBtn"
        className={`btn btn-${color}`}
      >
        <img src={plusSign} alt="plusSign" id="plusSign" />
      </button>
    </>
  );
};

export default AddButton;
