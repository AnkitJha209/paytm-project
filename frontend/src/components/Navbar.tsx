import { useNavigate } from "react-router-dom"
import { Button } from "./ui/Button"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { setLogOut } from "../redux/authSlice"

export const Navbar = () => {
    const {token} = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return <nav className="bg-gray-900 py-4 px-5 text-white flex justify-between items-center">
        <div className="font-bold text-2xl bg-gradient-to-bl to-blue-400 via-purple-500 from-white bg-clip-text text-transparent">
            PayTM
        </div>
        <div>
            {
                token === null ? <div className="flex gap-5"><Button name="Login" onClick={()=> (navigate('signin'))} variant={'primary'}/>
                <Button name="Sign Up" onClick={()=> navigate('signup')} variant={'secondary'}/>
                </div>: <div>
                <Button name='Log Out' onClick={()=> {
                    dispatch(setLogOut())
                    navigate('signin')
            }} variant="secondary"/>
                </div> 
            }
        </div>
    </nav>
}