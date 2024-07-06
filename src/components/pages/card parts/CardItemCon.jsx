import LeftCardItems from "./LeftCardItems"
import RightCardItems from "./RightCardItems"

// eslint-disable-next-line react/prop-types
const CardItemCon = ({handleCard}) => {
  return (
    <div>
    <div className="w-screen h-screen absolute top-0 left-0 -z-10 bg-[#000000a0]"></div>
      <div className="absolute left-[25%] top-[10%] bg-[#f1f2f4] p-[2rem] w-[76.5rem] rounded-xl text-[#172b4d]">
      <div className="flex justify-between">
      <div className="flex gap-[1rem] w-[95%]">
        <div>
        <img className="w-[2.5rem] mt-[0.3rem]" src="https://img.icons8.com/windows/32/card-wallet.png" alt="card-wallet"/>
        </div>
        <div className="w-[89%]">
          <h1 className="text-[2.2rem] font-semibold">{"hello"}</h1>
          <p className="text-[1.3rem] text-gray-600">in list <a href="#" className="border-b-[0.1rem] border-gray-500">Frontend</a></p>
        </div>
      </div>
        <div onClick={handleCard} className="cursor-pointer">
        <img className="w-[3.5rem] rounded-full hover:bg-gray-300" src="https://img.icons8.com/ios/50/multiply.png" alt="multiply"/>
        </div>
      </div>
      <div className="flex gap-[1rem]">
        <LeftCardItems />
        <RightCardItems />
      </div>
      </div>
    </div>
  )
}

export default CardItemCon
