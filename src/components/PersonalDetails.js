import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addPersonalDetails } from "../store/Actions";
import { useHistory } from "react-router-dom";

const PersonalDetails= ()=> {
    const [details, setDetails] = useState({name:'', email: ''});
    const dispatch= useDispatch();
    const history= useHistory();

const HandleChange = (e) => {
    setDetails({...details,[e.target.name]:e.target.value});
}
const HandleSubmit= (e)=>{
    e.preventDefault();
    dispatch(addPersonalDetails(details));
    history.push('/data-table');
};

return (
   
    <form onSubmit={HandleSubmit}>
        <div>
            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={details.name}
                onChange={HandleChange}
            />
        </div>
        <div>
            <label>Email:</label>
            <input
            type="email"
            name="email"
            value={details.email}
            onChange={HandleChange}   
            />
        </div>
        <button type="submit">Submit</button>
    </form>
  );
};
export default PersonalDetails;