import './index.css'
const Cards = (props) => {
    const {img, title, value} = props
    return(
        <div class="card card-section">
            <img className='card-img' src={img} alt={title} />
            <div class="card-body">
                <h4 class="card-title title">{title}</h4>
                <p className='value'>{value}</p>
            </div>
        </div>
    )
}

export default Cards