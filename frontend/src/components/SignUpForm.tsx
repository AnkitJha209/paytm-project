import { Input } from "./ui/Input"
import { MainHeading } from "./ui/MainHeading"

export const SignUpForm = () => {
    return <div>
        <MainHeading heading='Sign Up Form'/>
        <Input placeholder='Email Here..' inputHeading="Email" />
    </div>
}