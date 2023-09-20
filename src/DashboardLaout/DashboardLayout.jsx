import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="my-10">
            <h2 className="text-center text-2xl font-semibold">Dashboard</h2>
            <div className="flex gap-5 justify-between my-10">
            <div className=" flex-1 shadow-md p-4">
                <ul>
                    <li>
                        <Link to="/dashboard" >Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/profile" >Profile</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/editProfile" >Edit Profile</Link>
                    </li>
                </ul>

            </div>
            <div className="flex-1 shadow-md p-4">
            <Outlet />
            </div>
            </div>
        </div>
    );
};

export default DashboardLayout;