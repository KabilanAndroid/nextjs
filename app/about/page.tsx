"use client"
import { logout } from "@/src/component/layout/store/slices/counterReducer";
import { RootState } from "@/src/component/layout/store/store";
import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from 'react-redux';
import '../globals.css'
import Accordion from 'react-bootstrap/Accordion'

const page = () => {
  const userdetails = useSelector((state: RootState) => state.counter)
  console.log("Redux state:", userdetails)
  const dispatch = useDispatch()
  const router = useRouter()
  const click = async () => {

    router.push('/contact/posts')

  }
  console.log("about");
  


  const clicks = () => {
    window.open('https://www.google.com/search?q=68+is+whole+number&oq=68+is+whole+number&gs_lcrp=EgZjaHJvbWUCAIQABgUGIcCGIAEMgcIAxAAGIAEMgwIBBAAGBQYhwIYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQk5MTM1ajBqMTWoAgiwAgHxBYQES2XEiKlG&sourceid=chrome&ie=UTF-8')
  }


  const clickss = () => {
    router.push('/')
    dispatch(logout())
  }


  return (
    <div style={{ height: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

      <button style={{ backgroundColor: '#b2d5a3ff', marginLeft: 30, padding: 15 }} onClick={() => click()}>Click to share</button>
      <button style={{ backgroundColor: '#b2d5a3ff', marginLeft: 30, padding: 15 }} onClick={() => clicks()}>click </button>
      <button style={{ backgroundColor: '#b2d5a3ff', marginLeft: 30, padding: 15 }} onClick={() => clickss()}>logout </button>
      <p style={{ fontSize: 30, marginLeft: 30 }}>{userdetails?.username?.toUpperCase()}</p>
      <p style={{ fontSize: 30, marginLeft: 30 }}>{userdetails?.password?.toUpperCase()}</p>
      <p style={{ fontSize: 30, marginLeft: 30 }}>{userdetails?.isLoggedIn}</p>
      {/* <img className="blur-none h-100 drop-shadow-xl/50" src="/images/batman.jpg" alt="Batman"  />
      <img style={{filter:'brightness(6)' ,height:400}} src="/images/batman.jpg" alt="Batman"  /> */}
        
    </div>
  )
}

export default page