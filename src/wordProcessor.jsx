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

  const handleInput = (e) => {
    const { value, selectionStart, selectionEnd } = e.target;
  
    if (e.key === '"') {
      e.preventDefault();
  
      // Insert both opening and closing double-quotes
      const newText = value.slice(0, selectionStart) + '""' + value.slice(selectionEnd);
  
      // Update the textarea content
      setContent(newText);
  
      // Set the cursor position between the double quotes
      const newPosition = selectionStart + 1;
  
      // Use setTimeout to ensure cursor positioning after the content update
      setTimeout(() => {
        textAreaRef.current.selectionStart = newPosition;
        textAreaRef.current.selectionEnd = newPosition;
      });
    }
    else if (e.key === 'Enter') {
      e.preventDefault();
  
      // Insert a tab character (or any desired indentation) for a new paragraph
      const newText =
        value.slice(0, selectionStart) + '\n\t' + value.slice(selectionEnd);
  
      // Update the textarea content
      setContent(newText);
  
      // Set the cursor position after the inserted tab character
      const newPosition = selectionStart + 2; // Adjust for the added tab
      textAreaRef.current.selectionStart = newPosition;
      textAreaRef.current.selectionEnd = newPosition;
    }
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
        onKeyDown={handleInput} // Listen to keydown event for input
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