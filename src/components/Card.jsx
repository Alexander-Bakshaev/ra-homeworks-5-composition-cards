const Card = ({ image, title, text, link = "#", children }) => {
  return (
    <div className="card custom-card">
      {image && (
        <img 
          src={image} 
          className="card-img-top" 
          alt={title || "Изображение карточки"}
          onError={(e) => e.target.style.display = 'none'}
        />
      )}
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {text && <p className="card-text">{text}</p>}
        {children || <a href={link} className="btn btn-primary">Go somewhere</a>}
      </div>
    </div>
  );
};

export default Card;
