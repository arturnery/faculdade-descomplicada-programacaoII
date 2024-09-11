import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome</h1>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Doctors</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Link
                className="text-blue-600 hover:underline"
                href="/doctor/create"
              >
                Create new doctor
              </Link>
            </li>
            <li>
              <Link
                className="text-blue-600 hover:underline"
                href="/doctor/list"
              >
                List all doctors
              </Link>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold">Patients</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Link
                className="text-blue-600 hover:underline"
                href="/pacient/create"
              >
                Create new patient
              </Link>
            </li>
            <li>
              <Link
                className="text-blue-600 hover:underline"
                href="/pacient/list"
              >
                List all patients
              </Link>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold">Appointments</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Link
                className="text-blue-600 hover:underline"
                href="/appointment/create"
              >
                Create new appointment
              </Link>
            </li>
            <li>
              <Link
                className="text-blue-600 hover:underline"
                href="/appointment/list"
              >
                List all appointments
              </Link>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold">Other</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Link
                className="text-blue-600 hover:underline"
                href="/fake"
              >
                Access FakeApi
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
