//----------------------
//  Index Page
//----------------------

//----------------------
//  import dependencies
//----------------------
import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom" 

function Index (props) {
    //define list of bookmarks from loader data
    const bookmarks = useLoaderData();
    const [title, setTitle] = React.useState('');
    const [url, setUrl] = React.useState('');
    
    return (
        <div>
            <h2>Add a new bookmark</h2>
            <Form 
                onSubmit={(event) => {
                    setUrl('')
                    setTitle('')
                }}
                action="/create"
                method="post"
                >
                <input type="input" name="title" placeholder="website" value={title}
                    onChange={e => {
                        setTitle(e.target.value)
                    }}
                />
                <input type="input" name="url" placeholder="http" value={url}
                    onChange={e => {
                        setUrl(e.target.value)
                    }}
                />


                <input type="submit" value="Add" />
            </Form>

            <h2>
                {bookmarks.map(bookmark => (
                <div key={bookmark._id} className="bookmark">
                    <Link to={`/${bookmark._id}`}>
                        <h1>{bookmark.title}</h1>
                    </Link>
                    <br></br>
                    <br></br>
                    <br></br>
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