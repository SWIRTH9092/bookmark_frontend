//----------------------
//  "bookmark" Loader URL (all bookmarks) for Index page
//----------------------
const URL = "https://bookmarkd-backend.onrender.com";

export const indexLoader = async () => {
    const response = await fetch(URL + "/bookmark")
    const Bookmarks = await response.json()
    return Bookmarks
}