import { useEffect, useState } from "react";

const handleFetchRandomNumber = async () => {
  const url = 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new';

  const res = await fetch(url);
  const data = await res.text();
  throw new Error('500 internal server error')
  return +data;
}

export const RandomNumber = () => {
  const [number, setNumber] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState()

  useEffect(() => {
    handleFetchRandomNumber()
      .then(setNumber)
      .catch(error => setIsError(error.message));
  }, [])
    
  useEffect(() => {
    if(number) setIsLoading(false);
  }, [number])
  
  useEffect(() => {
    if(isError) setIsLoading(false);
  }, [isError])
  

  return (
    <>
      {isLoading ? 
        <h2>Loading...</h2>
      : 
        <h2>Random Number: {number}</h2>
      }

      {!isLoading && isError && <h3>{isError}</h3>}
      <hr />
    </>
  )
}