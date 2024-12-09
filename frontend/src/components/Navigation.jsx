import { NavLink } from "react-router-dom";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import SignUpButton from "./SignUpButton";

export default function Navigation() {
    return (
        <>
        <nav>
            <NavLink to="/" end>
                Home
            </NavLink>
            &nbsp;&nbsp;
            <NavLink to="/posts" end>
                Posts
            </NavLink>
            &nbsp;&nbsp;
            <NavLink to="/view-post" end>
                View Post
            </NavLink>
            &nbsp;&nbsp;
            <NavLink to="/create-post" end>
                Create Post
            </NavLink>
            &nbsp;&nbsp;
            <NavLink to="/edit-post" end>
                Edit Post
            </NavLink>
            &nbsp;&nbsp;
            <NavLink to="/profile" end>
                Profile
            </NavLink>
            &nbsp;&nbsp;
            <SignUpButton/>
            &nbsp;&nbsp;
            <LoginButton/>
            &nbsp;&nbsp;
            <LogoutButton/>
        </nav>
        <br/>
        </>
    )
}