//---------------------------
//  actions for routes
//---------------------------

//---------------------------
//  import dependencies
//---------------------------

//---------------------------
//  URL for data
//---------------------------
import { redirect } from "react-router-dom"                 


const URL = "https://bookmar-app-backend.onrender.com"

export const deleteAction = async ({params}) => {
        console.log("in delete action")
        await  fetch(URL + "/bookmark/" + params.id, {
            method: "delete"
        })
        return redirect("/")
    }
    //console.log("in delete action", param)

