import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  const [fields, setFields] = useState([
    { value: "", option: "", term: "1" },
    { value: "", option: "", term: "1" },
  ]);
  const handleChange = (event, idx) => {
    let field = fields;
    console.log("handleChange idx", idx);
    console.log("handleChange event", event);
    console.log("field", field);
    field[idx].value = event.target.value;
    setFields([...field]);
  };
  const handleChangeSelect = (event, idx) => {
    let field = fields;
    const newFeed = { value: "", option: "", term: "1" };
    let term = event.target.value;
    if (term !== "REM") {
      //cria um novo campo se for diferente de REM
      field[idx].term = event.target.value;
      setFields([...field, newFeed]);
    } else {
      //remove o campo se o valor for REM
      field.splice(idx, 1);
      setFields([...field]);
    }
  };
  return (
    <div className="App">
      Batold teste
      {fields.map((field, idx) => (
        <SearchBar
          value={field.value}
          idx={idx}
          onChange={(e) => handleChange(e, idx)}
          onChangeSelect={(e) => handleChangeSelect(e, idx)}
        ></SearchBar>
      ))}
    </div>
  );
}

export default App;
