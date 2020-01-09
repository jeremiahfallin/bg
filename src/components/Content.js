import React from "react";
import PropTypes from "prop-types";

export const HTMLContent = ({ content, className, id }) => (
  <div
    className={className}
    id={id}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

const Content = ({ content, className, id }) => (
  <div className={className} id={id}>
    {content}
  </div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
