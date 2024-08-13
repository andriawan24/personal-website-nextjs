import React from "react";

export default function AdminSidebar() {
  return (
    <div className="px-10 py-8">
      <h1 className="text-2xl font-semibold text-color-text-primary">Admin</h1>
      <ul className="mt-10">
        <li className="text-color-text-primary font-semibold">
          <a href="/admin/projects">Projects</a>
        </li>
      </ul>
    </div>
  );
}
