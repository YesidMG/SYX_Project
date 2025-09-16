import { useState } from "react";
import "./Complaint.css";

// Datos quemados de comentarios de ejemplo
const DUMMY_COMMENTS = [
    { id: 1, date: "12/09/2025", text: "Muy de acuerdo con la queja." },
    { id: 2, date: "13/09/2025", text: "A mí me pasó lo mismo." },
    { id: 3, date: "14/09/2025", text: "Esto debería solucionarse pronto." },
    { id: 4, date: "15/09/2025", text: "Gracias por reportar, apoyo tu comentario." },
    { id: 5, date: "15/09/2025", text: "Me sumo a la queja, es un problema frecuente." },
    { id: 6, date: "15/09/2025", text: "¿Alguien ha recibido respuesta de la entidad?" },
    { id: 7, date: "15/09/2025", text: "Esto lleva meses así, nadie hace nada." },
    { id: 8, date: "15/09/2025", text: "¡Totalmente cierto!" },
    { id: 9, date: "15/09/2025", text: "Ojalá lo arreglen pronto." },
    { id: 10, date: "15/09/2025", text: "Gracias por compartir tu experiencia." },
    { id: 11, date: "15/09/2025", text: "Apoyo la queja, me pasó igual." },
    { id: 12, date: "15/09/2025", text: "¿Hay algún canal oficial para reclamar?" },
];

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

const Complaint = ({ complaint }) => {
    const [expanded, setExpanded] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [showCommentForm, setShowCommentForm] = useState(false);
    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState(DUMMY_COMMENTS);

    // Maneja abrir/cerrar comentarios
    const handleToggleComments = () => {
        setShowComments((prev) => !prev);
        setShowCommentForm(false);
    };

    // Maneja abrir/cerrar formulario de comentar
    const handleToggleCommentForm = () => {
        setShowCommentForm((prev) => !prev);
        setShowComments(false);
    };

    // Maneja comentar (solo agrega a datos quemados)
    const handleAddComment = () => {
        if (commentText.trim()) {
            const today = new Date();
            const newComment = {
                id: comments.length + 1,
                date: formatDate(today),
                text: commentText,
            };
            setComments([...comments, newComment]);
            setCommentText("");
            setShowCommentForm(false);
            setShowComments(true);
        }
    };

    // Maneja cancelar comentario
    const handleCancelComment = () => {
        setCommentText("");
        setShowCommentForm(false);
    };

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
            {/* Botones fuera de la tarjeta, pegados abajo */}
            <div className="complaint-actions">
                {!showComments && !showCommentForm && (
                    <>
                        <button className="view-comments" onClick={handleToggleComments}>
                            Ver comentarios
                        </button>
                        <button className="add-comment" onClick={handleToggleCommentForm}>
                            Comentar
                        </button>
                    </>
                )}
                {showComments && (
                    <>
                        <button className="close-comments" onClick={handleToggleComments}>
                            Cerrar comentarios
                        </button>
                        <button className="add-comment" onClick={handleToggleCommentForm}>
                            Comentar
                        </button>
                    </>
                )}
                {showCommentForm && (
                    <div className="comment-form">
                        <textarea
                            value={commentText}
                            onChange={e => setCommentText(e.target.value)}
                            placeholder="Escribe tu comentario..."
                            rows={3}
                            maxLength={500}
                        />
                        <div className="comment-form-buttons">
                            <button className="cancel" onClick={handleCancelComment}>Cancelar</button>
                            <button className="submit" onClick={handleAddComment}>Comentar</button>
                        </div>
                    </div>
                )}
            </div>
            {showComments && (
                <div className="comments-list">
                    {comments.length === 0 && <p>No hay comentarios.</p>}
                    {comments.map(comment => (
                        <div key={comment.id} className="comment-item">
                            <span className="comment-date">{comment.date}</span>
                            <span className="comment-text">{comment.text}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Complaint;