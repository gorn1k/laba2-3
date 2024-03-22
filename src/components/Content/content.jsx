import React, { useState } from 'react';

const Content = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <h2 onClick={toggleExpand}>{title}</h2>
      {expanded && <div>{content}</div>}
    </div>
  );
};

export default Content;