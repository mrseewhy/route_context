import PageHeader from '../components/PageHeader'
import { useParams } from 'react-router-dom';


const Profile = () => {
    const { id } = useParams();
    return (
        <PageHeader heading={`Profile ${id}`} />
    )
}

export default Profile