import { React } from 'react';
import { Link } from 'react-router-dom';

export const Title = () =>{
    return(
        <>
            <div className='Title'>
                <main className='Title__Texto'>
                    
                        <h1 style={{marginBottom: '2rem', fontSize: '6vh'}}>
                            <span>Como en casa</span>
                        </h1>
                        <h2>
                            <span>Tu restaurant favorito</span>
                        </h2>    
                    
                    <span><h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quam consequuntur beatae iure deserunt aliquid fuga nulla quaerat a debitis voluptatum, similique ipsam laudantium perferendis officiis cumque ipsum labore vel?</h5></span>
                    <div className='Title_buttons'>
                        <div>
                            <Link to={'/store'} className='btn Buttons'>Tienda</Link>
                        </div>
                        <div>
                            <Link to={'/nosotros'} className='btn Buttons'>Nosotros</Link>
                        </div>
                    </div>
                </main>
                <article>
                    <img src="https://firebasestorage.googleapis.com/v0/b/como-en-casa-react.appspot.com/o/restaurante.jpg?alt=media&token=00236ee6-f22f-4ffc-a4f4-af0e2b9f1b42" alt="Not found" />
                </article>

            </div>
        </>
    )
}