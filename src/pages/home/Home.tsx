import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router'

export default function Home() {
  return <>
  <div className=''>
    <Navbar/>
    <Outlet/>
  </div>
  </>
}
