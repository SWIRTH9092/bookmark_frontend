//---------------------------
//  actions for routes
//---------------------------

//---------------------------
//  import dependencies
//---------------------------

//---------------------------
//  URL for data
//---------------------------



const URL = "https://bookmar-app-backend.onrender.com"

export const deleteAction = async ({param}) => {

        await  fetch(URL + "/bookmark/" + param.id, {
            method: "delete"
        })
        return redirect("/")
    }
    console.log("in delete action", param)

