"use client";
import React, { useEffect, useState } from 'react'; // HOOK = hook
import Link from 'next/link';

export default function AppointmentList() {
    const [appointments, setAppointments] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [doctors, setDoctors] = useState<any[]>([]);
    const [patients, setPatients] = useState<any[]>([]);

    useEffect(() => {
        fetch('http://127.0.0.1:3001/appointments', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem("token") || ''
            },
        })
        .then(response => response.json())
        .then(data => {
            setAppointments(data);
        });
    }, []);

    useEffect(() => {
        fetch('http://127.0.0.1:3001/doctors', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem("token") || ''
            },
        })
        .then(response => response.json())
        .then(data => {
            setDoctors(data);
        });
    }, []);

    useEffect(() => {
        fetch('http://127.0.0.1:3001/patients', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem("token") || ''
            },
        })
        .then(response => response.json())
        .then(data => {
            setPatients(data);
        });
    }, []);

    const deleteAppointment = async (id: string) => {
        const response = await fetch(`http://127.0.0.1:3001/appointments/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem("token") || ''
            },
        });
        const content = await response.json();

        if (content.date) {
            setAppointments(appointments.filter(app => app._id !== id)); // Update state without reloading
        } else {
            setError(content.error);
        }
    };

    const findDoctorName = (id: string) => {
        const doctor = doctors.find(doctor => doctor._id === id);
        return doctor ? doctor.name : 'Unknown';
    };

    const findPatientName = (id: string) => {
        const patient = patients.find(patient => patient._id === id);
        return patient ? patient.name : 'Unknown';
    };

    return (
        <>
            <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/home">Back</Link>
            <table className="min-w-full divide-y divide-gray-200 mt-4">
                <thead className="bg-gray-50">
                    <tr>
                        <th className='border border-slate-300 py-2 px-4 text-left'>Date</th>
                        <th className='border border-slate-300 py-2 px-4 text-left'>Doctor</th>
                        <th className='border border-slate-300 py-2 px-4 text-left'>Patient</th>
                        <th className='border border-slate-300 py-2 px-4 text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {appointments.map((appointment) => (
                        <tr key={appointment._id}>
                            <td className='border border-slate-300 py-2 px-4'>{appointment.date}</td>
                            <td className='border border-slate-300 py-2 px-4'>{findDoctorName(appointment.doctorId)}</td>
                            <td className='border border-slate-300 py-2 px-4'>{findPatientName(appointment.patientId)}</td>
                            <td className='border border-slate-300 py-2 px-4 text-center'>
                                <Link href={`/prescription/${appointment._id}/create`} className='bg-green-500 p-2 text-white text-sm rounded-md ml-2'>Create Prescription</Link>
                                <Link href="/prescription/upload" className='bg-blue-500 p-2 text-white text-sm rounded-md ml-2'>Upload Prescription</Link>
                                <Link href={`/appointment/edit/${appointment._id}`} className='bg-yellow-500 p-2 text-white text-sm rounded-md ml-2'>Edit</Link>
                                <button onClick={() => deleteAppointment(appointment._id)} className='bg-red-500 p-2 text-white text-sm rounded-md'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {error && <div className="p-2 text-white bg-red-500 rounded-md mt-4">{error}</div>}
        </>
    );
}
