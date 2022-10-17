import React,{useState} from 'react'

import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,storage,db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

import {useNavigate,Link} from "react-router-dom"

import Add from "../images/addAvatar.png"

function Register() {

    const [err,setErr] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

       

    try{
        const result = await createUserWithEmailAndPassword(auth, email, password);

        const storageRef = ref(storage, displayName);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
        
        (error) => {
            setErr(true)
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
                console.log(result.user)
            await updateProfile(result.user,{
                displayName,
                photoURL:downloadURL,

            })
            // Add a new document in collection "users"
            await setDoc(doc(db, "users", result.user.uid), {
                uid: result.user.uid,
                displayName,
                email,
                photoURL:downloadURL,
            });
            //chats
            await setDoc(doc(db,"userChats",result.user.uid),{
               
            })
            navigate("/")
            });
            
        }
        );

    }catch(err){
        setErr(true)
    }
    

    };

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>
               iChat
            </span>
            <span className='title'>
                Resgister
            </span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder ="Name" />
                <input type="email" placeholder ="email" />
                <input type="password" placeholder ="pasword" />
                <input type="file"  id="file" style={{display:"none"}}/>
                <label htmlFor="file">
                    <img src={Add} alt="" className=''/> <span>Add an avatar</span> 
                </label>
                <button>Sign up</button>
                {err && <span>Sorry Something went wrong!</span>}
                <p>you have an account? <Link to="/login">Login</Link> </p>
            </form>
        </div>
    </div>
  )
}

export default Register