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
        <div>
            <h1>Add Car</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name || ""}
                        onChange={handleCarName}
                    />
                </div>
                <div>
                    <label>Value</label>
                    <input
                        type="number"
                        value={cost || ""}
                        onChange={handleCarCost}
                    />
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
        </div>
    );
};

export default CarForm;
