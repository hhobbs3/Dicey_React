import { useState } from "react";
import { useHistory } from 'react-router-dom';

const BlogCreate = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents the page from refreshing
        const blog = { title, body, author };

        setIsPending(true);

        console.log(blog);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            // history.go(-1); // go back one page
            history.push('/');
        })

        
    }

    return ( 
        <div className="blog-create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange ={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange ={(e) => setBody(e.target.value)}
                />
                <label>Blog author:</label>
                <input
                    type="author"
                    required
                    value={author}
                    onChange ={(e) => setAuthor(e.target.value)}
                />
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding Blog...</button> }
                <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p>
            </form>
        </div>
     );
}
 
export default BlogCreate;