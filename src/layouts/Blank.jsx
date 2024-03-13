import { Outlet } from "react-router-dom";

function Blank() {
  return (
    <div className="w-full h-full">
      <Outlet />
    </div>
  );
}

export default Blank;
