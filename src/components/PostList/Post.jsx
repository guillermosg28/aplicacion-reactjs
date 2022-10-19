function Post({ image, time, author, description, count_like, count_comment }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="card">
        <img className="card-img-top img-fluid" src={image} alt="Imagen" />
        <div className="card-body">
          <h4 className="card-title mb-2">{author}</h4>
          <h6 className="card-subtitle text-muted">{time}</h6>
          <p className="card-text text-justify">{description}</p>
        </div>
        <div className="card-footer text-right">
            <span className="mr-3"><i className="fa-regular fa-comments"></i> Comments ({count_comment})</span>
            <button className="btn btn-danger btn-xs"><i className="fa-solid fa-heart"></i> {count_like}</button>
        </div>
      </div>
    </div>
  );
}

export default Post;
