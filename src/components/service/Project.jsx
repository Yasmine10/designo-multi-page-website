function Project(props) {
    return (
        <article className="project">
            <div className="project__img-container">
                <img src={`/src/assets/${props.service}/desktop/${props.project.image_path}`} alt="" />
            </div>
            <div className="project__content">
                <h2 className="project__name | h3 txt-primary-400">{props.project.name}</h2>
                <p className="project__text">{props.project.content}</p>
            </div>
        </article>
    );
}

export default Project;