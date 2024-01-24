import { useEffect, useState } from "react"
import { FormModal } from "./components/FormModal";
import { ListItem } from "./components/ListItem";

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

const handleFetch = async () => {
  const res = await fetch(API_URL);
  return res.json();
}

export const TestApp = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    handleFetch()
        .then(setData)
        .catch(error => setIsError(error.message)); 
  }, [])

  useEffect(() => {
    if(data) setIsLoading(false)
  }, [isLoading])

  useEffect(() => {
    if(isError) setIsLoading(false)
  }, [isError])
  

  useEffect(() => {
    if(!isLoading){
      console.log(data)

    }
  }, [data])
  

  return (
    <div className="container">
      <div className="flex justify-content-between">
        <h1>Test app</h1>
        <FormModal setData={setData} />
      </div>

      {isLoading ? (
        <p>Loading</p>
      ) : (
        <ul class="list-group list-group-flush">
          {data.map((item, i) => (
            <ListItem data={item} key={i} />
          ))}
        </ul>
      )}
    </div>
  )
}