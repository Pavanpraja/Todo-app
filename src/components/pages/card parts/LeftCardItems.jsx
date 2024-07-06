const LeftCardItems = () => {
  return (
    <div>
      <div className="w-[55.2rem]">
        <div className="">
          <div>
            <div className="my-[2.7rem] pl-[4rem]">
              <h1 className="font-semibold text-[1.2rem] mb-[0.5rem]">
                Notification
              </h1>
              <a
                href="#"
                className="flex items-center gap-[0.5rem] text-[1.5rem] font-semibold hover:bg-[#091e4224] bg-[#091e4214] rounded-lg w-[8rem] p-[0.5rem] cursor-pointer"
              >
                <img
                  className="w-[1.7rem]"
                  src="https://img.icons8.com/material-outlined/24/visible--v1.png"
                  alt="visible--v1"
                />{" "}
                Watch
              </a>
            </div>
            <div className="font-semibold flex gap-[1rem]">
              <div>
                <svg
                  className="w-[2.5rem]"
                  role="presentation"
                  focusable="false"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM4 9C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11H20C20.5523 11 21 10.5523 21 10C21 9.44772 20.5523 9 20 9H4ZM3 14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14ZM4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H14C14.5523 19 15 18.5523 15 18C15 17.4477 14.5523 17 14 17H4Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col gap-[1.5rem] w-[100%]">
                <h1 className="text-[1.6rem]">Description</h1>
                <div className="p-[0.9rem] hover:bg-[#091e4224] bg-[#091e4214] text-[1.4rem] min-h-[5.5rem] rounded-lg block cursor-pointer">
                  <h1>Add a more detailed description...</h1>
                </div>
              </div>
            </div>
            <div className="flex gap-[1rem] flex-col my-[2rem]">
              <div className="flex items-center justify-between">
              <div className="flex font-semibold gap-[1.5rem]">
                <img
                  className="w-[2.5rem]"
                  src="https://img.icons8.com/material-two-tone/24/list.png"
                  alt="list"
                />
                <h1 className="text-[1.6rem]">Activity</h1>
              </div>
                <div className="flex float-end">
                  <h1 className="p-[0.5rem] text-[1.5rem] font-semibold hover:bg-[#091e4224] bg-[#091e4214] rounded-lg">Show details</h1>
                </div>
              </div>
              <div className="flex gap-[0.8rem]">
                <h1 className="flex items-center justify-center bg-blue-950 text-white w-[3rem] h-[3rem] text-[1.5rem] font-semibold rounded-full">
                    PP
                </h1>
                <div className=" w-[100%]">
                  <h1 className="p-[0.9rem] text-[1.4rem] bg-[white] [box-shadow:0rem_0.2rem_0.5rem_lightgray] rounded-xl cursor-pointer">Write a comment...</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftCardItems;
