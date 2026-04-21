export default function BlueBarIcone({icon}){
    return(
        <div className="col-md-2 d-flex align-items-center justify-content-center">
            <img className="m-2" src={icon.image} alt={icon.alt}/>
                <p className="m-2">
                    {icon.text}
                </p>           
        </div>
    )
}