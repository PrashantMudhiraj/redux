import { useDispatch, useSelector } from "react-redux";

const CarValue = () => {
    const totalCost = useSelector((state) => {
        // const initialValue = 0;
        return state.cars.data
            .filter((car) =>
                car.name.includes(state.cars.searchTerm.toLowerCase())
            )
            .reduce((acc, car) => acc + car.cost, 0);
    });
    return <div>{<h1>Total : ${totalCost}</h1>}</div>;
};

export default CarValue;
