import Complaint from './Complaint';
import "./styles/ComplaintList.css"

const complaintsData = [
    {
        "id": 1,
        "title": "Título de Queja #1",
        "description": "Descripción detallada de la queja número 1 para mostrar cómo funciona el acordeón."
    },
    {
        "id": 2,
        "title": "Título de Queja #2",
        "description": "El producto llegó dañado y la caja estaba en mal estado."
    },
    {
        "id": 3,
        "title": "Título de Queja #3",
        "description": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500."
    },
    {
        "id": 4,
        "title": "Título de Queja #4",
        "description": "El tiempo de espera en la línea de atención al cliente fue excesivamente largo."
    }
];

const ListaQuejas = () => {
    // const [quejas, setQuejas] = useState([]);
    // useEffect(() => {
    //   fetch('URL_DEL_BACKEND')
    //     .then(res => res.json())
    //     .then(data => setQuejas(data));
    // }, []);

    return (
        <div className="list-container">
            {complaintsData.map((complaint) => (
                <Complaint key={complaint.id} complaint={complaint} />
            ))}
        </div>
    );
};

export default ListaQuejas;