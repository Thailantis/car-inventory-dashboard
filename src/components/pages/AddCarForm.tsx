import React, { useState } from 'react';

interface AddCarFormProps {
    onAddCar: (car: Car) => void;
}

interface Car {
    make: string;
    model: string;
    color: string;
    year: number;
}

const AddCarForm: React.FC<AddCarFormProps> = {{ onAddCar }} => {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [color, setColor] = useState('');
    const [year, setYear] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newCar: Car = {
            make,
            model,
            color,
            year,
        };

        onAddCar(newCar);

        setMake('');
        setModel('');
        setColor('');
        setYear(0);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Make:
                    <input type="text" value={make} onChange={(e) => setMake(e.target.value)} required />
                </label>
            </div>
            <div>
                <label>
                    Model:
                    <input type="text" value={model} onChange={(e) => setModel(e.target.value)} required />
                </label>
            </div>
            <div>
                <label>
                    Color:
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)} required />
                </label>
            </div>
            <div>
                <label>
                    Year:
                    <input type="text" value={year} onChange={(e) => setYear(Number(e.target.value))} required />
                </label>
            </div>
            <button type="submit">Add Car</button>
        </form>
    );
};

export default AddCarForm;
