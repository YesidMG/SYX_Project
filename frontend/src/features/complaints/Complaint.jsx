import { useState } from "react";
import "./Complaint.css";
import CommentSection from "./CommentSection";

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

const Complaint = ({ complaint }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="complaint-wrapper">
            <div className="container">
                <div className="header" onClick={() => setExpanded(e => !e)}>
                    <div className="title">
                        <figure className="entity-icon">
                            <img
                                src={`/entity_logos/${complaint.logo}`}
                                alt={`Logo de ${complaint.entity_name}`}
                                width="40"
                                height="40"
                            />
                        </figure>
                        <strong>{complaint.entity_name}</strong>
                        <span className="entity-date">
                            {formatDate(complaint.creation_date)}
                        </span>
                    </div>
                    <button
                        className="expand-button"
                        aria-label={expanded ? "Colapsar" : "Expandir"}
                        style={{
                            transform: expanded ? "rotate(180deg)" : "rotate(90deg)",
                        }}
                        tabIndex={0}
                        onClick={e => { e.stopPropagation(); setExpanded(exp => !exp); }}
                    >
                        ▶
                    </button>
                </div>
                <div className={`description${expanded ? " open" : ""}`}>
                    <p>{complaint.description}</p>
                </div>
            </div>
            {/* Componente de comentarios */}
            <CommentSection complaintId={complaint.id}/>
        </div>
    );
};

export default Complaint;