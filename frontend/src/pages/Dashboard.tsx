import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { Button } from "../components/ui/Button"
import { Link } from "react-router-dom"
import { MyPortfolio } from "../components/MyPortfolio"
import { Users } from "../components/Users"

export const Dashboard = () => {
    const {token} = useSelector((state: RootState) => state.auth)
    if(!token){
        return <div className="flex h-screen bg-blue-300 justify-center items-center flex-col">
            LogIn First
            <Link to={'/sigin'}><Button variant="secondary" name='LogIn' /></Link>
        </div>
    }
    return <div className="bg-gradient-to-br text-white flex flex-col p-10 to-blue-900 from-purple-800 w-full h-screen">
        <MyPortfolio/>
        <Users/>
    </div>
}