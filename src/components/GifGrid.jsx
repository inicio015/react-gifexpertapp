import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
  
  //HOOKS EN REACT BRUTALL ASI REUTILIZAMOS CODIGO, NUESTRA LOGICA EN OTRA PARTE COMO TAL 
  const {images, isLoading} = useFetchGifs(category)

  //No se usa la palabra reservada class si no que className
  return (
    <>
      <div className='row'>
        <hr />
        <h3>{category}</h3>

        {
          //if corto es fino y util
          isLoading && ( <h2>Cargando...</h2>)
        }
        <div className="card-grid col">
        {   
            images.map( (image) => (
                
                <GifItem 
                  key={image.id} 

                  //puedo repartir todas las propiedades de este modo y asi le vamos a decir que reciba todas las propertis de manera mas facil
                  //brutal 
                  { ...image }
                />
                
              )
            ) 
          }

        </div> 
      </div>
    </> 
  )
}
