import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../pages/footer/Footer";

export default function MainLayout() {
  return (
    <div className="">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
