function Header(props) {
    return (
        <>
            <h1 className='text-3xl font-semibold'>Hello {props.username} !</h1>
            <p>I help you to Manage or Add your activites :)</p>
        </>
    )
}

export default Header