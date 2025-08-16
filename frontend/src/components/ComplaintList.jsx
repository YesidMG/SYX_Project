import { useState, useEffect } from "react";
import Complaint from './Complaint';
import "./styles/ComplaintList.css";

const ComplaintList = ({ entidad }) => {
    const [quejas, setQuejas] = useState([]);

    useEffect(() => {
        let url = '/api/quejas';
        if (entidad && entidad !== "Todas") {
            url += `?entidad_nombre=${encodeURIComponent(entidad)}`;
        }
        fetch(url)
            .then(res => res.json())
            .then(data => setQuejas(data));
    }, [entidad]);

    return (
        <div className="list-container">
            {quejas.length === 0 && <p>No hay quejas registradas.</p>}
            {quejas.map((complaint) => (
                <Complaint key={complaint.id} complaint={complaint} />
            ))}
        </div>
    );
};

export default ComplaintList;