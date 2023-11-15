import { React, useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Cookies from "universal-cookie"
import useAuth from '../hooks/useAuth';
import '../css/login.css'
import axios from '../API/axios';
const LOGIN_URL = '/admin/login';

const cookies = new Cookies()
const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            console.log(JSON.stringify(response?.data));            
            const Token = response?.data?.token;
            cookies.set('Token', Token, {
                path: '/'
            })
            setAuth({email, password, Token})
            setEmail('');
            setPassword('');
            navigate(from, { replace: true });
        } catch (err) {

            
            if (!err?.
                response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }



    return (

        <section 
            style={{  background: "url(/background.jpeg)" }}
        >
            

            <form onSubmit={handleSubmit} >

            <div className="flex h-screen w-screen items-center overflow-hidden px-2">
           
  <div className="relative flex w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto">
    <div className="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-blue-600 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"></div>
    <div className="mx-auto mb-2 space-y-3">
    
      <h1 className="text-center text-3xl font-bold text-gray-700">Sign in</h1>
      <p className="text-gray-500">Sign in to access Dashboard</p>
    </div>

    <div>
      <div className="relative mt-2 w-full">
      <p ref={errRef} className={  errMsg ? "errmsg" : "offscreen" } aria-live="assertive" style={{color:"red"}}>{errMsg}</p>
        <input type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
        <label htmlFor="email" className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"> Enter Your Email </label>
      </div>
    </div>

    <div>
      <div className="relative mt-2 w-full">
        <input  type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
        <label htmlFor="password" className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"> Enter Your Password</label>
      </div>
    </div>
    <div className="flex w-full items-center">
    <button className="shrink-0 inline-block w-36 rounded-lg bg-blue-600 py-3 font-bold text-white">Login</button>
    </div>
    
  </div>
 
</div>               
                </form>
        </section>

    )
}


export default Login