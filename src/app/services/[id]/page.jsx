import React from "react";

export default async function ServiceDetailPage({ params }) {
const {id} = await params;
  console.log("Id IS:", id)
  return (
    <div>
      <h1>ServiceDetailPage</h1>
      <p className="font-bold text-white">Id: {id}</p>
    </div>
  );
}
