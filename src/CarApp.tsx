import React from 'react';
import SaveCar from './page/SaveCar';
import UserPage from './page/UserPage';
import AvailableCars from './page/AvailableCars';

interface AppProps {
  user: User;
}

const App: React.FC<AppProps> = ({ user, availableCars }) => {
    const handleSaveCar = (car: Car) => {
    const updatedUser = { ...user, carCollection: [...user.carCollection, car] };
    console.log('Saving car...', updatedUser);
    const handleAddCar = (car: Car) => {
    console.log('Adding car...', car);
  };
};
  return (
    <div>
      <h1>Welcome to the Car Inventory App</h1>
      <SaveCar car={car} user={user} onSaveCar={handleSaveCar} />
  </div>
  );
  return (
    <div>
      <h1>Welcome to the Car Inventory App</h1>
      <UserPage user={user}/>
    </div>
  );
    return (
    <div>
      <h1>Welcome to the Car Inventory App</h1>
      <AvailableCars availableCars={availableCars} onAddCar={handleAddCar}/>
    </div>
  );
};
  
export default CarApp;
