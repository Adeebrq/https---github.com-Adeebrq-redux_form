import React from "react";
import { useSelector } from "react-redux";

const DataTable= ()=> {
    const personalDetails= useSelector((state)=> state.personalDetails)

    return(
        <div>
            <h1>Personal Details</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{personalDetails.name}</td>
                        <td>{personalDetails.email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default DataTable;