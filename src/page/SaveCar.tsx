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
  carCollection: Car[]'
}

interface CarDetailProps {
  car: Car;
  user: User;
  onSaveCar: (carL Car) => void;
}

const CarDetail: React.FC<CarDetailProps> = ({ car, user, onSaveCar }) => {
  const handleSaveCar = () => {
    onSaveCar(car);
  }
  
  return (
    <div>
        <h2>{car.make} {car.model}</h2>
        <p>Color: {car.color}</p>
        <p>Year: {car.year}</p>
        <button onClick={handleSaveCar}>Save Car</button>
    </div>
  );
};

export default SaveCar;
