"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function PatientCreate() {

    const router = useRouter();

    const [name, setName] = useState<string>('');
    const [birthDate, setBirthDate] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const addPatient = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (name && birthDate && email && phone) {

            const formData = {
                name,
                birthDate,
                email,
                phone
            }

            const response = await fetch('http://127.0.0.1:3001/postPatient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': sessionStorage.getItem("token") || ''
                },
                body: JSON.stringify(formData)
            });

            const content = await response.json();

            if (content.name) {
                router.push('/home');
            } else {
                setError(content.error);
            }
        }
    };

    return (
        <>
            <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/home">Back</Link>
            <form className='w-full max-w-md mx-auto p-4 border border-gray-200 rounded-md shadow-md' onSubmit={addPatient}>
                <h1 className='font-bold text-yellow-500 py-2 text-2xl'>Create Patient</h1>
                <div className='py-2'>
                    <label htmlFor="name" className='text-sm font-bold block mb-1'>Name</label>
                    <input 
                        type='text' 
                        id='name'
                        className='w-full border border-gray-300 p-2 rounded-sm'
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div className='py-2'>
                    <label htmlFor="birthDate" className='text-sm font-bold block mb-1'>Date of Birth</label>
                    <input 
                        type="date" 
                        id='birthDate'
                        className='w-full border border-gray-300 p-2 rounded-sm'
                        onChange={(e) => setBirthDate(e.target.value)} 
                    />
                </div>
                <div className='py-2'>
                    <label htmlFor="email" className='text-sm font-bold block mb-1'>Email</label>
                    <input 
                        type='email'
                        id='email'
                        className='w-full border border-gray-300 p-2 rounded-sm'
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className='py-2'>
                    <label htmlFor="phone" className='text-sm font-bold block mb-1'>Phone</label>
                    <input 
                        type='text'
                        id='phone'
                        className='w-full border border-gray-300 p-2 rounded-sm'
                        onChange={(e) => setPhone(e.target.value)} 
                    />
                </div>
                <div className='py-2'>
                    <button 
                        type="submit"
                        className="w-full p-2 text-white bg-green-500 border border-gray-200 rounded-md hover:bg-green-600"
                    >
                        Submit
                    </button>
                </div>
                {error && <div className="p-2 text-white bg-red-500 rounded-md mt-4">{error}</div>}
            </form>
        </>
    )
}
