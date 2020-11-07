import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { addQuery } from "../../actions/queryAction";
import { useHistory } from "react-router-dom";

function AddQuery() {
    let history = useHistory();
    const dispatch = useDispatch();
    const [firstname, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [query, setQuery] = useState("");

    const [firstnameError, setNameErr] = useState({});
    const [surnameError, setSurnameErr] = useState({});
    const [emailError, setEmailErr] = useState({});

    const createQuery = (e) => {
        e.preventDefault();
        const new_query = {
            id: shortid.generate(),
            firstname: firstname,
            surname: surname,
            email: email,
            query: query
            };
        const isValid = formValidation();
        if(isValid)
        {
            dispatch(addQuery(new_query));
            history.push("/sample1");
        }
        else
        {
            return false;
        }
        
      };
    const formValidation = () => {
        const firstnameError = {};
        const surnameError = {};
        const emailError = {};
        let isValid = true;

        if(!firstname.trim())
        {
            firstnameError.required="First name is required!";
            isValid=false;
        }

        if(!surname.trim())
        {
            surnameError.required="Surname is required!";
            isValid=false;
        }
        
        if(email.trim() && (!/\S+@\S+\.\S+/.test(email)))
        {
            emailError.required="Invalid email address!";
            isValid=false;
        }

        setNameErr(firstnameError);
        setSurnameErr(surnameError);
        setEmailErr(emailError);
        return isValid;
    }
    return (
        <div className="card border-0 shadow">
            <div className="card-header primary">
                <h5>New Complain</h5>
            </div>
            <div className="card-body">
                <form onSubmit={(e) => createQuery(e)}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Your First Name" 
                        value={firstname}
                        onChange={(e)=>setName(e.target.value)}
                        />                        
                    </div>
                    {Object.keys(firstnameError).map(
                            (key)=>{
                                return <div className="text-danger">{firstnameError[key]}</div>
                            }
                        )}
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Your Surname" 
                        value={surname}
                        onChange={(e)=>setSurname(e.target.value)}
                        />
                    </div>
                    {Object.keys(surnameError).map(
                            (key)=>{
                                return <div className="text-danger">{surnameError[key]}</div>
                            }
                        )}
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Your Email" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    {Object.keys(emailError).map(
                            (key)=>{
                                return <div className="text-danger">{emailError[key]}</div>
                            }
                        )}
                    <div className="form-group">
                        <textarea rows="4" className="form-control" placeholder="Queries / Complains?" 
                        value={query}
                        onChange={(e)=>setQuery(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddQuery
