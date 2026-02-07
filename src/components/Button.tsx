import { Link } from "react-router-dom"

const Button = ({ name, color, url }: { name: string, color: string, url: string }) => {
    return (
        <Link to={url}>
            <div className={`bg-${color}-500 text-white font-bold text-sm h-10 flex items-center justify-center w-28 rounded-md`}>{name}</div>

        </Link>
    )
}

export default Button