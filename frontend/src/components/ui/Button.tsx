interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name: string,
    onClick: () => void,
    variant: "primary" | "secondary"
}

const buttonVariant = {
    'primary': "hover:bg-gradient-to-bl hover:to-purple-800 hover:via-cian-700 hover:from-blue-700 text-white bg-gradient-to-bl to-purple-500 via-cian-600 from-blue-600 rounded-lg px-4 py-2 hover:cursor-pointer",
    'secondary': "bg-gradient-to-bl to-blue-600 via-purple-500 from-red-300 hover:bg-gradient-to-bl hover:to-blue-800 hover:via-purple-700 hover:from-red-500 text-white hover:bg-gray-300 rounded-lg px-4 py-2 hover:cursor-pointer"
}

export const Button = ({name, onClick, variant}: ButtonProps) => {
    return <button onClick={onClick} className={buttonVariant[variant]}>{name}</button>
}