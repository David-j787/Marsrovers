import  React, {useEffect, useState} from 'react';
import NavBar from '../NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { 
    getRoverCameras, 
    getPhotos,
    getPhotosSol,
    getPhotosDate 
} from '../../Actions';
import './rover.css';



export default function Rovers({rover, may}){

    const dispatch = useDispatch();

    const cameras = useSelector(state => state?.roverCameras.rover);
    const photos = useSelector(state => state?.photos.photos);
    
    useEffect(() => {
        dispatch(getRoverCameras(rover));
        // dispatch(getPhotosSol(rover, input.sol, page));
    }, [dispatch]);

    const [input, setInput] = useState({
        sol: 0,
        camera: ''
    });
    const [page, setPage] = useState(1);
    
    const [date, setDate] = useState('');


    function handleChangeCamera(e){
        e.preventDefault();
        setInput({
            ...input,
            camera: e.target.value,
        })
        console.log(input)
    }

    function handleChangeSol(e){
        e.preventDefault();
        setInput({
            ...input,
            sol: Number(e.target.value)
        })
        console.log(input)
    }

    function handleSumbitInput(e){
        e.preventDefault();
        if(!input.camera && !date){
            dispatch(getPhotosSol(rover, input.sol, page));
            setPage(1);
        }
        if(rover, input.sol, page, input.camera && !date){
            dispatch(getPhotos(rover, input.sol, page, input.camera));
            setPage(1);
        }
        if(date){
            dispatch(getPhotosDate(rover, date.date, page));
        }
    }

    function handleChangePaginaionPlus(e){
        e.preventDefault();
        setPage(old => old + 1 );
        console.log(input, page)
    }

    function handleChangePaginaionMinus(e){
        e.preventDefault();
        setPage(old => Math.max(old -1, 1));
        console.log(input, page)
    }

    function handleChangePage(e){
        e.preventDefault();
        if(!input.camera && !date){
            dispatch(getPhotosSol(rover, input.sol, page));
        }
        if(rover, input.sol, page, input.camera && !date){
            dispatch(getPhotos(rover, input.sol, page, input.camera));
        }
        if(date){
            dispatch(getPhotosDate(rover, date.date, page));
        }
    }

    function handleChangeDate(e){
        e.preventDefault();
        setDate({
            ...date,
            date: e.target.value
        })
        console.log(date)
    }

    return(
        <main className='main_photos'>
            <NavBar rover = {may}/>

            <h3 className='title_rover'>Puedes filtrar por SOL y cámara pero no con fecha a la vez.</h3>
            
            <div className='btn_up'>
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#"> ⏫</a></li>
                    </ul>
                </nav>
            </div>
            
            <form className='form' onSubmit={handleSumbitInput}>
                <div className='hijo_form'>

                    <div className='range_sol'>
                        <select className='form_inputs'
                        onChange={e => handleChangeCamera(e)}>
                            <option value='' defaultValue>Camera</option>
                        {
                            cameras?.cameras.map(c => 
                                <>
                                    <option value={c.name.toLowerCase()}>{c.name}</option>
                                </>       
                            )
                        }
                        </select>
                        <span>
                            <input className='form_inputs' 
                            type={'number'}
                            placeholder={'SOL (0-2890)'} 
                            min='0'
                            max='2890'
                            onChange={e => handleChangeSol(e)}
                            />
                        </span>
                    </div>

                    <div>
                        <input
                        id='date_input'
                        type={'date'}
                        className='form_inputs'
                        onChange={e => handleChangeDate(e)}
                        />
                        <span>
                    <button id='get_btn'className="btn btn-outline-info" type={'submit'}>Obtener...</button>
                        </span>
                    </div>

                </div>
            </form>
            

                <div className='div_cards'>

                {
                    photos?.length > 0 
                    ? photos?.map(p => 
                        <div className="card">
                            <img className="card-img" src={p.img_src} alt="Card image cap"/>
                            <div className='card_date_body'>
                                <a>{p.earth_date}</a>
                            </div>
                        </div>
                    )
                    :
                    <div className='div_empty_state'>
                        <div>
                            <a>No hay ningún elemento...</a>
                        </div>
                        <img className='gif_marte' src='https://reygif.com/media/2/marte-planeta-21256.gif'/>
                    </div>
                }
                </div>
                <div className='pages'>
                    <nav aria-label="...">
                        <ul className="pagination">
                            <li className="page-item">
                            <a className="page-link"  href="" onClick={e => handleChangePaginaionMinus(e)}>Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">{page}</a></li>
                            <li className="page-item">
                            <a className="page-link" href="#" onClick={e => handleChangePaginaionPlus(e)}>Next</a>
                            </li>
                            <li className="page-item">
                            <a className="page-link" href="#" onClick={e => handleChangePage(e)}>Actualizar página</a>
                            </li>
                        </ul>
                    </nav>
                </div>
        </main>
    )
}
