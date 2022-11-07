import { useState, AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState( [ 'One Punch']);


  const onAddCategory = (newCategory) => {
    
    if(categories.includes(newCategory)) return;

    setCategories([newCategory,...categories]);
  }

  return (
    <>
      <div className='container-fluid container-search'>
        {/* TITULO */}
        <h1>GifExpertApp</h1>

        {/* INPUT */}
        <AddCategory 
          //setCategories={setCategories}

          //emitimos algo con el ON en react y es comun
          onNewCategory={ (category) => onAddCategory(category)}
          currentCategories={categories}
        />
        
        {/*LISTADO DE  GIF*/}

        {   
          categories.map( (category) => (
                  
              <GifGrid 
                key={category} 
                category={category}
              />
              
            )
          ) 
        }
      </div>
        
    </>
  )
}
