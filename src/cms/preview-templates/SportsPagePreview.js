import React from "react";
import PropTypes from "prop-types";
import { SportsPageTemplate } from "../../templates/sports-page";

const SportsPagePreview = ({ entry, widgetFor }) => (
  <SportsPageTemplate
    image={entry.getIn(["data", "image"])}
    content={widgetFor("body")}
    description={entry.getIn(["data", "description"])}
    tags={entry.getIn(["data", "tags"])}
    title={entry.getIn(["data", "title"])}
  />
);

SportsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default SportsPagePreview;
