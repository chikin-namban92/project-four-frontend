import React from 'react'
import { useHistory } from 'react-router'
import { registerUser } from '../../lib/api'
import ImageUploadField from './ImageUpload'

const initialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  image: '',
  age: '',
  interests: '',
  location: '',
  catnip: false,
}

function Register() {
  const history = useHistory()
  const [formData, setFormData] = React.useState(initialState)
  const [formErrors, setFormErrors] = React.useState(initialState)

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({ ...formData, [e.target.name]: value })
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }

  const handleImageUpload = (imageUrl, image) => {
    setFormData({ ...formData, [image]: imageUrl })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await registerUser(formData)
      history.push('/auth/login')
    } catch (err) {
      console.log(err.response.data)
    }
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form
            className="column is-half is-offset-one-quarter box"
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input 
                  className={`input ${formErrors.username ? 'isdanger' : ''}`}
                  placeholder="Username"
                  onChange={handleChange}
                  name="username"
                  value={formData.username}
                />
              </div>
              {formErrors.username && (
                <p className="help is-danger">{formErrors.username}</p>
              )}
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input 
                  type="email"
                  className={`input ${formErrors.email ? 'isdanger' : ''}`}
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                />
              </div>
              {formErrors.email && (
                <p className="help is-danger">{formErrors.email}</p>
              )}
            </div>
            <div className="field">
              <ImageUploadField
                onChange={handleImageUpload}
                labelText="Upload a Profile Picture"
                name="image"
                value={formData.image}
              />
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  type="password"
                  className={`input ${formErrors.password ? 'isdanger' : ''}`}
                  placeholder="Password"
                  onChange={handleChange}
                  name="password"
                  value={formData.password}
                />
              </div>
              {formErrors.password && (
                <p className="help is-danger">{formErrors.password}</p>
              )}
            </div>
            <div className="field">
              <label className="label">Password Confirmation</label>
              <div className="control">
                <input
                  type="password"
                  className={`input ${
                    formErrors.passwordConfirmation ? 'is-danger' : ''
                  }`}
                  placeholder="Password Confirmation"
                  onChange={handleChange}
                  name="passwordConfirmation"
                  value={formData.passwordConfirmation}
                />
              </div>
              {formErrors.passwordConfirmation && (
                <p className="help is-danger">
                  {formErrors.passwordConfirmation}
                </p>
              )}
            </div>
            <div className="field">
              <label className="label">Age</label>
              <div className="control">
                <input 
                  className={`input ${formErrors.age ? 'isdanger' : ''}`}
                  placeholder="Age"
                  onChange={handleChange}
                  name="age"
                  value={formData.age}
                />
              </div>
              {formErrors.age && (
                <p className="help is-danger">{formErrors.age}</p>
              )}
            </div>
            <div className="field">
              <label className="label">Location</label>
              <div className="control">
                <input 
                  className={`input ${formErrors.location ? 'isdanger' : ''}`}
                  placeholder="Location"
                  onChange={handleChange}
                  name="location"
                  value={formData.location}
                />
              </div>
              {formErrors.location && (
                <p className="help is-danger">{formErrors.location}</p>
              )}
            </div>
            <div className="field">
              <label className="label">Interests</label>
              <div className="control">
                <input 
                  className={`input ${formErrors.interests ? 'isdanger' : ''}`}
                  placeholder="Interests"
                  onChange={handleChange}
                  name="interests"
                  value={formData.interests}
                />
              </div>
              {formErrors.interests && (
                <p className="help is-danger">{formErrors.interests}</p>
              )}
            </div>
            <div className="field">
              <label className="checkbox label">Catnip</label>
              <div className="control">
                <input
                  type="checkbox"
                  onChange={handleChange}
                  name="catnip"
                  checked={formData.catnip}
                />
              </div>
              <div className="field">
                <button className="button is-fullwidth is-danger" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register