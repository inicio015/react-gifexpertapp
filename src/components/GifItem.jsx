import PropTypes from 'prop-types';
export const GifItem = ({title, url,id}) => {
  return (
    <div className="card-style col-3">
        <img src={url} alt={ title } />
        <p>{ title }</p>
        
    </div>
  )
}


//Tipos de propiedades de  nuestro componente y colocar el tipo y si es requerido o lo que se espera de ese proptype 
// siempre debemos añadir los proptypes a las dependencias en este caso descargarlo
// yarn add prop-types
GifItem.propTypes = {
  title:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired,
  //id:PropTypes.number.isRequired
}
