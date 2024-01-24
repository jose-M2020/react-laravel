import { useState } from "react";

export const MultipleInputForm = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [isSubmitted, setisSubmitted] = useState(false)

  const {email, password} = form;

  const handleInputChange = ({target}) => {
    const { name, value } = target;

    setForm(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setisSubmitted(true);
  }

  return (
    <>
      <h1>Multiple Input Form</h1>
      <hr />
      <div className="row justify-content-center p-5">
        <div className="col-md-4">
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>Email address</label>
              <input
                className='form-control'
                placeholder='Enter email'
                type='email'
                name="email"
                onChange={handleInputChange}
              />
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input
                className='form-control'
                placeholder='Password'
                type='password'
                name="password"
                onChange={handleInputChange}
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-4">
          {isSubmitted && (
            <>
              <p>Email: {email}</p>
              <p>Password: {password}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};