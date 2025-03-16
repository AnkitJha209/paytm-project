

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    inputHeading: string,
}

export const Input = ({type, placeholder, onChange, inputHeading}: InputProps) => {
    return <div className="">
        <h2>{inputHeading}</h2>
        <input type={type} placeholder={placeholder} onChange={onChange}/>
    </div>

}