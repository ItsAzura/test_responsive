import React from 'react';

const Filters = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div className="mb-4">
        <h3 className="font-medium">Category</h3>
        <div>
          <input type="checkbox" id="truck" name="category" value="truck" />
          <label htmlFor="truck" className="ml-2">
            Truck
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="super-car"
            name="category"
            value="super-car"
          />
          <label htmlFor="super-car" className="ml-2">
            Super Car
          </label>
        </div>
        <div>
          <input type="checkbox" id="bed" name="category" value="bed" />
          <label htmlFor="bed" className="ml-2">
            Bed
          </label>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-medium">Condition</h3>
        <select className="mt-2 border p-2 rounded">
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>
      </div>
      <div className="mb-4">
        <h3 className="font-medium">Location</h3>
        <input
          type="text"
          className="mt-2 border p-2 rounded w-full"
          placeholder="Enter location"
        />
      </div>
      <div className="mb-4">
        <h3 className="font-medium">Filter by Price</h3>
        <input type="range" min="0" max="100" className="mt-2 w-full" />
      </div>
    </div>
  );
};

export default Filters;
