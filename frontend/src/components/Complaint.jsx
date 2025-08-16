import React, {useState} from "react";
import "./styles/Complaint.css";
import logo from "../assets/chat.png";

const Complaint = ({complaint}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container">
            <div className="header" onClick={toggleOpen}>
                <div className="title">
                    <span className="entity-icon">
                        <img src={logo} alt="Logo" width="20" height="20" />
                    </span>
                    <strong>{complaint.title}</strong>
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