"use client"
import { useSelector } from "react-redux"
import { RootState } from "@/src/component/layout/store/store"
import Sidebar from "@/src/component/layout/Sidebar"
export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const userdetails = useSelector((state: RootState) => state.counter)
    console.log("Redux state:", userdetails?.isLoggedIn
    )
    if (userdetails?.isLoggedIn) {
        return (
        <div className="min-h-screen flex flex-row">
            <div className="w-64 fixed left-0 top-0 h-screen">
                <Sidebar />
            </div>
            <main className="ml-64 flex-1 min-h-screen bg-gray-100 p-6">
                {children}
            </main>
        </div>
    )
        
    }
    return <>{children}</>
}
