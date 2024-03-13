import { Outlet } from "react-router-dom";
import guardian from "../routers/guardian";

function Blank() {

    return (
        <div className="w-full h-full">
            <Outlet />
        </div>
    );
}

export default Blank;