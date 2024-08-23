import "./App.css";
import { schema, uischema } from "./birthDefects";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import React, { useState } from "react";
import { JsonForms } from "@jsonforms/react";
import MyGroupRenderer from "./MyGroup";
import { myGroupTester } from "./myGroupTester";
import { init } from "@jsonforms/core";

// list of renderers declared outside the App component
const renderers = [
  ...materialRenderers,
  //register custom renderers
  { tester: myGroupTester, renderer: MyGroupRenderer },
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
        uischema={uischema}
        data={data}
        renderers={renderers}
        cells={materialCells}
        onChange={({ data, errors }) => setData(data)}
      ></JsonForms>
      <div>
        $$:{" "}
        {data.themes.map((x) => {
          console.log(x.themeName);
        })}
      </div>
    </div>
  );
}

export default App;
