import { useState } from 'react';
import video from '../assests/BackgroundVideoRemake.mp4';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import {
    Navbar,
    MobileNav,
    IconButton,
} from "@material-tailwind/react";
import { NavbarDefault } from '../Caro';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const tst =  ()=>{
    toast("Wow so easy!");
}
const Vid = () => {
    const [name, usename] = useState("")
    const [pass, usepass] = useState("")
    const [check, usecheck] = useState(false)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            pass
        })
    }
    // function addData() {
    //     alert("working")
    //     fetch('http://localhost:3001/login', requestOptions).then(response => response.json()).then(data => console.log("Response ", data))
    // }
    return (
        <>
            <div className='relative overflow-hidden'>
            
                <video autoPlay loop muted className="w-screen h-screen object-cover">
                    <source src={video} type="video/mp4" />
                </video>
                <div className='absolute top-40 custompos border-solid border-2 border-gray-800 py-5 px-20 backdrop-blur-sm bg-black bg-opacity-40 z-20'>
                    <Card color="transparent" shadow={false}>
                        <Typography variant="h4" color="white">
                            Login
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal text-white">
                            Nice to meet you! Enter your details for Login ^-^.
                        </Typography>
                        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3 text-white">
                                    UserName
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="Example:Admin123"
                                    className=" !border-white border-2 focus:!border-gray-400 text-white"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    onChange={(e) => usename(e.target.value)}
                                />
                                <Typography variant="h6" color="blue-gray" className="-mb-3 text-white">
                                    Password
                                </Typography>
                                <Input
                                    type="password"
                                    size="lg"
                                    placeholder="********"
                                    className=" !border-white border-2 focus:!border-gray-400 text-white"
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
                                        color="gray"
                                        className="flex items-center font-normal text-white"
                                    >
                                        Remember me

                                    </Typography>

                                }
                                onChange={() => usecheck(!check)}
                                containerProps={{ className: "-ml-2.5" }}
                            />
                            <Button className="mt-6" fullWidth onClick={tst}>
                                Login
                            </Button>
                            <ToastContainer />
                        </form>
                    </Card>
                </div>
            </div>
            <div className='fixed inset-0 z-10'>
                <NavbarDefault />
            </div>
        </>
    )
}
export default Vid;