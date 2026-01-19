"use client"

import Link from "next/link"
import { useSelector } from "react-redux"
import { RootState } from "@/src/component/layout/store/store"
import Accordion from "react-bootstrap/Accordion"

export default function Sidebar() {
  const user = useSelector((state: RootState) => state.counter)
console.log("sidebar-->");

  return (
    <aside className="h-screen w-64  text-white flex flex-col bg-violet-500">
        

      {/* Logo */}
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        Report System
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-3">
        <Accordion defaultActiveKey="0" alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Item-1</Accordion.Header>
        <Accordion.Body>
          <Link 
          href="item1/sub-item1"
          className="block px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          sub-item1
        </Link>
          <Link 
          href="item1/sub-item2"
          className="block px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          sub-item2
        </Link>
          <Link 
          href="item1/sub-item3"
          className="block px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          sub-item3
        </Link>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Item-2</Accordion.Header>
        <Accordion.Body>
         <Link 
          href="item2/sub-item1"
          className="block px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          sub-item1
        </Link>
        
         <Link 
          href="item2/sub-item2"
          className="block px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          sub-item2
        </Link>
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
        
        
        
        <Link 
          href="/"
          className="block px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          About
        </Link>
        <Link 
          href="/contact"
          className="block px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Location
        </Link>
        <Link 
          href="/contact"
          className="block px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Account
        </Link>
        <Link 
          href="/contact"
          className="block px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Payment
        </Link>

        {/* {user?.role === "employee" && (
          <Link 
            href="/report"
            className="block px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Submit Report
          </Link>
        )}

        {user?.role === "manager" && (
          <Link 
            href="/manager"
            className="block px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Manager Panel
          </Link>
        )} */}
      </nav>

      {/* User Info */}
      <div className="p-4 border-t border-gray-700 text-sm">
        Logged in as: <br />
        <span className="font-semibold">{user?.username}</span>
      </div>

    </aside>
  )
}
