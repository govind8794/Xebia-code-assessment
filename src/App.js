import "./App.css";
import { Topic } from "../src/Components/Topic";
import { useTopic } from "../src/Hooks/useTopic";

function App() {
  const { error, data, loading } = useTopic("react");
  return (
    <div className="App">
      {error && <h1> OOp's some thing went worng</h1>}
      {loading && <h1> loading....</h1>}
      {data && <Topic data={data} />}
    </div>
  );
}

export default App;
