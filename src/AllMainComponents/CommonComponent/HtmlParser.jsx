import React from 'react';
import DOMPurify from 'dompurify';

function HtmlParser({ htmlString }) {
  const sanitizedHtml = DOMPurify.sanitize(htmlString);

  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
  );
}

export default HtmlParser;