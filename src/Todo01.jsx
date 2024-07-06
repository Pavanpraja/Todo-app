import { useEffect, useRef, useState } from "react";
import "./App.css";
import RenderVal from "./components/RenderVal";

const Todo01 = () => {
  const [items, setItems] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [currentInput, setCurrentInput] = useState("");
  const [title, setTile] = useState("Frontend");
  const containerRef = useRef(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [copiedText, setCopiedText] = useState([]);
  const inputRef = useRef(null);
  const dialogInputRef = useRef(null);

  console.log(copiedText);

  const handleButtonClick = () => {
    setInputVisible(true);
  };
  // console.log(copiedText)

  const handleInputChange = (event) => {
    setCurrentInput(event.target.value);
  };

  const handleAddItem = () => {
    if (currentInput.trim()) {
      setItems([...items, currentInput]);
      setCurrentInput("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddItem();
    }
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setInputVisible(false);
    }
  };

  const handleDButtonClick = () => {
    setDialogOpen(true);
  };

  const handleOkClick = () => {
    const dialogInputValue = dialogInputRef.current.value;
    setCopiedText([...copiedText, dialogInputValue]);
    setDialogOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="">
      <div
        ref={containerRef}
        className="border-[black] border-[0.2rem] p-[1rem] bg-[#f1f2f4] w-[28rem] rounded-xl border-0"
        onClick={handleAddItem}
      >
        <div>
          <h1>
            <input
              className="text-[1.5rem] font-semibold p-[0.5rem] bg-transparent"
              type="text"
              value={title}
              onChange={(e) => setTile(e.target.value)}
            />
          </h1>
        </div>
        <RenderVal
          items={items}
          handleButtonClick={handleDButtonClick}
          dialogOpen={dialogOpen}
          currentInput={currentInput}
          dialogInputRef={dialogInputRef}
          handleOkClick={handleOkClick}
        />
        {inputVisible && (
          <>
            <div>
              <input
                type="text"
                value={currentInput}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Enter a title for this card..."
                className="text-[1.5rem] p-[1rem] bg-transparent w-[100%] outline-none rounded-xl bg-white my-[1rem]"
                ref={inputRef}
              />
            </div>
          </>
        )}
        <div className="text-[1.6rem] font-semibold p-[1rem]">
          {inputVisible ? (
            <button
              onClick={handleAddItem}
              className="bg-[#0c66e4] p-[0.5rem] font-semibold text-white rounded-xl"
            >
              Add Item
            </button>
          ) : (
            <button
              onClick={handleButtonClick}
              className="p-[0.5rem] hover:bg-[#694bff6e] text-[#5e4db2] rounded-xl"
            >
              + Add a card
            </button>
          )}
        </div>
      </div>

      <div>
        <div className="bg-[#f1eeeedf] p-[1rem] rounded-xl flex flex-col gap-[1rem] mt-[2rem]">
          <h1 className="text-center text-[2rem] font-semibold">Copied items</h1>
          {copiedText.map((item, index) => (
            <>
              <li key={index} className="list-none text-[1.5rem] font-semibold p-[0.5rem] bg-white rounded-xl">
                {index}.{" "}
                {item}
              </li>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo01;
