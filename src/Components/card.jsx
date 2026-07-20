function Card(props) {
    return (
        <>
            <div style={{backgroundColor:props.bgcolor}} className='text-center px-10 py-5 border rounded-md flex-grow'>
                <h2 className='text-xl font-medium'>{props.title}</h2>
                <p>{props.subtitle}</p>
            </div>
        </>
    )
}
export default Card