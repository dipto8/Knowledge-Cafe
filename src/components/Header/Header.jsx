
import profile from '../../assets/image/profile.png'


const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 m-4 border-2 bg-red-300 '>
            <h1 className='text-6xl font-bold'>Knowledge Cafe</h1>
            <img src= {profile} alt="" />
        </header>
    );
};

export default Header;