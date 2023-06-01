import React from 'react';
import { useParams } from 'react-router-dom';

interface Car {
    make: string;
    model: string;
    color: string;
    year: number;
}

interface CarDetailsProps {
    car: Car | null;
}

const CarDetails: React.FC = () => {
    const {id} = useParams<{id:string}>();
    const {car, setCar} = useState<Car | null>(null);

    useEffect(() => {
        const fetchCarDetails = async () => {
            try {
                const response = await fetch(
                    `https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`
                );
                const carData = await response.json();
                setCar(carData);
            }   catch (error) {
                console.error('Error fetching car details:', error);
            }
        };
        fetchCarDetails();
    }, [id]);

    return(
        <div>
            <h3>Car Details</h3>
            {car ? (
                <div>
                    <p>Make: {car.make}</p>
                    <p>Model: {car.model}</p>
                    <p>Color: {car.color}</p>
                    <p>Year: {car.year}</p>
                </div>
            ) : (
                <p>Loading car details....</p>
            )}
        </div>
    );
};


export default CarDetails;
