import logo from '../assets/logo.svg';

function Header() {
    return ( 
        <div className='sticky top-0 flex items-center px-3 py-4 pointer-events-none'>
            <a href="#" className='pointer-events-auto'>
                <img src={logo} alt="logo" className='h-14 logo' />
            </a>
      </div>
     );
}

export default Header;