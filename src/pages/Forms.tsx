import { Outlet, useNavigate } from "react-router-dom"
import PageHeader from "../components/PageHeader"

const Forms = () => {
    let navigate = useNavigate();

    return (
        <div>
            <PageHeader heading="Forms" />
            <div className="w-1/4 mx-auto h-[40vh] border-2 border-gray-300 rounded-md mt-12 mb-12">
                <p className="text-center">This is from the form</p>
                <div>
                    <Outlet />
                </div>
                <div>
                    <button onClick={() => navigate("/")}>Go Home</button>
                </div>
            </div>
        </div>
    )
}

export default Forms