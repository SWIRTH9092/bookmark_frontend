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
              <input type="input" name="title" placeholder="bookmark title" defaultValue={bookmark.title} className="bookmark-form" />
              <input type="input" name="url" placeholder="link for bookmark website" defaultValue={bookmark.url} className="bookmark-form"/>
              <input type="submit" value={`update ${bookmark.title}`} className="bookmark-form-button" />                
          </Form>
                                                
          <br></br>

          <h2>Delete Bookmark</h2>
          <Form action={`/delete/${bookmark._id}`} method="post">
              <input type="submit" value ={`delete ${bookmark.title}`} className="bookmark-form-button" />
          </Form>
  
          </div>                                  
    )
}
                                                                               
//----------------------
//  Export Index Page
//----------------------

                                       
export default Show;