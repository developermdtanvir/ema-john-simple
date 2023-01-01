import { FiLogIn } from 'react-icons/fi';
import logo from './../../images/favicon.ico';
import './Navigation.css';
export const Navigation = () => {
    return (
        <div className=' border-b'>
            <div className=' flex justify-between pl-36 pr-36'>
                <div>
                    <img className=' w-28 pl-10 h-20' src={logo} alt="" />
                </div>
                <div className=' flex justify-center items-center space-x-10'>
                    <a className='rounded text-white font-semibold bg-slate-600  px-5 py-2 hover:bg-slate-700  ' href='#'>Shop</a>
                    <a className='rounded text-white font-semibold bg-slate-600  px-5 py-2 hover:bg-slate-700  ' href='#'>Orders</a>
                    <a className='rounded text-white font-semibold bg-slate-600  px-5 py-2 hover:bg-slate-700  ' href='#'>Inventory</a>
                    <a className='rounded text-white font-semibold bg-slate-600  px-5 py-2 hover:bg-slate-700' href='#'>About</a>
                    <button className='rounded text-white font-semibold bg-indigo-700  px-5 py-2 hover:bg-indigo-800 flex justify-center items-center'> <FiLogIn /> Log in</button>
                </div>
            </div>
        </div>
    )
}