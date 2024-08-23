import { MaterialLayoutRenderer } from "@jsonforms/material-renderers";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Hidden,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { withJsonFormsLayoutProps } from "@jsonforms/react";

const MyGroupRenderer = (props) => {
  const { uischema, schema, path, visible, renderers } = props;

  const layoutProps = {
    elements: uischema.elements,
    schema: schema,
    path: path,
    direction: "column",
    visible: visible,
    uischema: uischema,
    renderers: renderers,
  };
  return (
    <Hidden xsUp={!visible}>
      <Accordion>
        <p>JH Test</p>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{uischema.label}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MaterialLayoutRenderer {...layoutProps} />
        </AccordionDetails>
      </Accordion>
    </Hidden>
  );
};

export default withJsonFormsLayoutProps(MyGroupRenderer);
