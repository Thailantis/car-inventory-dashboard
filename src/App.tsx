import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';
import CarList from './components/CarList';
import CarDetails from './components/CarDetails';
import CarForm from './components/CarForm';
import SaveCar from './page/SaveCar';

interface Car {
  make: string;
  model: string;
  color: string;
  year: number;
}

const App: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);

  const handleAddCar = (car: Car) => {
    setCars([...cars, car]);
  };

  return(
    <Router>
    <Container>
      <Row>
        <Col md={6}>
          <h2>Car Inventory</h2>
          <Switch>
            <Route exact Path="/" component={() => <CarList cars={cars} />} />
            <Route path="/car/:id" Component={CarDetails} />
          </Switch>
          </Col>
        <Col md={6}>
          <Route
          exact
          path="/car/:id"
          omponent={() => <CarForm onAddCar={handleAddCar} />}
          />
        </Col>
      </Row>
    </Container>
    </Router>
  );
};

useEffect(() => {
  const fetchCars = async () => {
    try {
      const response = await fetch('https://my-json-server.typicode.com/Llang8/cars-api/cars');
      const carsData = await response.json()
      setCars(carsData);
    } catch (error) {
      console.error('Error fetching car list:', error);
    }
  };


  fetchCars();
}, []);

export default App;
