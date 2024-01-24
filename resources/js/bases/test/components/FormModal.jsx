import { useState } from "react";

const handlePost = async (values) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

  return res.json();
}

export const FormModal = ({setData, isEdit = false}) => {
  const [formData, setFormData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      setIsLoading(true);
      const createdPost = await handlePost(formData)

      setData(prev => ([
        createdPost,
        ...prev,
      ]))
      setFormData({});
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }

    
  }

  const handleInputChange = ({target}) => {
    const { name, value } = target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        {isEdit ? 'Edit post' : 'Create post'}
      </button>
      
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <form onSubmit={handleSubmit}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">New Post</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <div className="mb-3">
                <label for="title" className="form-label">Title</label>
                <input
                  onChange={handleInputChange}
                  value={formData?.title}
                  className="form-control"
                  name="title"
                  id="title"
                />
              </div>
              <div className="mb-3">
                <label for="body" className="form-label">Body</label>
                <input
                  onChange={handleInputChange}
                  value={formData?.body}
                  className="form-control"
                  name="body"
                  id="body"
                />
              </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">
                  {!isLoading ? (
                    'Save'
                  ) : (
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}