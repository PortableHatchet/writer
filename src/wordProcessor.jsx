import React, { useState, useRef } from 'react';

function WordProcessor() {
  const [content, setContent] = useState('');
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [customFilename, setCustomFilename] = useState('document.txt'); // Default filename

  const textAreaRef = useRef(null);

  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setUndoStack([...undoStack, content]);
    setRedoStack([]); // Clear redo stack when content changes
    setContent(newContent);
  };

  const handleUndo = () => {
    if (undoStack.length > 0) {
      const newContent = undoStack.pop();
      setRedoStack([...redoStack, content]);
      setContent(newContent);
    }
  };

  const handleRedo = () => {
    if (redoStack.length > 0) {
      const newContent = redoStack.pop();
      setUndoStack([...undoStack, content]);
      setContent(newContent);
    }
  };
  
  const extractPlainTextFromRTF = (rtfContent) => {
    // Use a regular expression to remove RTF formatting
    const plainText = rtfContent.replace(/\\[^{}]+{[^{}]*}/g, '');
    return plainText;
  };

  const handleCustomFilenameChange = (e) => {
    setCustomFilename(e.target.value);
  };

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const fileContent = e.target.result;
        const plainTextContent = extractPlainTextFromRTF(fileContent);
        // Set the content of the textarea to the extracted plain text
        setContent(plainTextContent);
      };
      reader.readAsText(selectedFile);
    }
  };
  const handleDownload = () => {
    const blob = new Blob([content], { type: 'text/plain' });

    const url = URL.createObjectURL(blob);

    const anchor = document.createElement('a');
    anchor.href = url;

    anchor.download = customFilename;

    anchor.click();

    URL.revokeObjectURL(url);
  };
  

  return (
    <div>
      <h1>Word Processor</h1>
      <textarea
        ref={textAreaRef}
        value={content}
        onChange={handleContentChange}
        placeholder="Start typing..."
        rows={10}
        cols={50}
      />
      {/* You can add more formatting and editing features here */}
      <div>
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleRedo}>Redo</button>
      </div>
      <div>
        <input type="file" onChange={handleFileUpload} />
        <div>
        <input
          type="text"
          value={customFilename}
          onChange={handleCustomFilenameChange}
          placeholder="Enter custom filename"
        />
        <button onClick={handleDownload}>Download</button>
      </div>
      </div>
    </div>
  );
}

export default WordProcessor;