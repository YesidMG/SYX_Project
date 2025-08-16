import './WritePage.css'

export default function WritePage() {
  return (
    <div className="write-page">
        <header><h1>REDACTAR NUEVA QUEJA</h1></header>
        <div className="form-section">
            <div className="entity-form">Entidad</div>
            <div className="title-form">Titulo</div>
            <div className="description-form">Descripción</div>
            <button className="accept">Aceptar</button>
            <button className="cancel">Cancelar</button>
        </div>
        <footer className='footer'><h3>Footer</h3><h3>Footer</h3></footer>
    </div>
  )
}