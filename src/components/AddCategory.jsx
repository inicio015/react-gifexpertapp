import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {


  const [inputValue, setInputValue] = useState()
   

  /*Desestructuramos el target del evento que viene  del onchange*/ 
  const onInputChanged = ({target}) => {
    setInputValue(value => target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();

    //ESTA FUNCION SE CUMPLE SI TENGO MAS DE UN CARACTER
    if(inputValue.trim().length <= 1) return; 
    
    //setCategories( categories => [inputValue,...categories]);
    onNewCategory(inputValue.trim());
    setInputValue('');
    
  }


  return (
    /*Mientras el elemento tenga un contenedor padre no tendremos problemas
    en agregarlo en un mismo componente, pero cuando el elemento tengo un hermano
    entonces en ese momento es mejor crear otr fragmento e importarlo */


    /*Coloamos un valor por defecto en value */ 
    /*Colocamos el evento onchange y asignamos un nuevo evento*/ 
    /*Al igual que en vue o cualquier cosa con javascript con solo colocar el nombre de la funcion
    obtenemos su evento directamente */ 

    
    <form onSubmit={ onSubmit }>
        <input 
            type="text" 
            placeholder="Buscar gifs"
            value= {inputValue || ''}
            onChange={ onInputChanged }
        />
    </form>
  
  )
}
