
"use client";

import { useState } from "react";
import { supabase } from "./lib/supabase";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    // Insert data into Supabase
    const { data, error } = await supabase
      .from("students")
      .insert([
        {
          name: name,
          email: email,
        },
      ])
      .select();

    if (error) {
      setMessage("Error: " + error.message);
    } else {
      setMessage("Student inserted successfully!");

      setName("");
      setEmail("");

      console.log(data);
    }

    setLoading(false);
  }

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-5">
        Student Management
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
          required
        />

        <input
          type="email"
          placeholder="Student Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white p-2 rounded"
        >
          {loading ? "Saving..." : "Submit"}
        </button>
      </form>

      {message && <p className="mt-4">{message}</p>}
    </main>
  );
}
