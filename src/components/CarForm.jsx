import { useSelector, useDispatch } from "react-redux";
import { addCar, changeCost, changeName } from "../redux/index.js";

const CarForm = () => {
    const dispatch = useDispatch();
    const { name, cost } = useSelector((state) => state.form);

    const handleCarName = (event) => {
        dispatch(changeName(event.target.value));
    };
    const handleCarCost = (event) => {
        const carCost = parseInt(event.target.value);
        dispatch(changeCost(carCost));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(addCar({ name, cost }));
    };
    return (
        <div className="">
            <h1>Add Car</h1>
            <form
                onSubmit={handleSubmit}
                className="flex justify-around mx-3 my-5 shadow-lg px-5 py-4 bg-cyan-50"
            >
                <div>
                    <label>Name : </label>
                    <input
                        className="border border-black px-1 my-2"
                        type="text"
                        value={name || ""}
                        onChange={handleCarName}
                    />
                </div>
                <div>
                    <label>Value : </label>
                    <input
                        className="border border-black px-1 my-2"
                        type="number"
                        value={cost || ""}
                        onChange={handleCarCost}
                    />
                </div>
                <div>
                    <button className="bg-blue-400 px-5 py-1 rounded-md my-2">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CarForm;
