import React, { useContext, useEffect, useState} from 'react';
import { UserContext } from './UserContext';

interface Car {
    id: number;
    make: string;
    model: string;
    color: string;
    year: number;
}

const UserPage: React.FC = () = {
    const { user } = useContext(UserContext);
    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await fetch('/api/cars', {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                });
                const data = await response.json();
                setCars(data);
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };

        fetchCars();
    }, [user.token]);

    return (
        <div>
            <h1>Welcome, {user.username}</h1>
            <h2>Your Car Collection:</h2>
            {cars.length > 0 ? (
                <ul>
                    {cars.map((car) => {
                     <li key={car.id}>
                        <strong>Make:</strong> {car.make}<br />
                        <strong>Model:</strong> {car.model}<br />
                        <strong>Color:</strong> {car.color}<br />
                        <strong>Year:</strong> {car.year}<br />
                     </li>
                    })}
                </ul>
            ):(
                <p>No Cars in your collection due to not having one</p>
            )}
        </div>
    );
};

export default UserPage;
