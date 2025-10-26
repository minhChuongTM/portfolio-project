// ThemeContext.jsx
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    // const bgWhite = "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)";
    const bgBlack = "radial-gradient(125% 125% at 50% 10%, #000000 40%, #350136 100%)";
    const bgWhiteImgase = `radial-gradient(circle at top left,rgba(70, 130, 180, 0.5),transparent 30%)`;
    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {/* Radial Gradient Background */}
            {/* <div
                    className={`absolute inset-0 z-0 transition-opacity duration-500`}
                    style={{
                        background: theme == "light" ? bgWhite : bgBlack,
                    }}
                /> */}

            <div className="absolute inset-0 z-0 pointer-events-none">
                <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                        theme === "light" ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                        background: "#ffffff",
                        backgroundImage: bgWhiteImgase,
                        // filter: "blur(80px)",
                        backgroundRepeat: "no-repeat",
                    }}
                />
                <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                        theme === "dark" ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ background: bgBlack }}
                />
            </div>
            {/* Your Content/Components */}
            {children}
        </ThemeContext.Provider>
    );
};
