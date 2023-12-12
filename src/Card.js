import styles from './Card.module.css'

function Card(props) {
    return (
      <div className={styles.Card}>
        <h2>{props.title}</h2>
        
        {props.text.split('\n').map(text => (<p>{text}</p>))}

        {props.images?.map(image => (<img className={styles.CardImage} src={image.url}/>))}
      </div>
    )
}

export default Card