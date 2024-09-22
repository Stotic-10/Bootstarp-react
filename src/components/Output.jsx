import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Output() {
  const location = useLocation();
  const { submittedData } = location.state;
  const [viewMode, setViewMode] = useState('');

  const handleViewMode = (mode) => {
    setViewMode(mode);
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2>Submitted Data</h2>
        <button
          className="btn btn-outline-primary me-2"
          onClick={() => handleViewMode('table')}
        >
          View as Table
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => handleViewMode('card')}
        >
          View as Card
        </button>
      </div>

      {viewMode === 'table' && (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Field</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(submittedData).map((key) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{submittedData[key]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {viewMode === 'card' && (
        <div className="card shadow-sm">
          <div className="card-body">
            {Object.keys(submittedData).map((key) => (
              <p key={key}>
                <strong>{key}: </strong> {submittedData[key]}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Output;
