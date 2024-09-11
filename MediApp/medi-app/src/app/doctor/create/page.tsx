"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function DoctorCreate() {

    const router = useRouter();

    const [name, setName] = useState<string>('');
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [medicalSpecialty, setMedicalSpecialty] = useState<string>('');
    const [medicalRegistration, setMedicalRegistration] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const addDoctor = async (e: any) => {
        e.preventDefault();
        setError(null);

        if (name != "" && login != ""
            && password != "" && medicalSpecialty != ""
            && medicalRegistration != "" && email != "" && phone != "") {

            const formData = {
                name: name,
                login: login,
                password: password,
                medicalSpecialty: medicalSpecialty,
                medicalRegistration: medicalRegistration,
                email: email,
                phone: phone
            }

            const add = await fetch('http://127.0.0.1:3001/postDoctor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': sessionStorage.getItem("token") || ''
                },
                body: JSON.stringify(formData)
            });

            const content = await add.json();

            if (content.login) {
                router.push('/home');
            } else {
                setError(content.error);
            }

        }


    };

    return (
        <>
            <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/home">Back</Link>
            <form className='w-full max-w-lg mx-auto p-4' onSubmit={addDoctor}>
                <span className='font-bold text-yellow-500 py-4 block underline text-2xl'>Doctor Registration Form</span>
                <div className='w-full py-2'>
                    <label htmlFor="name" className='text-sm font-bold py-2 block'>Name</label>
                    <input type='text' name='name' className='w-full border border-gray-300 p-3 rounded-md' onChange={(e: any) => setName(e.target.value)} />
                </div>
                <div className='w-full py-2'>
                    <label htmlFor="login" className='text-sm font-bold py-2 block'>Login</label>
                    <textarea name='login' className='w-full border border-gray-300 p-3 rounded-md' onChange={(e: any) => setLogin(e.target.value)} />
                </div>
                <div className='w-full py-2'>
                    <label htmlFor="password" className='text-sm font-bold py-2 block'>Password</label>
                    <textarea name='password' className='w-full border border-gray-300 p-3 rounded-md' onChange={(e: any) => setPassword(e.target.value)} />
                </div>
                <div className='w-full py-2'>
                    <label htmlFor="medicalSpecialty" className='text-sm font-bold py-2 block'>Medical Specialty</label>
                    <textarea name='medicalSpecialty' className='w-full border border-gray-300 p-3 rounded-md' onChange={(e: any) => setMedicalSpecialty(e.target.value)} />
                </div>
                <div className='w-full py-2'>
                    <label htmlFor="medicalRegistration" className='text-sm font-bold py-2 block'>Medical Registration</label>
                    <textarea name='medicalRegistration' className='w-full border border-gray-300 p-3 rounded-md' onChange={(e: any) => setMedicalRegistration(e.target.value)} />
                </div>
                <div className='w-full py-2'>
                    <label htmlFor="email" className='text-sm font-bold py-2 block'>Email</label>
                    <textarea name='email' className='w-full border border-gray-300 p-3 rounded-md' onChange={(e: any) => setEmail(e.target.value)} />
                </div>
                <div className='w-full py-2'>
                    <label htmlFor="phone" className='text-sm font-bold py-2 block'>Phone</label>
                    <textarea name='phone' className='w-full border border-gray-300 p-3 rounded-md' onChange={(e: any) => setPhone(e.target.value)} />
                </div>
                <div className='w-full py-4'>
                    <button className="w-full p-3 text-white bg-green-500 border border-gray-300 rounded-md hover:bg-green-600">Submit</button>
                </div>
                <div>
                    {error && <div className="p-3 text-white bg-red-500 border border-red-600 rounded-md mt-4">{error}</div>}
                </div>
            </form>
        </>
    );

}