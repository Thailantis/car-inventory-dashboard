import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const SignOutForm: React.FC = () => {
    const {user, setUser} = useContext(UserContext);

    const handleSignOut = () => {
        setUser(null);
    };
    
    return (
        <div>
            <h2>Welcome, {user.username}</h2>
            <form onsubmit={handleSignOut}>
                <p>Click the button below to sign out:</p>
                <button type="submit">Sign Out</button>
            </form>
        </div>
    );
};

export default SignOutForm;
