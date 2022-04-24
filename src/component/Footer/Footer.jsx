import { React } from 'react';

export const Footer = () => {
    return(
        <>
            <div className='FooterStyles'>
                <div>
                    <h2 style={{width: '50vh'}}>Como en casa</h2>
                    <h6>© 2022 Lucas Camino™. All Rights Reserved.</h6>
                </div>
                <div className='FooterListStyle'>
                    <ul style={{listStyle: 'none', width:'25vh'}}>
                        <li>
                            <img src="https://firebasestorage.googleapis.com/v0/b/como-en-casa-react.appspot.com/o/linkedin-square-logo-24.png?alt=media&token=604e3a0d-175d-4cf4-925f-049db81dcae2" alt="Not Found" />
                            <a href="https://github.com/LucasCamino05" style={{textDecoration: 'none', color:'black'}}>Linkedin</a>
                        </li>
                        <li>
                        <img src="https://firebasestorage.googleapis.com/v0/b/como-en-casa-react.appspot.com/o/github-logo-24.png?alt=media&token=e45b81b0-8877-40d7-a733-e96dbf80118a" alt="Not Found" />
                            <a href="https://github.com/LucasCamino05" style={{textDecoration: 'none', color:'black'}}>GitHub</a>
                        </li>
                    </ul>
                    <ul style={{listStyle: 'none', width:'25vh'}}>
                        <li>
                            <img src="https://firebasestorage.googleapis.com/v0/b/como-en-casa-react.appspot.com/o/instagram-alt-logo-24.png?alt=media&token=2b8f9f51-d6fc-4de7-94ae-79a5ff02f128" alt="Not Found" />
                            <a href="https://github.com/LucasCamino05" style={{textDecoration: 'none', color:'black'}}>Instagram</a>
                        </li>
                        <li>
                            <img src="https://firebasestorage.googleapis.com/v0/b/como-en-casa-react.appspot.com/o/whatsapp-square-logo-24.png?alt=media&token=d947f792-d9d4-4f64-b4ae-a09d2d95355e" alt="Not Found" />
                            <a href="https://github.com/LucasCamino05" style={{textDecoration: 'none', color:'black'}}>Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}