import React from 'react';

interface Car {\
  id: string;
  make: string;
  model: string;
  color: string;
  year: number;
}

interface AvailableCarProps {
  availableCars: Car[];
  onAddCar: (car: Car) => void;
}

const AvailableCars: React.FC<AvailableCarsProps> = ({ availableCars, onAddCar }) => {
  const handleAddCar = (car: Car) => {
    onAddCar(car);
  };
  
  return (
    <div>
        <h2>Available Cars</h2>
        {availableCars.map((car: Car) => (
            <div key={car.id}>
            <p>Make: {car.make}</p>
            <p>Model: {car.model}</p>
            <p>Color: {car.color}</p>
            <p>Year: {car.year}</p>
            <button onClick={() => handleAddCar(car)}>Add Car</button>
        </div>
        ))}
    </div>
  );
};
  
export default AvailableCars;
