import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Notification = () => {
  const { currentColor ,handleNotClick} = useStateContext();

  return (
    <div className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Notifications</p>
          <button type="button" className="text-white text-xs rounded p-1 px-2 bg-orange-theme "> 5 New</button>
        </div>
        <button
            onClick={() => handleNotClick("notification")}
            type="button"
            style={{ color: "rgb(153,170,150)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>  </div>
      <div className="mt-5 ">
        {chatData?.map((item, index) => (
          <div key={index} className="flex items-center leading-8 gap-5 border-b-1 border-color p-3">
            <img className="rounded-full h-10 w-10" src={item.image} alt={item.message} />
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
            </div>
          </div>
        ))}
        <div className="mt-5">
        <button type="button"
            onClick={() => handleNotClick("cart")}
            style={{
              backgroundColor: 'blue',
              color: "white",
              borderRadius: "10px",
              width: "full",
            }}
            className={`text-400 p-3 hover:drop-shadow-xl`}
          >
          See all Notifications
          </button>  </div>
      </div>
    </div>
  );
};

export default Notification;