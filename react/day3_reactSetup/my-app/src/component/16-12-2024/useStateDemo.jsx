import { useState } from "react";
const UseStateDemo = () => {
  const [userName, serFullName] = useState("");
  const [color, setColor] = useState("white");

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        width: "100vw",
      }}
    >
      <h1>useState Demo</h1>
      <br />
      <form>
        <label htmlFor={"fullName"}>Full Name:</label>
        <input
          type="text"
          onChange={(e) => serFullName(e.target.value)}
          id={"fullName"}
        />
        <br />
        <br />
        <input type="color" onChange={(e) => setColor(e.target.value)} />
      </form>
      <div>
        <h2>Preview</h2>
        <h3>Full Name: {userName}</h3>
      </div>
    </div>
  );
};
export default UseStateDemo;
