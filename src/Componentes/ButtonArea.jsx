import React from 'react'

export default function ButtonArea(props) {
  return (
        <div className="d-flex justify-content-center m-auto">
          <button
            className="btn btn-success"
            id="restore"
            onClick={props.handleResetClick}
          >
            Reset
          </button>
          <button className="btn btn-danger" id="delete" onClick={props.handleDelete}>
            Delete
          </button>
        </div>
  )
}
