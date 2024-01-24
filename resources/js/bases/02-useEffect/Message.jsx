import { useEffect } from "react"

export const Message = () => {
  useEffect(() => {
    const handleMouseOver = () => {
      console.log(':)')
    }

    window.addEventListener('mousemove', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseOver)
    }
  }, [])
  

  return (
    <>
      <h1>Me renderice</h1>
    </>
  )
}