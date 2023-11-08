import { UserCircle2 } from 'lucide-react';
import '../Assests/css/style.css';
export const Form2 =() =>{

    const myFuction =()=>{
        alert('Form submitted succesfully')
    }

    return (
        <>
        <title >Registration Form</title><br/>
        <div className='of'>
        <form onSubmit={myFuction} >
            <h1><b>Login <UserCircle2 /></b></h1>
            <input type="textfield" className='a' placeholder='Name'></input><br/>
            <input type="temail" className='a' placeholder='Email'></input><br/>
            <input type="tel" className='a' placeholder='Phone Number'></input><br/>
            <input type="textfield" className='a'  placeholder='Username'></input><br/>
            <input type="password" className='a'  placeholder='Password'></input><br/>
            <br/>
            <button className='r'>Submit</button>
        </form>
        </div>
        </>
    )
}