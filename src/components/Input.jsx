import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Input() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    feedback: '',
    registrationRating: '',
    navigationRating: '',
    feedbackText: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/output', { state: { submittedData: formData } });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center mb-4">Registration Feedback Form</h2>
          <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name:</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name:</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone:</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
               <label htmlFor="feedback" className="form-label">How did you hear about us?</label>
                <select
                  className="form-control"
                  id="feedback"
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                >
               <option value="">Select an option</option>
               <option value="Social Media">Social Media</option>
               <option value="Friend/Family">Friend/Family</option>
               <option value="Search Engine">Search Engine</option>
               <option value="Advertisement">Advertisement</option>
               <option value="Other">Other</option>
              </select>
           </div>


            <div className="mb-3">
              <label className="form-label">Rate the Registration Process:</label>
              <div className="d-flex justify-content-around">
                <label className="form-check-label">
                  <input
                    type="radio"
                    name="registrationRating"
                    value="1"
                    onChange={handleChange}
                    required
                  />
                  😞
                </label>
                <label className="form-check-label">
                  <input
                    type="radio"
                    name="registrationRating"
                    value="2"
                    onChange={handleChange}
                  />
                  😕
                </label>
                <label className="form-check-label">
                  <input
                    type="radio"
                    name="registrationRating"
                    value="3"
                    onChange={handleChange}
                  />
                  😐
                </label>
                <label className="form-check-label">
                  <input
                    type="radio"
                    name="registrationRating"
                    value="4"
                    onChange={handleChange}
                  />
                  🙂
                </label>
                <label className="form-check-label">
                  <input
                    type="radio"
                    name="registrationRating"
                    value="5"
                    onChange={handleChange}
                  />
                  😃
                </label>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Rate Website Navigation:</label>
              <div className="d-flex justify-content-around">
                <label className="form-check-label">
                  <input
                    type="radio"
                    name="navigationRating"
                    value="1"
                    onChange={handleChange}
                    required
                  />
                  😞
                </label>
                <label className="form-check-label">
                  <input
                    type="radio"
                    name="navigationRating"
                    value="2"
                    onChange={handleChange}
                  />
                  😕
                </label>
                <label className="form-check-label">
                  <input
                    type="radio"
                    name="navigationRating"
                    value="3"
                    onChange={handleChange}
                  />
                  😐
                </label>
                <label className="form-check-label">
                  <input
                    type="radio"
                    name="navigationRating"
                    value="4"
                    onChange={handleChange}
                  />
                  🙂
                </label>
                <label className="form-check-label">
                  <input
                    type="radio"
                    name="navigationRating"
                    value="5"
                    onChange={handleChange}
                  />
                  😃
                </label>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="feedbackText" className="form-label">Additional Feedback:</label>
              <textarea
                className="form-control"
                id="feedbackText"
                name="feedbackText"
                value={formData.feedbackText}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Submit Feedback</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Input;
