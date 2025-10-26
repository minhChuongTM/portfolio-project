import { useContext, useEffect } from "react";
import AppRouters from "./AppRouters";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { ThemeContext } from "./providers/ThemeProvider";
function App() {
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "light") {
            root.classList.remove("dark");
        } else {
            root.classList.add("dark");
        }
    }, [theme]);

    return (
        <div>
            <div className="default min-h-screen w-full relative transition-colors duration-300">
                <Header />
                <AppRouters />
                <Footer />
            </div>
        </div>
    );
}

export default App;
