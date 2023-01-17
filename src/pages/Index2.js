//----------------------
//  Index Page
//----------------------

//----------------------
//  import dependencies
//----------------------
import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom" 
// import { indexLoader } from "../loaders/indexLoader"
// import { ExecuteDeleteAction } from "../actions/ExecuteDeleteAction"

function Index (props) {
    
    //define list of bookmarks from loader data
    const bookmarks = useLoaderData();
    const [title, setTitle] = React.useState('');
    const [url, setUrl] = React.useState('');
    const [refreshData, setRefreshData] = React.useState(false);

    return (
        <div>
            <h2>Add a new bookmark</h2>
            <Form 
                onSubmit={(event) => {
                    // window.open(`${url}`)
                    setUrl('')
                    setTitle('')
                }}
                action="/create"
                method="post"
                >
                <input type="input"  name="title" placeholder="website" value={title} className="bookmark-form" required

                    onChange={e => {
                        setTitle(e.target.value)
                    }}
                />
                <input type="input" name="url" placeholder="http" value={url} className="bookmark-form" required
                    onChange={e => {
                        setUrl(e.target.value)
                    }}
                />
                <input type="submit" value="Add" className="bookmark-form-button" />
            </Form>

            <h2>
                {bookmarks.map(bookmark => (
                <div key={bookmark._id} className="bookmark">
                    <Link className="pretendButton" to={`/${bookmark._id}`}>Edit</Link>
                    <a href={bookmark.url} target="_blank" rel="noreferrer" >
                            {bookmark.title}
                    </a>
                    {/* <button key={bookmark._id}
                        onClick={ (event) => {
                            ExecuteDeleteAction(`${bookmark._id}`)
                            setRefreshData(!refreshData)
                            indexLoader()
                            }}>
                    Delete</button> */}

                </div>
                ))}
            </h2>
        </div>
    )
}

//----------------------
//  Export Index Page
//----------------------
export default Index;