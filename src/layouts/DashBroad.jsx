import guardian from "../routers/guardian";

function DashBroad({ children }) {

    return (
        <div>
            {children}
        </div>
    );
}

export default guardian(DashBroad);