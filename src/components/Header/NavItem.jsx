import { NavLink } from "react-router";

export default function NavItem({ to, children, className }) {
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    [
                        "transition-all duration-200 p-4 rounded-2xl", // class chung
                        className, // class truyền từ ngoài
                        isActive
                            ? "text-gray-700 hover:bg-emerald-500 hover:text-white"
                            : "text-gray-700 hover:bg-amber-600 hover:text-white",
                    ].join(" ")
                }
            >
                {children}
            </NavLink>
        </div>
    );
}
