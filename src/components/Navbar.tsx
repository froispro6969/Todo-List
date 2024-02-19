import { useAuth } from "../contexts/authContext"


export const Navbar = () => {
    
    const { currentUser } = useAuth();


    return (
        <div className="navbar-container">
            <h1>Hi, {currentUser.displayName ? currentUser.displayName : currentUser.email}</h1>
        </div>
    )
}