import React, {useState} from 'react';

interface User {
    email: string;
    password: string;
}

const SignUpPage: React.FC = () => {
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
});
    
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
    ...user,
    [e.target.name]: e.target.value
    });
};

const handleSignUp = () => {
    fetch('/api/signup', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(user),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Sign up response:', data);
        })
        .catch(error => {
            console.error('Sign up error', error);
        });
    return (
    <div>
        <h1>Sign Up</h1>
        <form>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={user.email} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="empasswordail" value={user.password} onChange={handleInputChange}/>
            </div>
            <button type="button" onClick={handleSignUp}>
                Sign Up
            </button>
        </form>
    </div>
  );
};
const SignInPage: React.FC = () => {
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
});
    
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
    ...user,
    [e.target.name]: e.target.value
    });
}; 
    
const handleSignUp = () => {
    fetch('/api/signup', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(user),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Sign In response:', data);
        })
        .catch(error => {
            console.error('Sign In error', error);
        });
    
    return (
    <div>
        <h1>Sign In</h1>
        <form>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={user.email} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="empasswordail" value={user.password} onChange={handleInputChange}/>
            </div>
            <button type="button" onClick={handleSignIn}>
                Sign In
            </button>
        </form>
    </div>
  );
};
export { SignUpPage, SignInPage };
