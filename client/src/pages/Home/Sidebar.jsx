import React from "react";
import { useAuth } from "../../context/Auth";

function Sidebar() {
  const [auth, setAuth] = useAuth();
  return (
    <div className="w-[300px] bg-[#7ED957] ml-5 rounded-md p-3">
      <div className="flex space-x-3 items-center text-black">
        <img
          className="h-[80px] w-[80px] rounded-full border-2 border-solid"
          src="https://image1.masterfile.com/getImage/645-02153594em-front-view-of-a-farmer-holding-plow-stock-photo.jpg"
          alt=""
        />
        <div>
          <p className="font-bold">{auth.user.name}</p>
          <p className="text-sm">@{auth.user.username}</p>
          <p className="text-sm">{auth.user.location}</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
