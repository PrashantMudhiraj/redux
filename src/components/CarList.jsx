import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../redux";

const CarList = () => {
    const dispatch = useDispatch();
    const cars = useSelector((state) => {
        return state.cars.data.filter((car) =>
            car.name.includes(state.cars.searchTerm.toLowerCase())
        );
    });

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    };

    const renderedCars = cars.map((car) => {
        return (
            <div
                key={car.id}
                className="flex  items-center border border-black mx-2 my-4 p-2"
            >
                <h2 className="text-left p-2 text-xl">
                    {car.name} - ${car.cost}
                </h2>
                <button
                    className="bg-red-400 px-5 py-1 rounded-md ml-auto"
                    onClick={() => handleCarDelete(car)}
                >
                    Delete
                </button>
            </div>
        );
    });

    return (
        <div className="flex flex-col">
            {renderedCars} <hr />
        </div>
    );
};

export default CarList;
