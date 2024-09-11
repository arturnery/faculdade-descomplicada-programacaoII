"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function AppointmentCreate() {
  const router = useRouter();
  const [date, setDate] = useState<string>('');
  const [doctorId, setDoctorId] = useState<string>('');
  const [pacientId, setPacientId] = useState<string>('');
  const [doctors, setDoctors] = useState<any[]>([]);
  const [pacients, setPacients] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://127.0.0.1:3001/doctors', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem("token") || ''
      },
    })
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => setError("Failed to fetch doctors."));
  }, []);

  useEffect(() => {
    fetch('http://127.0.0.1:3001/pacients', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem("token") || ''
      },
    })
      .then(response => response.json())
      .then(data => setPacients(data))
      .catch(error => setError("Failed to fetch pacients."));
  }, []);

  const addAppointment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!date || !doctorId || !pacientId) {
      setError("Please fill in all fields.");
      return;
    }

    const formData = { date, doctorId, pacientId };

    try {
      const response = await fetch('http://127.0.0.1:3001/postAppointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': sessionStorage.getItem("token") || ''
        },
        body: JSON.stringify(formData)
      });

      const content = await response.json();
      if (response.ok && content.date) {
        router.push('/home');
      } else {
        setError(content.error || "An unexpected error occurred.");
      }
    } catch (error) {
      setError("Failed to connect to the server.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mb-4 inline-block" href="/home">
          Back
        </Link>
        <h1 className="text-3xl font-bold text-center mb-6 text-yellow-500">Create Appointment</h1>
        <form onSubmit={addAppointment}>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <input
              type="datetime-local"
              id="date"
              name="date"
              className="w-full border border-gray-300 rounded-lg p-2"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="doctorId" className="block text-sm font-medium text-gray-700 mb-2">Doctor</label>
            <select
              id="doctorId"
              name="doctorId"
              className="w-full border border-gray-300 rounded-lg p-2"
              value={doctorId}
              onChange={(e) => setDoctorId(e.target.value)}
              required
            >
              <option value="" disabled>Select a doctor</option>
              {doctors.map((doctor) => (
                <option key={doctor._id} value={doctor._id}>{doctor.name}</option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="pacientId" className="block text-sm font-medium text-gray-700 mb-2">Patient</label>
            <select
              id="pacientId"
              name="pacientId"
              className="w-full border border-gray-300 rounded-lg p-2"
              value={pacientId}
              onChange={(e) => setPacientId(e.target.value)}
              required
            >
              <option value="" disabled>Select a patient</option>
              {pacients.map((pacient) => (
                <option key={pacient._id} value={pacient._id}>{pacient.name}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Submit
          </button>
          {error && (
            <div className="mt-4 p-2 text-white border border-gray-200 rounded-lg bg-red-500">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
