

export const Item = ({id, Producto, Tipo, Img, Stock, Descripcion}) => {

    return(
        <>
            <div className="card" style="width: 18rem;">
                <img src={Img} className="card-img-top" alt="Image Not Found"/>
                <div className="card-body">
                    <p className="card-text">{Descripcion}</p>
                </div>
            </div>
        </>
    )
}