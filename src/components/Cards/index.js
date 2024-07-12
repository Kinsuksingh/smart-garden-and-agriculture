import './index.css'
const Cards = (props) => {
    const {img, title, value} = props
    return(
        <div className="card card-section">
            <img className='card-img' src={img} alt={title} />
            <div className="card-body">
                <h6 className="card-title title">{title}</h6>
                <p className='value'>{value}</p>
            </div>
        </div>
    )
}

export default Cards