import { useNavigate } from "react-router-dom"
import { Button } from "./ui/Button"

export const Navbar = () => {
    const navigate = useNavigate()
    return <nav className="bg-gray-900 py-3 px-5 text-white flex justify-between items-center">
        <div className="font-bold text-2xl bg-gradient-to-bl to-blue-400 via-purple-500 from-white bg-clip-text text-transparent">
            PayTm
        </div>
        <div className="flex gap-5">
            <Button name="Dashboard" onClick={()=> navigate('dashboard')} variant={'primary'}/>
            <Button name="Login" onClick={()=> navigate('signin')} variant={'primary'}/>
            <Button name="Sign Up" onClick={()=> navigate('signup')} variant={'secondary'}/>
        </div>
    </nav>
}