//----------------------
//  Show Page
//----------------------

//----------------------
// Import dependencies
//----------------------
import { useLoaderData, Form } from "react-router-dom"

function Show (props) {

    const bookmark = useLoaderData()

    return (
        <div className="">    
            <h1>{bookmark.title}</h1>
            <h2>Website: {bookmark.url}</h2>


            <h2>Update {bookmark.name}</h2>
          <Form action ={`/update/${bookmark._id}`} method="post">
              <input type="input" name="title" placeholder="book title" />
              <input type="input" name="url" placeholder="link for bookmark website" />
              <input type="submit" value={`update ${bookmark.title}`} />                
          </Form>
                                                
          <br></br>

          <h2>Delete Bookmark</h2>
          <Form action={`/delete/${bookmark._id}`} method="post">
              <input type="submit" value ={`delete ${bookmark.title}`} />
          </Form>
  
          </div>                                  
    )
}
                                                                               
//----------------------
//  Export Index Page
//----------------------

                                       
export default Show;