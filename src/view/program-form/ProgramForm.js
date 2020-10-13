import React, { Component } from "react";

export class ProgramForm extends Component {
  render() {
    return (
      <div className="w-full bg-gray-300 p-4">
        <h1 className="font-bold text-xl">Create new series</h1>
        <div className="border rounded bg-white p-4">
          <h3>
            Title <span className="text-red-600">*</span>
          </h3>
          <input className="p-1 border bg-white rounded" />
          <h3>Author</h3>
          <input className="p-1 border bg-white rounded" />
          <h3>Boardcast Time</h3>
          <input className="p-1 border bg-white rounded" />
          <h3>Description</h3>
          <input className="p-1 border bg-white rounded" />
          <h3>Trailer Youtube Link</h3>
          <input className="p-1 border bg-white rounded" />
        </div>
      </div>
    );
  }
}

export default ProgramForm;
