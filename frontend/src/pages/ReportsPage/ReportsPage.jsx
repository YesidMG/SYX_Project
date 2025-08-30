import { useEffect, useState } from 'react';
import { getReports } from '../../services/api';
import ReCAPTCHA from "react-google-recaptcha";
import './ReportsPage.css'

export default function ReportsPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [captchaToken, setCaptchaToken] = useState(null);

    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
    };

    useEffect(() => {
        if (!captchaToken) return;

        const controller = new AbortController();
        setLoading(true);
        setError(null);

        getReports(controller.signal)
            .then(data => setData(data))
            .catch(err => {
                if (err.name !== "AbortError") {
                    setError(err.message);
                    setData([]);
                }
            })
            .finally(() => setLoading(false));

        return () => controller.abort();
    }, [captchaToken]);

    if (!captchaToken) {
        return (
            <div className="captcha-container">
                <h3>Por favor valida el captcha para ver los reportes:</h3>
                <ReCAPTCHA
                    sitekey="6LfEW6orAAAAAAUIw3B0k13R7CZatIljI2YYR1nO"
                    onChange={handleCaptchaChange}
                />
            </div>
        );
    }

    if (loading) {
        return <div className="message loading"><h3>Cargando reportes...</h3></div>;
    }

    if (error) {
        return <div className="message error"><h3>⚠️ {error}</h3></div>;
    }

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
                                <td>{row.name}</td>
                                <td>{row.complaints}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <footer className='footer'><h3>Footer</h3><h3>Footer</h3></footer>
        </div>
    )
}