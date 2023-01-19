//---------------------------
//  actions for routes
//---------------------------

//---------------------------
//  import dependencies
//---------------------------
import { redirect }  from "react-router-dom";
import { useNavigate } from "react-router-dom";

//---------------------------
//  URL for data
//---------------------------
const URL = "https://bookmar-app-backend.onrender.com"

export const ExecuteDeleteAction = (id) => {
    const executeDelete = async(id) => {
        //delete bookmark with our API
        await fetch(URL + "/bookmark/" + id, {
            method: "delete"
        })}

    executeDelete(id)
    //redirect to index
    let navigate = useNavigate ();
    navigate('/')
    return 
}