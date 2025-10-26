import { NavLink } from "react-router";

export default function NavItem({ to, children, className, isDark }) {
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    [
                        "transition-all duration-400 p-4 rounded-2xl", // class chung
                        className, // class truyền từ ngoài
                        isDark ? "text-white" : "text-gray-700",
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
