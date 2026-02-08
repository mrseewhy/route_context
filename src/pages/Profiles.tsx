import { Link } from "react-router-dom"
import PageHeader from "../components/PageHeader"

const Profiles = () => {
    const profileIds: number[] = [1, 2, 3, 4, 5]
    return (
        <div>
            <PageHeader heading="All Profiles" />
            <div className="w-16 mx-auto">{profileIds.map((id, index) => (
                <Link key={id.toString() + index} to={`/profiles/${id}`}><p >Profile {id} </p></Link>
            ))}</div>

        </div>
    )
}

export default Profiles