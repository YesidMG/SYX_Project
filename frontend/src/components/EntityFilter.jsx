import { useState, useEffect } from "react";
import { getEntities } from "../services/api";
import "./styles/EntityFilter.css";

const DEFAULT_OPTION = "Todas";

const EntityFilter = ({ onChange }) => {
    const [entities, setEntities] = useState([DEFAULT_OPTION]);
    const [selected, setSelected] = useState(DEFAULT_OPTION);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        setError(null);

        getEntities(controller.signal)
            .then(data => {
                setEntities([DEFAULT_OPTION, ...data.map(e => e.name)]);
            })
            .catch(err => {
                if (err.name !== "AbortError") {
                    setError(err.message);
                    setEntities([DEFAULT_OPTION]);
                }
            })
            .finally(() => setLoading(false));

        return () => controller.abort();
    }, []);

    const handleChange = (value) => {
        setSelected(value);
        if (onChange) onChange(value);
    };

    if (loading) {
        return <div className="message loading"><h3>Cargando reportes...</h3></div>;
    }

    if (error) {
        return <div className="message error"><h3>⚠️ {error}</h3></div>;
    }

    return (
        <div className="sidebar-filter">
            <h3>ENTIDADES</h3>
            {entities.map((entity) => (
                <label key={entity} className="radio-label">
                    <input
                        type="radio"
                        name="entity"
                        value={entity}
                        checked={selected === entity}
                        onChange={() => handleChange(entity)}
                    />
                    {entity}
                </label>
            ))}
        </div>
    );
};

export default EntityFilter;