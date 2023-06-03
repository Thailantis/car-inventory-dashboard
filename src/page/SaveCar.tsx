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
