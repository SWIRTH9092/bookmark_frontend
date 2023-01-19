import { redirect } from "react-router-dom"

const URL = "https://bookmar-app-backend.onrender.com"
export const updateAction = async ({request, params}) => {

    //get data from form
    const formData = await request.formData()

    //set update bookmark to match schema
    const updatedBookmark = {
        title: "string",
        url:  "string"
    }

    // Send updated bookmark to our API
    await fetch(URL + "/bookmark/" + params.id, {
        method: "put",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBookmark)
    })
                                                
        // redirect to index      
        return redirect("/")
  }