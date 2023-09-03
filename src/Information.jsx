import React, { useState } from 'react';

function Information() {
  const [items, setItems] = useState([]); // State to store the list of items
  const [newItem, setNewItem] = useState(''); // State to store the new item being added

  // Function to add a new item to the list
  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  return (
    <div>
      <h1>Item List</h1>

      {/* Input field to add new items */}
      <div>
        <input
          type="text"
          placeholder="Enter a new item"
          value={newItem}
          onChange={handleInputChange}
        />
        <button onClick={addItem}>Add</button>
      </div>

      {/* Display the list of items as a bulleted list */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Information;