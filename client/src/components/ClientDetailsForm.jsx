import React, { useState } from "react";

const ClientDetailsForm = ({ onDetailsSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onDetailsSubmit({ name, email, phone });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Client Details</h2>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2 rounded w-full"
          placeholder="Your Name"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 rounded w-full"
          placeholder="Your Email"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="phone">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="border p-2 rounded w-full"
          placeholder="Your Phone Number"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-gray-500 text-white rounded"
      >
        Submit Details
      </button>
    </form>
  );
};

export default ClientDetailsForm;
