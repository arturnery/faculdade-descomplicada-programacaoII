"use client"
import React, { useEffect, useState } from 'react'; // HOOK = gancho
import Link from 'next/link';

export default function PacientList() {
    const [pacients, setPacients] = useState(new Array());
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('http://127.0.0.1:3001/pacients', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem("token") || ''
            },
        }).then(response => response.json())
        .then(data => setPacients(data))
    }, [pacients]);

    const deletePacient = async (id: any) => {
        const add = await fetch(`http://127.0.0.1:3001/pacients/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem("token") || ''
            },
        });
        const content = await add.json();
        
        if (content.login) {
            window.location.reload();
        } else {
            setError(content.error);
        }
    }

    return (
        <>
            <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/home">Back</Link>
            <table className="min-w-full border-collapse border border-gray-300 mt-4">
                <thead>
                    <tr>
                        <th className='border border-slate-300 px-4 py-2'>Name</th>
                        <th className='border border-slate-300 px-4 py-2 text-center'>Birth Date</th>
                        <th className='border border-slate-300 px-4 py-2 text-center'>Email</th>
                        <th className='border border-slate-300 px-4 py-2 text-center'>Phone</th>
                        <th className='border border-slate-300 px-4 py-2 text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pacients.map((pacient: any) => (
                        <tr key={pacient._id}>
                            <td className='border border-slate-300 px-4 py-2'>{pacient.name}</td>
                            <td className='border border-slate-300 px-4 py-2 text-center'>{pacient.birthDate}</td>
                            <td className='border border-slate-300 px-4 py-2 text-center'>{pacient.email}</td>
                            <td className='border border-slate-300 px-4 py-2 text-center'>{pacient.phone}</td>
                            <td className='border border-slate-300 px-4 py-2 text-center'>
                                <Link href={`/pacient/edit/${pacient._id}`} className='bg-yellow-500 p-2 inline-block text-white text-sm rounded mr-2'>Edit</Link>
                                <button onClick={() => deletePacient(pacient._id)} className='bg-red-500 p-2 inline-block text-white text-sm rounded'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                {error && <div className="p-2 text-white bg-red-500 border border-red-600 rounded mt-4">{error}</div>}
            </div>
        </>
    );
}