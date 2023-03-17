import React from 'react'
import { Link } from 'react-router-dom'
import { HiHome } from "react-icons/hi";
const PageHero = ({title,product}) => {
  return (
    <div className="section-center w-full min-h-[10vh] flex items-center container-big pt-[30px] pb-[30px] ">
        <h3 className='text-[#738136] hover:text-[#49531b]'> 
          <Link to="/"><HiHome className='inline-block mb-[5px] ' /> Trang chủ </Link>
          {product && <Link to="/products">/ Sản Phẩm</Link>}/ {title}
        </h3>
      </div>
  )
}

export default PageHero