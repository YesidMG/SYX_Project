import React, { useState, useEffect } from "react";
import "./styles/EntityFilter.css";

const EntityFilter = () => {

    const [entities, setEntities] = useState([]);

    const [selected, setSelected] = useState("Todas");

    useEffect(() => {
        //const response = await fetch("/api/entities");
        //const data = await response.json();
        const fetchEntities = async () => {
            const data = [
                "Todas",
                "Alcaldia",
                "Gobernacion",
                "EBSA",
                "Departamento de policia",
                "SENA",
            ];
            setEntities(data);
        };
        fetchEntities();
    }, []);

    const handleChange = (value) => {
        setSelected(value);
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
    )
}

export default EntityFilter;