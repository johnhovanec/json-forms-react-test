import "./App.css";
import { schema } from "./birthDefects";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import React, { useState } from "react";
import { JsonForms } from "@jsonforms/react";
import Button from "@mui/material/Button";

// list of renderers declared outside the App component
const renderers = [...materialRenderers];

const { birthDefects } = require("./birthDefects.json");

function App() {
  const initialData = birthDefects;
  const [data, setData] = useState(initialData);

  return (
    <div className="App">
      <h2>JSON Forms React Test</h2>
      <JsonForms
        schema={schema}
        data={data} // To create a new topic set = {null}
        renderers={renderers}
        /* uischema = {uischema} We purposefully omit a ui-schema so JSONForms will dynamically create one */
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
      </div>
    </div>
  );
}

export default App;
