import React from "react";
interface Props {
  children: string;
}
const Heading = ({ children }: Props) => {
  return (
    <div className="card" id="heading-card">
      <div className="card-body" id="heading-card-body">
        <strong>{children}</strong>
      </div>
    </div>
  );
};

export default Heading;
