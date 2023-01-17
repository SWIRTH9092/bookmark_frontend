//----------------------
//  "Bookmark" Loader URL (for a selected cheese) for show page
//----------------------
const URL = "https://bookmarkd-backend.onrender.com";

export const showLoader = async ({params}) => {
    const response = await fetch(URL + "/bookmark/" + params.id )
    const Bookmark = await response.json()
     return Bookmark
}