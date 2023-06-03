import React from 'react';

interface Car {
  id: string;
  make: string;
  model: string;
  color: string;
  year: number;
}

interface User {
  id: string;
  email: string;
  password: string;
  carCollection: Car[];
}

interface UserPageProps {
  user: User;
}

const UserPage: React.FC<UserPageProps> = ({ user }) => {
  return (
    <div>
        <h1>User Page</h1>
        <h2>{user.email}</h2>
        <h3>Car Collection:</h3>
        {user.carCollection.map((car: Car) => (
            <div key={car.id}>
            <p>Make: {car.make}</p>
            <p>Model: {car.model}</p>
            <p>Color: {car.color}</p>
            <p>Year: {car.year}</p>
        </div>
        ))}
    </div>
  );
};
  
export default UserPage;
