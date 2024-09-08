import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import axios from 'axios'
import { useState } from "react"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import '../index.css';
import { SubHeading } from "../components/SubHeading"
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const navigate = useNavigate();
    const [firstName, setFristName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox onChange={e => {
          setFristName(e.target.value)
        }} placeholder="Naga Chaitanya Varma" label={"First Name"} />
        <InputBox onChange={e => {
          setLastName(e.target.value)
        }} placeholder="Vanapala" label={"Last Name"} />
        <InputBox onChange={e => {
          setUserName(e.target.value)
        }} placeholder="example@gmail.com" label={"Email"} />
        <InputBox onChange={e => {
          setPassword(e.target.value)
        }} placeholder="password ~ (happy) ykiyk" label={"Password"} />
        <div className="pt-4">
        <Button 
        onClick={ async () => {
            const requestBody = {
              firstName,
              lastName,
              username,
              password
            };
             await axios.post('http://localhost:3000/api/v1/user/signup', 
              requestBody, 
              {
                headers: {
                  'Content-Type': 'application/json',
                  'Content-Length': JSON.stringify(requestBody).length.toString(),
                }
              })
              .then(response => {
                localStorage.setItem('token', response.data.token);
              })
              .catch(error => {
                console.error('There was an error signing up!', error);
                if (error.response) {
                  console.log('Error data:', error.response.data);
                  console.log('Error status:', error.response.status);
                  console.log('Error headers:', error.response.headers);
                }
              });
              navigate("/dashboard");
          }} 
          label={"Sign up"} 
        />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}