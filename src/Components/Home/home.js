import React, {useState} from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRovers } from '../../Actions';
import NavBar from '../NavBar';
import style from './home.module.css'

export default function Home(){
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRovers());
    }, []);

    const rovers = useSelector(state => state?.rovers?.rovers);

    return (
        <main className={style.main_home}>
            <NavBar></NavBar>
            <div className={style.title}>
                <h1>¡Bienvenido!</h1>
                <h2>Selecciona un Rover y explora.</h2>
            </div>
            <div className={style.div_cards}>

            {
                rovers?.map(r => 

                    <div className={style.card} >
                        <div className={style.card_body}>
                        <Link to={`/${r.name}`}>
                            <img className="card-img-top" alt="Card image cap" 
                            src='https://static.nationalgeographicla.com/files/styles/image_3200/public/01-mars-rover-dust-storm.jpg?w=1600&h=900'
                            />
                        </Link>
                            <h5 className="card-title">{r.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Status: {r.status}</h6>
                            <p className="card-text">Lanzamiento: {r.launch_date}, Aterrizaje: {r.landing_date}.</p>
                        </div>
                    </div>
                )
            }
            </div>
        </main>
    )
}