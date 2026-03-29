import { useState } from "react";

export default function InputBox({ onSubmit }) {
  const [text, setText] = useState("");

  return (
    <div>
      <h3>Enter Task</h3>

      <textarea
        rows="4"
        placeholder="Type something like: Summarize this..."
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={() => onSubmit(text)}>Submit 🚀</button>
    </div>
  );
}