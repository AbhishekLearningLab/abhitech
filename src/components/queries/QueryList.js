import React from "react";
import { useSelector } from "react-redux";

function QueryList() {
    const queries=useSelector((state) => state.queries);
    
    return (
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">First Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Email</th>
                <th scope="col">Query</th>
                </tr>
            </thead>
            <tbody>  
                {
                    queries.map(q=>(
                        <tr>
                            <td className="rowData">{q.firstname}</td>
                            <td className="rowData">{q.surname}</td>
                            <td className="rowData">{q.email}</td>
                            <td className="rowData">{q.customer_query}</td>
                        </tr>                
                    ))
                }              
            </tbody>
        </table>
    )
}

export default QueryList
