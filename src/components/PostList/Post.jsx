import { useState } from "react";

function Post({ image, createdAt, autor, text, count_like, comments }) {
  const [like, setLike] = useState(count_like);

  function onLike() {
    setLike(like + 1);
  }

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="card">
        <img className="card-img-top img-fluid" src={image} alt="Imagen" />
        <div className="card-body">
          <h4 className="card-title mb-2">{autor}</h4>
          <h6 className="card-subtitle text-muted">{createdAt}</h6>
          <p className="card-text text-justify">{text}</p>
        </div>
        <div className="card-footer text-right">
          <span className="mr-3">
            <i className="fa-regular fa-comments"></i> Comments ({comments})
          </span>
          <button onClick={onLike} className="btn btn-danger btn-xs">
            <i className="fa-solid fa-heart"></i> {like}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
