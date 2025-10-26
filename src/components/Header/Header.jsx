import NavItem from "./NavItem.jsx";
import { NavLink } from "react-router";
import { ThemeContext } from "@/providers/ThemeProvider.jsx";
import { useContext } from "react";
function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const isDark = theme !== "light";

    return (
        <div className={"flex justify-between font-Montserrat-Alternates font-medium items-center mt-2"}>
            <div className={"navbar flex items-center h-15"}>
                <NavLink
                    to={"/"}
                    className={
                        isDark
                            ? "transition-colors duration-300 text-white"
                            : "transition-colors duration-300 text-gray-800"
                    }
                >
                    Logo
                </NavLink>
            </div>
            <div className="navbar flex gap-6 items-center h-15">
                <NavItem isDark={isDark} to={"/"} className={"hover:bg-amber-600 shadow-amber-200 p-4 rounded-2xl"}>
                    Home
                </NavItem>
                <NavItem isDark={isDark} to={"project"} className={"p-4"}>
                    Project
                </NavItem>
                <NavItem isDark={isDark} to={"experience"}>
                    Experience
                </NavItem>
                <NavItem isDark={isDark} to={"about"}>
                    About
                </NavItem>
                <NavItem isDark={isDark} to={"contact"}>
                    Contact
                </NavItem>
                {/* Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className={`relative w-8 h-8 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        isDark ? "bg-blue-600 focus:ring-blue-500" : "bg-gray-300 focus:ring-gray-400"
                    }`}
                >
                    <span
                        className={`absolute top-1 left-1  w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center `}
                    >
                        {isDark ? (
                            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Header;
