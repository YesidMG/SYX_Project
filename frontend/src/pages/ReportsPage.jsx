import { useEffect, useState } from 'react';
import './ReportsPage.css'

export default function ReportsPage() {

    const [data, setData] = useState([
        { id: 1, entidad: "Alcaldia", quejas: 12 },
        { id: 2, entidad: "Gobernación", quejas: 8 },
        { id: 3, entidad: "EBSA", quejas: 21 },
        { id: 4, entidad: "Departamento de policia", quejas: 5 },
        { id: 5, entidad: "SENA", quejas: 17 },
    ]);

    useEffect(() => {
        // Aquí irá la petición al backend en el futuro
        // Ejemplo:
        // fetch('/api/reports')
        //   .then(res => res.json())
        //   .then(data => setData(data));
    }, []);

    return (
        <div className="reports-page">
            <header><h1>TABLA DE REPORTES</h1></header>
            <div className="table-container">
                <table className="reports-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre de la Entidad</th>
                            <th>Número de Quejas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(row => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.entidad}</td>
                                <td>{row.quejas}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <footer className='footer'><h3>Footer</h3><h3>Footer</h3></footer>
        </div>
    )
}