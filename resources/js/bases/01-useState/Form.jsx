import { useState } from "react";

export const Form = () => {
  const [search, setSearch] = useState('')

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const searchValue = e.target.search.value;

  //   setSearch(searchValue)
  // }

  const handleInputChange = e => {
    setSearch(e.target.value)
  }

  if(search === 'bulbasor') setSearch('Capturado')

  return(
    <>
      <h1>Formularios controlados</h1>
      <hr />

      <form>
        <input
          type="text"
          name="search"
          autoComplete="off"
          onChange={handleInputChange}
          value={search}
        />
        <button type="submit">Buscar</button>
        <p>Busqueda Pokemon: {search}</p>
      </form>
    </>
  )
}