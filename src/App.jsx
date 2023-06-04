import { useState } from "react";

export default function App() {
  const [color, setColor] = useState();
  const [time, setTime] = useState();
  const handleColor = (e) => {
    const { value } = e.target;
    setColor(value);
  };
  const handleTime = (e) => {
    const { value } = e.target;
    setTime(value);
  };
  return (
    <div className="h-screen bg-slate-400 flex justify-center items-center flex-col gap-7">
      <h1
        style={{ color: `${color}` }}
        className="text-3xl font-bold underline text-center"
      >
        Hello world!
      </h1>
      <h1 className="text-3xl font-bold underline text-center">{time}</h1>
      <form action="" className="flex flex-col gap-9 justify-center items-center">
        <input type="color" name="" id="" onChange={handleColor} />
        <input type="datetime-local" name="" id="" onChange={handleTime} />
        <input type="button" value="" className="btn" />
      </form>
      <button className="btn">save</button>
    </div>
  );
}
