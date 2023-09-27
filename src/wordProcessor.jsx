import React, { useState, useRef } from 'react';

function WordProcessor() {
  const [content, setContent] = useState('');
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const textAreaRef = useRef(null);

  const applyFormatting = (formatting) => {
    const textarea = textAreaRef.current;
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    const text = textarea.value;

    const formattedText = text.substring(0, startPos) + formatting + text.substring(startPos, endPos) + text.substring(endPos);

    setContent(formattedText);
    textarea.focus();
    textarea.setSelectionRange(startPos, endPos + formatting.length);
  };

  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setUndoStack([...undoStack, content]);
    setRedoStack([]); // Clear redo stack when content changes
    setContent(newContent);
  };

  const handleBold = () => {
    applyFormatting('**Bold Text**');
  };

  const handleItalic = () => {
    applyFormatting('*Italic Text*');
  };

  const handleUnderline = () => {
    applyFormatting('__Underlined Text__');
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
        <button onClick={handleBold}>Bold</button>
        <button onClick={handleItalic}>Italic</button>
        <button onClick={handleUnderline}>Underline</button>
      </div>
      <div>
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleRedo}>Redo</button>
      </div>
    </div>
  );
}

export default WordProcessor;