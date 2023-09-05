import React from "react";
import { useState } from "react";

interface Props {
  color: string;
  placeholder: string[];
  menu: string[];
}
const Button = ({ color, placeholder, menu }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="btn-group">
      <button
        type="button"
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        className={`btn btn-${color}`}
        data-bs-toggle="dropdown"
        id="time-btn"
      >
        {placeholder[selectedIndex]}
      </button>

      <ul className="dropdown-menu">
        {menu.map((item, index) => (
          <li key={item} onClick={() => setSelectedIndex(index)}>
            <a className="dropdown-item" href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Button;
