import { useState } from "react"

export default function Register(){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

    async function handleRegister(e) {
        e.preventDefault();
        const res = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        console.log(data);
    }
    

    return(
        <>

        <div className="background">
                <div className="backgroundblock1 bg-white">print("Hello World!!");</div>
                <div className="backgroundblock2 bg-red-500">print("Hello World!!");</div>
                <div className="backgroundblock3 bg-white">print("Hello World!!");</div>
                <div className="backgroundblock4 bg-red-500">print("Hello World!!");</div>
                <div className="backgroundblock5 bg-white">print("Hello World!!");</div>
                <div className="backgroundblock6 bg-red-500">print("Hello World!!");</div>
                <div className="backgroundblock7 bg-white">print("Hello World!!");</div>
                <div className="backgroundblock8 bg-red-500">print("Hello World!!");</div>
                <div className="backgroundblock9 bg-white">print("Hello World!!");</div>
                <div className="backgroundblock10 bg-red-500">print("Hello World!!");</div>
                <div className="backgroundblock11 bg-white">print("Hello World!!");</div>
                <div className="backgroundblock12 bg-red-500">print("Hello World!!");</div>
                <div className="backgroundblock13 bg-white">print("Hello World!!");</div>
                <div className="backgroundblock14 bg-red-500">print("Hello World!!");</div>
                <div className="backgroundblock15 bg-white">print("Hello World!!");</div>
                <div className="backgroundblock16 bg-red-500">print("Hello World!!");</div>
                <div className="backgroundblock17 bg-white">print("Hello World!!");</div>
        </div>

        <div className="chose">
        <form onSubmit={handleRegister}>
            <input
                type="text"
                placeholder="name"
                value={formData.name || ''}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full"
            />
            <input
                type="text"
                placeholder="email"
                value={formData.email || ''}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full"
            />
            <input
                type="password"
                placeholder="password"
                value={formData.password || ''}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full"
            />
            <input
                type="password"
                placeholder="password_confirmation"
                value={formData.password_confirmation || ''}
                onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })}
                className="w-full"
            />
            <div className="flex justify-center">
                <button type="submit" className="primary_button">Register</button>
            </div>
        </form>
        </div>

        </>
    )
}