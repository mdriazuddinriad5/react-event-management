import { useLoaderData, useParams } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import { useEffect, useState } from "react";
import ViewDetail from "./ViewDetail";

const Details = () => {
    const [detail, setDetail] = useState([]);
    const details = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    console.log(details)

    useEffect(() => {
        const getDetail = details.find(det => det.id === idInt);
        setDetail(getDetail);
    }, [idInt, details])

    return (
        <div>
            <NavBar></NavBar>
            <ViewDetail detail={detail}></ViewDetail>

        </div>
    );
};

export default Details;