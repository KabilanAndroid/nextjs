"use client"

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation"
import { setpassword, setusername ,login, logout} from "@/src/component/layout/store/slices/counterReducer";
import { RootState } from "@/src/component/layout/store/store";
import Accordions from "@/src/component/layout/Accordions";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Sidebar from "@/src/component/layout/Sidebar";
const page = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log('username:',username)
  console.log('password:',password)
  const router = useRouter()
  const dispatch = useDispatch()
  const userdetails = useSelector((state: RootState) => state.counter)
  
    console.log("Redux state:", userdetails) 
  const logins = () =>{
    router.push('/'),
    dispatch(setusername(username)),
    dispatch(setpassword(password)),
    dispatch(login())
  }
  
  return (
    <div style={{ height: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
       <div className="w-64 fixed left-0 top-0 h-screen">
                <Sidebar />
            </div>
      
      <div style={{
        height: 300, width: 400, backgroundColor: '#E8E8E8', borderRadius: 20, borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: '#dfd4d4ff', boxShadow: '0px 5px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
          <span style={{ textAlign: 'center', fontSize: 24, marginTop: 10, color: '#04ABEB' }}>Employee - Daily Report</span>
        </div>
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
          <span style={{ textAlign: 'center', fontSize: 23, color: '#f910edff', marginTop: 10 }}>LOGIN</span>
        </div>
        <div style={{ marginRight: 50, marginLeft: 50 }}>
          <span style={{ textAlign: 'center', fontSize: 16, color: '#A5A5A5', marginTop: 10 }}>username</span><br />
          <input name="myInput" style={{
            width: 300, height: 30, borderRadius: 10, borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: '#c5bdbdff', marginTop: 5
          }}
          value={username}
          onChange={e => setUsername(e.target.value)} />
        </div>
        <div style={{ marginRight: 50, marginLeft: 50, marginTop: 20 }}>
          <span style={{ textAlign: 'center', fontSize: 16, color: '#A5A5A5', marginTop: 10 }}>password</span><br />
          <input name="myInput" style={{
            width: 300, height: 30, borderRadius: 10, borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: '#c5bdbdff', marginTop: 5
          }} value={password}
            onChange={e => setPassword(e.target.value)} />
        </div>
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', marginTop: 20 }}>
          <button style={{
            paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, backgroundColor: '#7BB825', borderRadius: 10, borderStyle: 'solid',
            borderColor: '#dfd4d4ff', boxShadow: '0px 5px 6px rgba(0, 0, 0, 0.1)'
          }} onClick={()=>logins()}>Login</button>
        </div>
      </div>
       <>
      

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text.
        </Offcanvas.Body>
      </Offcanvas>
    </> 
    </div>
  )
}
export default page