import React, { Component } from "react";

export class ProgramForm extends Component {
  render() {
    return (
      <div className="w-full bg-gray-300 p-4">
        <h1 className="font-bold text-xl">Create new series</h1>
        <div className="border rounded bg-white p-4">
          <label className="block">
            Title <span className="text-red-600">*</span>
          </label>
          <input className="p-1 border bg-white rounded" />
          <label className="block">Author</label>
          <input className="p-1 border bg-white rounded" />
          <label className="block">Boardcast Time</label>
          <input className="p-1 border bg-white rounded" />
          <label className="block">Description</label>
          <input className="p-1 border bg-white rounded" />
          <label className="block">Trailer Youtube Link</label>
          <input className="p-1 border bg-white rounded" />
          <label className="block">Thumbnail</label>
          <input className="border bg-white p-1" type="file" />
          <label className="block">Banner</label>
          <input className="border bg-white p-1" type="file" />
          <label className="block">Short Story</label>
          <textarea className="p-1 bg-white border" rows={3}></textarea>
          <label className="block">Main Story</label>
          <textarea className="p-1 bg-white border" rows={3}></textarea>
          <label className="block">
            Category <span className="text-red-600">*</span>
          </label>
          <select className="p-1 border bg-white">
            <option>category-1</option>
          </select>
          <label className="block">Broadcast Channel</label>
          <select className="p-1 border bg-whtie">
            <option>----</option>
          </select>
          <label className="block">Released Date</label>
          <input type="datetime-local" className="p-1 border bg-whtie" />

          <div className="mt-8 flex justify-between items-center">
            <label className="font-semibold text-lg">Episode</label>
            <button className="text-sm border px-2 py-1 rounded">
              เพิ่ม episode
            </button>
          </div>
          <div className="border rounded shadow-md p-4">
            <div>
              <label className="mr-4">ลำดับที่ 1</label>
              <input
                className="p-1 border bg-white"
                type="text"
                placeholder="ชื่อ episode"
              />
            </div>
            <label className="block">ความยาว episode</label>
            <input type="text" className="border p-1 bg-whtie" />
            <label className="block">วัน-เวลาฉาย</label>
            <input type="datetime-local" className="p-1 border bg-white" />

            <div className="mt-4">
              <label className="mr-4">Part 1</label>
              <input
                type="text"
                className="border p-1 bg-white"
                placeholder="Youtube Link"
              />
            </div>
            <div className="flex justify-end">
              <button className="text-xs border px-2 py-1 rounded">
                เพิ่ม part
              </button>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="border px-4 py-1 rounded">Create Series</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProgramForm;
