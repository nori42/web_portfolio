import logo from '../assets/logo.svg';

function Header() {
    return (
        <div className='sticky top-0 flex items-center lg:pl-[190px] py-4 pointer-events-none'>
            <a href="#" className='pointer-events-auto'>
                <img src={logo} alt="logo" className='ml-[12px] h-14 logo' />
            </a>
        </div>
    );
}

export default Header;
