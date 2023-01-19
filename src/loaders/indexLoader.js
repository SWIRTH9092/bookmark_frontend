//----------------------
//  "bookmark" Loader URL (all bookmarks) for Index page
//----------------------
const URL = "https://bookmar-app-backend.onrender.com";

export const indexLoader = async () => {
    const response = await fetch(URL + "/bookmark")
    const Bookmarks = await response.json()
    return Bookmarks
}