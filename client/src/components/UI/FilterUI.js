import React from "react";

export default function FilterUI({ sorts, sorting, cat, filteringName }) {
  return (
    <div>
      {/* filtering by name */}
      <div className="select_filter">
        <select value={sorts} onChange={sorting}>
          <option value="All">All</option>
          <option value="On-Hold">On-Hold</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        {sorts}
      </div>
    </div>
  );
}
