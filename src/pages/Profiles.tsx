import { Link } from "react-router-dom"

const Profiles = () => {
    const profileIds: number[] = [1, 2, 3, 4, 5]
    return (
        <div>
            <p>All Profiles</p>
            {profileIds.map((id, index) => (
                <Link key={id.toString() + index} to={`/profiles/${id}`}><p >Profile {id} </p></Link>
            ))}
        </div>
    )
}

export default Profiles