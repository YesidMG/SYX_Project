import React, { useState, useCallback, useEffect, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { getEntityReport } from '../../services/api';
import './ReportsPage.css'

export default function ReportsPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [captchaToken, setCaptchaToken] = useState(null);
    const [needsVerification, setNeedsVerification] = useState(false);
    const recaptchaRef = useRef(null);

    // Cleanup function for reCAPTCHA
    useEffect(() => {
        return () => {
            if (recaptchaRef.current) {
                recaptchaRef.current.reset();
            }
        };
    }, []);

    const handleCaptchaExpire = useCallback(() => {
        console.log('Captcha expirado, por favor verifica nuevamente');
        setCaptchaToken(null);
        setNeedsVerification(true);
        // Reset the captcha when it expires
        if (recaptchaRef.current) {
            recaptchaRef.current.reset();
        }
    }, []);

    const handleCaptchaChange = useCallback((token) => {
        if (!token) {
            setNeedsVerification(true);
            return;
        }
        setCaptchaToken(token);
        setNeedsVerification(false);
        setError(null);
    }, []);

    const loadReport = useCallback(async (token, signal) => {
        try {
            setLoading(true);
            setError(null);
            const newData = await getEntityReport(token, signal);
            setData(newData);
        } catch (err) {
            if (err.name !== "AbortError") {
                setError(err.message);
                setData([]);
                if (err.message.includes('Captcha')) {
                    setNeedsVerification(true);
                    setCaptchaToken(null);
                    if (recaptchaRef.current) {
                        recaptchaRef.current.reset();
                    }
                }
            }
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (!captchaToken) return;

        const controller = new AbortController();
        
        // Define and immediately invoke async function
        const fetchData = async () => {
            await loadReport(captchaToken, controller.signal);
        };
        
        fetchData().catch(console.error);

        // Cleanup function
        return () => {
            controller.abort();
        };
    }, [captchaToken, loadReport]);

    if (!captchaToken || needsVerification) {
        return (
            <div className="captcha-container">
                <h3>
                    {needsVerification 
                        ? 'Por favor verifica nuevamente el captcha:' 
                        : 'Por favor valida el captcha para ver los reportes:'}
                </h3>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LfEW6orAAAAAAUIw3B0k13R7CZatIljI2YYR1nO"
                    onChange={handleCaptchaChange}
                    onExpired={handleCaptchaExpire}
                    onErrored={() => {
                        setError('Error al cargar el captcha');
                        setNeedsVerification(true);
                    }}
                />
                {error && <div className="error-message">⚠️ {error}</div>}
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
        </div>
    )
}