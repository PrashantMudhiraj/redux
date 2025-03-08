import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../redux/store/carSlice";

const CarSearch = () => {
    const dispatch = useDispatch();
    const currentCarSearch = useSelector((store) => store.cars.searchTerm);
    const handleChange = (e) => {
        e.preventDefault();
        dispatch(changeSearchTerm(e.target.value));
    };

    return (
        <div>
            <input
                type="text"
                className="border border-black px-2 py-1"
                onChange={handleChange}
                value={currentCarSearch}
                placeholder="search car"
            />
        </div>
    );
};

export default CarSearch;
