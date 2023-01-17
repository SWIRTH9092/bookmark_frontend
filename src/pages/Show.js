//----------------------
//  Show Page
//----------------------

//----------------------
// Import dependencies
//----------------------
import { useLoaderData} from "react-router-dom"

function Show (props) {

    const bookmark = useLoaderData()

    return (
        <div className="">    
            <h1>{bookmark.title}</h1>
            <h2>Website: {bookmark.url}</h2>
          </div>
    )
}

//----------------------
//  Export Index Page
//----------------------
export default Show;