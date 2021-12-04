import React, { useState } from "react";
import { onAuthStateChanged, createUserWithEMAIL, signOut } from "@firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { async } from "@firebase/util";

export default function Profile(props){
    const [ user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser);
    })
    const logout = async () =>{
        await signOut(auth);
    }

    return(
        <>
        {
            user ?(
                <div>
                    <h1>Bem vindo {user?.email}</h1>
                    <Link to="/" onClick={logout}>Quit</Link>
                </div>             
            ) : (
                <div>
                    ERROR, FAÇA LOGIN!
                </div>
            )
        }
        </>

    )
}