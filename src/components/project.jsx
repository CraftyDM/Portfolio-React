const Project = props => {
    return (
        <section className="card w-25 m-2">
            <img class="card-img-top rounded" src={props.src} alt={props.alt} />
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <section className="card-text">
                    <a href={props.href}>{props.linkText}</a>
                
                </section>
            </div>

        </section>
    )
}

export default Project;