import React from "react";
import PropTypes from "prop-types";
import { ProgramsPageTemplate } from "../../templates/Programs-page";

const ProgramsPagePreview = ({ entry, widgetFor }) => (
  <ProgramsPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

ProgramsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ProgramsPagePreview;
