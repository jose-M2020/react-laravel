import { useState } from "react";

const handleDelete = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  });

  return res.json();
}

export const ListItem = ({data}) => {
  const {title, body, id} = data;
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      const createdPost = await handleDelete(id)

      // setData(prev => ([
      //   createdPost,
      //   ...prev,
      // ]))
      
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }

    
  }

  return (
    <>
      <li class="list-group-item">
        <div class="ms-2 me-auto">
          <div class="fw-bold">{title}</div>
          {body}
          <div class="d-grid gap-2 d-md-block">
            <button class="btn btn-primary" onClick={handleDelete} type="button">Edit</button>
            <button class="btn btn-primary" type="button">Delete</button>
          </div>
        </div>
      </li>
    </>
  )
}