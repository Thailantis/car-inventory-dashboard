import React, { useContext, useState} from 'react';
import { UserContext } from './UserContext';

const SignInForm: React.FC = () => {
    const {setUser} = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async(e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data);
            } else {
                setError('Invalid username or password.');
            }
        } catch (error) {
            console.error('Error signing in:', error);
            setError('An error has occurred during sign-in.');
        }
    };

    const handleSignOut = () => {
        setUser(null);
    };

    return (
        <div>
            {error && <p>{error}</p>}
            {setUser ? (
                <button onClick={handleSignOut}>Sign Out</button>
            ):(
                <form onSubmit={handleSignIn}>
                    <div>
                        <label>
                            Username:
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </label>
                    </div>
                    <button type="submit">Sign In</button>
                </form>
            )}
        </div>
    );
};

export default SignInForm;
