import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";

export default function Camaras(){

    const dispatch = useDispatch();

    return(
        <main>
            <NavBar></NavBar>
            Camaras
        </main>
    )
}