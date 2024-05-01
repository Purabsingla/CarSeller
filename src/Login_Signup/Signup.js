import video from '../assests/Background_V2_R.mp4'
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useState } from 'react';
import { NavbarDefault } from '../Caro';
const Vid2 = () => {
    const navigate = useNavigate();
    const [name, usename] = useState("")
    const [pass, usepass] = useState("")
    const [mail, usemail] = useState("")
    const [check, usecheck] = useState(false)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            mail,
            pass
        })
    }
    function addData() {
        alert("working")
        fetch('http://localhost:3001/signup', requestOptions).then(response => response.json()).then(data => console.log("Response ", data))
    }
    return (
        <>
            <div className='fixed inset-0 z-10'>
                <NavbarDefault />
            </div>
            <div className="h-screen w-full relative overflow-hidden">
                <video autoPlay loop muted className="w-screen h-screen object-cover bg-auto">
                    <source src={video} type="video/mp4" />
                    <RemoveScrollBar />
                </video>
                <div className='absolute top-28 custompos border-solid border-2 border-gray-800 py-5 px-20 backdrop-blur-sm saturate-200 bg-black bg-opacity-50 z-20'>
                    <Card color="transparent" shadow={false}>
                        <Typography variant="h4" color="white">
                            Sign Up
                        </Typography>
                        <Typography color="white" className="mt-1 font-normal">
                            Nice to meet you! Enter your details to register.
                        </Typography>
                        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="white" className="-mb-3 text-lg">
                                    UserName
                                </Typography>
                                <Input
                                    type='text'
                                    placeholder="name123"
                                    className=" !border-white border-2 focus:!border-gray-500 text-white font-bold"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    onChange={(e) => usename(e.target.value)}
                                />
                                {/* //color="white"  text-[#6b7280]  text-slate-100
                                    text-[#6b7280]
                                     text-[#b2c2df]
                                     border-t-blue-gray-200
                                */}
                                <Typography variant="h6" color="white" className="-mb-3 text-lg">
                                    Your Email
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="name@mail.com"
                                    className=" !border-white border-2 focus:!border-gray-500 text-white text-base"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    onChange={(e) => usemail(e.target.value)}
                                />
                                <Typography variant="h6" color="white" className="-mb-3 text-lg">
                                    Password
                                </Typography>
                                <Input
                                    type="password"
                                    size="lg"
                                    placeholder="********"
                                    className=" !border-white border-2 focus:!border-gray-500 text-white"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    onChange={(e) => usepass(e.target.value)}
                                />
                            </div>
                            <Checkbox
                                label={
                                    <Typography
                                        variant="small"
                                        color="white"
                                        className="flex items-center font-normal text-lg"
                                    >
                                        I agree the
                                        <a
                                            href="#"
                                            className="font-medium transition-colors hover:text-blue-900"
                                        >
                                            &nbsp;Terms and Conditions
                                        </a>
                                    </Typography>
                                }
                                containerProps={{ className: "-ml-2.5" }}
                                onChange={() => { usecheck(!check) }}
                            />
                            <Button className="mt-6" fullWidth disabled={!check} onClick={addData}>
                                sign up
                            </Button>
                            <Typography color="white" className="mt-4 text-center text-lg">
                                Already have an account?{" "}
                                <a onClick={() => navigate('/login')} className="font-medium text-slate-800 transition-colors hover:text-blue-900 cursor-pointer">
                                    Log In
                                </a>
                            </Typography>
                        </form>
                    </Card>
                </div>
            </div>
        </>
    )
}
export default Vid2;