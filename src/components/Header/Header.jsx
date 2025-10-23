import { NavLink } from "react-router";

function Header() {
    return (
        <div className="flex justify-between pt-4 pb-4 font-Montserrat-Alternates font-medium">
            <div className="logo">
                <NavLink to={"/"}>Logo</NavLink>
            </div>
            <div className="navbar flex gap-6">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"project"}>Project</NavLink>
                <NavLink to={"experience"}>Experience</NavLink>
                <NavLink to={"about"}>About</NavLink>
                <NavLink to={"contact"}>Contact</NavLink>
            </div>
        </div>
    );
}

export default Header;
