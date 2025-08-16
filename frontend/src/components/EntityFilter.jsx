import React, { useState, useEffect } from "react";
import "./styles/EntityFilter.css";

const EntityFilter = ({ onChange }) => {
    const [entities, setEntities] = useState([]);
    const [selected, setSelected] = useState("Todas");

    useEffect(() => {
        const fetchEntities = async () => {
            try {
                const response = await fetch("/api/entidades");
                const data = await response.json();
                setEntities(["Todas", ...data.map(e => e.nombre)]);
            } catch (error) {
                setEntities(["Todas"]);
            }
        };
        fetchEntities();
    }, []);

    const handleChange = (value) => {
        setSelected(value);
        if (onChange) onChange(value);
    };

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