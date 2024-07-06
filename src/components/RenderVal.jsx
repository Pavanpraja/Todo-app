/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";
import Opencard from "./pages/Opencard";

// eslint-disable-next-line react/prop-types
const RenderVal = ({items, handleButtonClick, dialogOpen, currentInput, dialogInputRef, handleOkClick}) => {
    const [showMenu, setShowMenu] = useState(false);
    const [showCard, setShowCard] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef(null);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setMenuPosition({ x: event.pageX, y: event.pageY });
    setShowMenu(true);
  };

  const handleClick = () => {
    setShowMenu(false);
  };

  const handleCard = () =>{
    setShowCard((prev)=>!prev)
  }

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
  return (
    <>
      <ul className="flex flex-col gap-[1rem]">
          {items.map((item, index) => (
            <>
            <li className="text-[1.5rem] p-[1rem] bg-[white] p-[0.5rem] rounded-xl" key={index} onContextMenu={handleContextMenu}>
              {item}
            </li>
            </>
          ))}
        </ul>
        {showMenu && (
        <ul
          ref={menuRef}
          className="context-menu flex flex-col gap-[0.5rem] text-[1.6rem] font-semibold text-[gray]"
          style={{ top: `${menuPosition.y}px`, left: `${menuPosition.x}px` }}
        >
          <li className="p-[0.5rem] hover:bg-[#eeeeee] cursor-pointer rounded-xl bg-white flex items-center justify-center gap-[0.5rem]" onClick={handleCard}><img className="w-[2rem]" src="https://img.icons8.com/windows/32/card-wallet.png" alt="card-wallet"/> Open card</li>
          <li className="p-[0.5rem] hover:bg-[#eeeeee] cursor-pointer rounded-xl bg-white">Edit labels</li>
          <li className="p-[0.5rem] hover:bg-[#eeeeee] cursor-pointer rounded-xl bg-white">Change members</li>
          <li className="p-[0.5rem] hover:bg-[#eeeeee] cursor-pointer rounded-xl bg-white">Change cover</li>
          <li className="p-[0.5rem] hover:bg-[#eeeeee] cursor-pointer rounded-xl bg-white">Edit dates</li>
          <li className="p-[0.5rem] hover:bg-[#eeeeee] cursor-pointer rounded-xl bg-white">Move</li>
          <li className="p-[0.5rem] hover:bg-[#eeeeee] cursor-pointer rounded-xl bg-white" onClick={handleButtonClick}>Copy</li>
          <li className="p-[0.5rem] hover:bg-[#eeeeee] cursor-pointer rounded-xl bg-white">Archive</li>
        </ul>
      )}
      {dialogOpen && (
        <div className="dialog absolute left-[20%] flex-col flex p-[1rem] bg-[#f1f2f4] gap-[1rem] rounded-xl">
        <h1 className="text-[2rem] text-center font-semibold">Copy card</h1>
        {
          items.map((item)=>(
            <>
          <input
          className="text-[1.5rem] p-[1rem] bg-transparent w-[100%] outline-none rounded-xl bg-white my-[1rem]"
            type="text"
            value={item}
            readOnly
            ref={dialogInputRef}
            style={{ width: '200px' }}
          />
            </>
          ))
        }
          <button onClick={handleOkClick} className="text-[1.5rem] font-semibold bg-slate-200 hover:bg-slate-300 p-[0.5rem] rounded-xl">OK</button>
        </div>
      )}
      {
        showCard && <Opencard handleCard={handleCard} items={items}/>
      }      
    </>
  )
}

export default RenderVal
