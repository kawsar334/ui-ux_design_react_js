import React from 'react'
import CustomTitle from './CustomTitle'
import ItemCart from './ItemCart'

const AnyComponent = ({ title, subtitle ,items}) => {
  return (
      <div className='shape1 py-10 my-10 pb-[100px] bg-gradient-to-r from-[#f1f1f7] via-[white]  to-transparent'>
          <CustomTitle title={title} subtitle={subtitle} />
          <ItemCart items={items}/>
        
    </div>
  )
}

export default AnyComponent