import '../input.css'
import '../index.css'

function Header() {
    return (
        <header 
        className='w-screen 
        text-white
        bg-medpurple 
        flex 
        '>
            <div className="logo ">GetItDone</div>
            <ul className='flex '>
                {/* <li >Home</li>
                <li >About</li> */}
            </ul>
        </header>
    )
}

export default Header
