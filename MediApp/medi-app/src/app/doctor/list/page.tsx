"use client"
import React, { useEffect, useState } from 'react'; // HOOK = gancho
import Link from 'next/link';

export default function DoctorList() {
    const [doctors, setDoctors] = useState(new Array());
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('http://127.0.0.1:3001/doctors', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem("token") || ''
            },
        }).then(response => response.json())
        .then(data => setDoctors(data))
    }, [doctors]);

    const deleteDoctor = async (id: any) => {
        const add = await fetch(`http://127.0.0.1:3001/doctors/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem("token") || ''
            },
        });
        const content = await add.json();
        console.log(content);
        if (content.login) {
            window.location.reload();
        } else {
            setError(content.error);
        }
    }

    return (
        <>
            <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/home">Back</Link>
            <table className='w-full border-collapse mt-4'>
                <thead>
                    <tr>
                        <td className='border border-slate-300 p-2 font-bold'>Name</td>
                        <td className='border border-slate-300 p-2 font-bold text-center'>Login</td>
                        <td className='border border-slate-300 p-2 font-bold text-center'>Medical Specialty</td>
                        <td className='border border-slate-300 p-2 font-bold text-center'>Medical Registration</td>
                        <td className='border border-slate-300 p-2 font-bold text-center'>Email</td>
                        <td className='border border-slate-300 p-2 font-bold text-center'>Phone</td>
                        <td className='border border-slate-300 p-2 font-bold text-center'>Actions</td>
                    </tr>
                </thead>

                <tbody className="doctors" id="doctors">
                    {!!doctors && doctors.map((doctor: any) => (
                        <tr key={doctor._id}>
                            <td className='border border-slate-300 p-2'>{doctor.name}</td>
                            <td className='border border-slate-300 p-2 text-center'>{doctor.login}</td>
                            <td className='border border-slate-300 p-2 text-center'>{doctor.medicalSpecialty}</td>
                            <td className='border border-slate-300 p-2 text-center'>{doctor.medicalRegistration}</td>
                            <td className='border border-slate-300 p-2 text-center'>{doctor.email}</td>
                            <td className='border border-slate-300 p-2 text-center'>{doctor.phone}</td>
                            <td className='border border-slate-300 p-2 text-center'>
                                <button onClick={(_e) => deleteDoctor(doctor._id)} className='bg-red-500 p-2 text-white text-sm rounded-md hover:bg-red-600'>Delete</button>
                                <Link href={`/doctor/edit/${doctor._id}`} className='bg-yellow-500 p-2 inline-block ml-3 text-white text-sm rounded-md hover:bg-yellow-600'>Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='mt-4'>
                {error && <div className="p-3 text-white bg-red-500 border border-red-600 rounded-md">{error}</div>}
            </div>
        </>
    )
}