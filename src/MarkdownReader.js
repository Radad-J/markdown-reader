import React, { useState } from 'react';
import { marked } from 'marked';

function MarkdownReader() {
  const [markdown, setMarkdown] = useState('');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const insertMarkdownSyntax = (syntax) => {
    setMarkdown(markdown + syntax);
  };

  const createMarkup = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div className="flex flex-col lg:flex-row p-8 gap-8">
      <div className="w-full lg:w-1/2">
        <div className="flex space-x-2 mb-4">
          <button onClick={() => insertMarkdownSyntax('# ')} className="px-3 py-1 bg-accentBlue text-white rounded">Heading 1</button>
          <button onClick={() => insertMarkdownSyntax('## ')} className="px-3 py-1 bg-accentBlue text-white rounded">Heading 2</button>
          <button onClick={() => insertMarkdownSyntax('**bold**')} className="px-3 py-1 bg-accentBlue text-white rounded">Bold</button>
          <button onClick={() => insertMarkdownSyntax('_italic_')} className="px-3 py-1 bg-accentBlue text-white rounded">Italic</button>
          <button onClick={() => insertMarkdownSyntax('---\n')} className="px-3 py-1 bg-accentBlue text-white rounded">Horizontal Line</button>
        </div>
        <textarea
          value={markdown}
          onChange={handleChange}
          className="w-full h-96 p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accentBlue"
          placeholder="Write your markdown here..."
        />
      </div>
      <div className="w-full h-96 mt-12 lg:w-1/2 bg-white p-4 border border-gray-300 rounded overflow-y-auto">
        <div
          dangerouslySetInnerHTML={createMarkup()}
          className="prose lg:prose-xl max-w-none"
        />
      </div>
    </div>
  );
}

export default MarkdownReader;
