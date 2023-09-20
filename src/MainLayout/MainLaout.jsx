import {  Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import { NavLink } from "react-router-dom";


const MainLaout = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-8 md:px-16  py-6 my-10 ">

                <section className="flex justify-between px-8 md:px-16 shadow-md py-6  rounded-md ">
                    <div>
                        <h2 className="text-2xl font-semibold">Amazon </h2>
                    </div>
                    <nav>
                        <ul className="flex gap-5 text-xl items-center">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending })  =>
                                    isPending ? "pending" : isActive ? "bg-orange-400 px-2 py-1 rounded-sm hover:bg-orange-500" : ""
                                }  >
                                Home
                            </NavLink>
                            <li>
                            <NavLink
                                to="/products"
                                className={({ isActive, isPending })  =>
                                    isPending ? "pending" : isActive ? "bg-orange-400 px-2 py-1 rounded-sm hover:bg-orange-500" : ""
                                }  >
                                Products
                            </NavLink>
                            </li>
                            <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive, isPending })  =>
                                    isPending ? "pending" : isActive ? "bg-orange-400 px-2 py-1 rounded-sm hover:bg-orange-500" : ""
                                }  >
                                Dashboard
                            </NavLink>
                            </li>
                        </ul>
                    </nav>
                </section>
                <div className="min-h-screen">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default MainLaout;