import React from 'react'
import { PropertyCard } from './PropertyCard'


export const Property = () => {

      
      
  return (
    <div className='container'> 
      <div className="flex items-center justify-center gap-2 flex-wrap">
      <PropertyCard />
     <PropertyCard />
     <PropertyCard />
     <PropertyCard />
     <PropertyCard />
      </div>
    </div>
  )
}
