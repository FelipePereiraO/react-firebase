import React from "react";
import { auth } from "../firebase";

export default function Profile(){
    return(
        <div>
            <h1>Bem vindo {auth.currentUser.email}</h1>
        </div>
    )
}