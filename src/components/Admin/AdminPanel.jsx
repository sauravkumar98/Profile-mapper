import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

const AdminPanel = () => {
    const { user, isAuthenticated } = useContext(UserContext);

    if (!isAuthenticated) {
        return <p>Please log in to access the admin panel.</p>;
    }

    return (
        <div>
            <h1>Welcome, {user.name}</h1>
            <p>Role: {user.role}</p>
        </div>
    );
};

export default AdminPanel;
