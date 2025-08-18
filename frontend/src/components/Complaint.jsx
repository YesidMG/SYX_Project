import {useState} from "react";
import "./styles/Complaint.css";

const Complaint = ({ complaint }) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="container">
            <div className="header" onClick={toggleOpen}>
                <div className="title">
                    <figure className="entity-icon">
                        <img
                          src={`entity_logos/${complaint.logo}`}
                          alt="Logo de ${complaint.entidad_nombre}"
                          width="30"
                          height="30"
                        />
                    </figure>
                    <strong>{complaint.title}</strong>
                    <span className="entity-name">
                        ({complaint.entity_name})
                    </span>
                </div>
                <button className="expand-button">
                    {isOpen ? '<' : '>'}
                </button>
            </div>
            {isOpen && (
                <div className={`description ${isOpen ? 'open' : ''}`}>
                    <p>{complaint.description}</p>
                </div>
            )}
        </div>
    );
};

export default Complaint;