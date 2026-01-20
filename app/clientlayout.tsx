"use client"
import { useSelector } from "react-redux"
import { RootState } from "@/src/component/layout/store/store"
import Sidebar from "@/src/component/layout/Sidebar"
import Header from "@/src/component/layout/Header"
import Footer from "@/src/component/layout/Footer"
export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const userdetails = useSelector((state: RootState) => state.counter)
    console.log("Redux state:", userdetails?.isLoggedIn
    )
    if (userdetails?.isLoggedIn) {
        return (
        <div>
            <Header/>
                {children}
                <Footer/>
            
        </div>
    )
        
    }
    return <>{children}</>
}
