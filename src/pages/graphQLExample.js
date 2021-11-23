/*
import { useState } from "react";
import { useHistory } from 'react-router-dom';



/*
{
  books{
    name
    author{
      name
      age
    }
  },
  authors{
    name
  }
}
*/
/*
const GraphQLExample = () => {
    const testQuery = "{books{ name author{ name age } }, authors{ name } }";
    const handleSubmit = (e) => {
        e.preventDefault(); // prevents the page from refreshing
        const [isPending, setIsPending] = useState(false);
        const history = useHistory();

        setIsPending(true);

        console.log(blog);
        fetch('http://localhost:4000', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: testQuery
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            // history.go(-1); // go back one page
            history.push('/');
        })

        
    }

    return ( 
        <div className="graphql-example">
            <p>GraphQL Example</p>
        </div>
     );
}
 
export default GraphQLExample;
*/