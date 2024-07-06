import { useState, useRef, useEffect } from 'react';
import './App.css';

function Demo() {
  const [items, setItems] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [currentInput, setCurrentInput] = useState('');
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogInput, setDialogInput] = useState('');
  const containerRef = useRef(null);

  const handleButtonClick = () => {
    setInputVisible(true);
  };

  const handleInputChange = (event) => {
    setCurrentInput(event.target.value);
  };

  const handleAddItem = () => {
    if (currentInput.trim()) {
      setItems([...items, currentInput]);
      setCurrentInput('');
      setInputVisible(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddItem();
    }
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setInputVisible(false);
      setDialogVisible(false);
    }
  };

  const handleCopyClick = (item) => {
    setDialogInput(item);
    setDialogVisible(true);
  };

  const handleDialogInputChange = (event) => {
    setDialogInput(event.target.value);
  };

  const handleDialogOk = () => {
    setCurrentInput(dialogInput);
    setDialogVisible(false);
    setInputVisible(true);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <div ref={containerRef} className="todo-container">
          <button onClick={handleButtonClick}>Add Item</button>
          {inputVisible && (
            <div>
              <input
                type="text"
                value={currentInput}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
              <button onClick={handleAddItem}>Add</button>
            </div>
          )}
        </div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleCopyClick(item)}>Copy</button>
            </li>
          ))}
        </ul>
        {dialogVisible && (
          <div className="dialog">
            <div className="dialog-content">
              <input
                type="text"
                value={dialogInput}
                onChange={handleDialogInputChange}
              />
              <button onClick={handleDialogOk}>OK</button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Demo;
