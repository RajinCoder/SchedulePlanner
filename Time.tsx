import Button from "./Button";

import React from "react";

const hours: Array<string> = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];
const minutes = [...Array(60).keys()].map((x) => {
  if (x < 10) {
    return "0" + x.toString();
  } else {
    return x.toString();
  }
});
const time: Array<string> = ["AM", "PM"];

const Time = () => {
  return (
    <div>
      <Button color="light" placeholder={hours} menu={hours}></Button>
      <Button color="light" placeholder={minutes} menu={minutes}></Button>
      <Button color="light" placeholder={time} menu={time}></Button>
    </div>
  );
};

export default Time;
