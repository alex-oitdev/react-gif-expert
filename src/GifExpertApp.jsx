import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = ( newCategory ) => {
    if ( categories.includes( newCategory ) ) return;  //revisa que la categoría no esté, y si no está continúa.
    setCategories( [ newCategory, ...categories ] );
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={ ( value ) => onAddCategory( value ) }
      />

      {
        categories.map( ( category ) => (
          <GifGrid key={ category }
            category={ category } />
        ))
      }

    </>
  )
}
