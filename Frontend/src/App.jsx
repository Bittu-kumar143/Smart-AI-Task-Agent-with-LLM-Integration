import "./App.css";
import { useState, useEffect } from "react";
import InputBox from "./components/InputBox";
import OutputBox from "./components/OutputBox";
import History from "./components/History";
import { sendTask, getHistory } from "./services/Api";

function App() {
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const handleSubmit = async (input) => {
    const res = await sendTask(input);
    setResult(res);
    loadHistory();
  };

  const loadHistory = async () => {
    const data = await getHistory();
    setHistory(data);
  };

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <div className="container">
      <h2>AI Task Agent 🤖</h2>

      <div className="card">
        <InputBox onSubmit={handleSubmit} />
      </div>

      <div className="card">
        <OutputBox data={result} />
      </div>

      <div className="card">
        <History items={history} />
      </div>
    </div>
  );
}

export default App;