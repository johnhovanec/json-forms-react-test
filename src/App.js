import "./App.css";
import { schema } from "./birthDefects";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import React, { useState } from "react";
import { JsonForms } from "@jsonforms/react";
//import MyGroupRenderer from "./MyGroup";
//import { myGroupTester } from "./myGroupTester";
import { init } from "@jsonforms/core";
import Button from "@mui/material/Button";

// list of renderers declared outside the App component
const renderers = [
  ...materialRenderers,
  //register custom renderers
  //{ tester: myGroupTester, renderer: MyGroupRenderer },
];

const { birthDefects } = require("./birthDefects.json");

function App() {
  const initialData = birthDefects;
  const [data, setData] = useState(initialData);

  return (
    <div className="App">
      <h2>JSON Forms React Test</h2>
      <JsonForms
        schema={schema}
        data={data}
        renderers={renderers}
        /* We purposefully omit a ui-schema so JSONForms will dynamically create one */
        cells={materialCells}
        onChange={({ data, errors }) => setData(data)}
      ></JsonForms>
      <div>
        <Button
          variant="contained"
          onClick={() => {
            console.log("clicked: form data", data);
          }}
        >
          Submit
        </Button>
        {/* {data.themes.map((x) => {
          console.log(x.themeName);
        })} */}
      </div>
    </div>
  );
}

export default App;
