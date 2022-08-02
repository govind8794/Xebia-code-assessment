import "./App.css";
import { Topic } from "../src/Components/Topic";
import { Loader } from "./Components/Loader";
import { useTopic } from "../src/Hooks/useTopic";
import { useState } from "react";

function App() {
  const [topic , setTopic] = useState('react')
  const { error, data, loading } = useTopic(topic);
  return (
    <div className="App">
      {error && <h1> OOp's some thing went worng</h1>}
      {loading && <Loader />}
      {data && <Topic data={data}  setTopic={setTopic} />}
    </div>
  );
}

export default App;
