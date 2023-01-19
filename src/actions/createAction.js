//---------------------------
//  actions for routes
//---------------------------

//---------------------------
//  import dependencies
//---------------------------
import { redirect }  from "react-router-dom";

//---------------------------
//  URL for data
//---------------------------
const URL = "https://bookmar-app-backend.onrender.com"

export const createAction = async ({ request }) => {
    
    //get new bookmark data from Form
    const formData = await request.formData()
    
    //set up our new bookmark to match schema
    const newBookmark = {
        title: formData.get("title"),
        url: formData.get("url")
    }

    //send new bookmark to our API
    await fetch(URL + "/bookmark", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newBookmark),
    })
    // redirect to index
    return redirect("/")
}