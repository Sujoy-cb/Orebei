import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Dropdown from './Dropdown'
import Flex from './Flex'
import Unorderlist from './Unorderlist'
import Listeditem from './Listeditem'
import Search from './Search'
import {MdBarChart} from 'react-icons/md'
import {GoTriangleDown} from 'react-icons/go'
import {FaSearch, FaUserAlt, FaShoppingCart} from 'react-icons/fa'

const Header = () => {
    let [categoryDropShow, setCategoryDropShow] = useState(false)
    let [userDropShow, setUserDropShow] = useState(false)

    let categoryRef = useRef()
    let userRef = useRef()

    useEffect(()=>{
        document.body.addEventListener("click",(e)=>{
            if(categoryRef.current.contains(e.target)){
                console.log("done1")
                setCategoryDropShow(true)
            }else{
                setCategoryDropShow(false)
            }

            if(userRef.current.contains(e.target)){
                console.log("done")
                setUserDropShow(true)
            }else{
                setUserDropShow(false)
            }
        })
    },[])

  return (
    <div className='bg-[#F5F5F3] py-6'>
        <Container>
            <Flex className="flex justify-between">
                <div className="relative flex items-center">
                    <Dropdown dropref={categoryRef}>
                        <p className='flex items-center gap-x-2.5 cursor-default font-dmSans text-lg font-medium text-primary'>
                            <MdBarChart/>Shop by Category
                        </p>
                        {categoryDropShow && 
                        <Unorderlist className="absolute bg-primary top-10 w-[263px] border border-slid border-[#2D2D2D]">
                            <Listeditem className="text-neutral-400 font-dmSans py-4 px-5 border-b border-slid border-[#2D2D2D] hover:px-7 hover:text-white duration-150" itemName="Accesories"/>
                            <Listeditem className="text-neutral-400 font-dmSans py-4 px-5 border-b border-slid border-[#2D2D2D] hover:px-7 hover:text-white duration-150 ease-in" itemName="Furniture"/>
                            <Listeditem className="text-neutral-400 font-dmSans py-4 px-5 border-b border-slid border-[#2D2D2D] hover:px-7 hover:text-white duration-150 ease-in" itemName="Electronics"/>
                            <Listeditem className="text-neutral-400 font-dmSans py-4 px-5 border-b border-slid border-[#2D2D2D] hover:px-7 hover:text-white duration-150 ease-in" itemName="Clothes"/>
                            <Listeditem className="text-neutral-400 font-dmSans py-4 px-5 border-b border-slid border-[#2D2D2D] hover:px-7 hover:text-white duration-150 ease-in" itemName="Bags"/>
                            <Listeditem className="text-neutral-400 font-dmSans py-4 px-5 border-b border-slid border-[#2D2D2D] hover:px-7 hover:text-white duration-150 ease-in" itemName="Home appliances"/>
                        </Unorderlist>
                        }
                    </Dropdown>
                </div>
                <div className="w-[600px] relative">
                    <Search className="w-full py-4 px-5 placeholder:font-dmSans placeholder:text-sm placeholder:text-[#C4C4C4]" placeholder="Search Products"/>
                    <FaSearch className='absolute top-5 right-4 text-primary'/>
                </div>
                
                    <Flex className="flex items-center gap-x-10">
                    <Dropdown className="relative" dropref={userRef}>
                        <div className='flex'>
                            <FaUserAlt/>
                            <GoTriangleDown/>
                        </div>
                        {userDropShow && 
                            <Unorderlist className="absolute bg-white top-10 right-0 text-center w-[200px] border border-slid border-[#F0F0F0]">
                                <Listeditem className="text-neutral-400 font-dmSans py-4 px-5 hover:bg-primary hover:border-primary border-b border-slid hover:font-bold border-[#F0F0F0] hover:text-white duration-100 ease-in" itemName="My Account"/>
                                <Listeditem className="text-neutral-400 font-dmSans py-4 px-5 border-b border-slid border-[#F0F0F0] hover:bg-primary hover:border-primary hover:font-bold hover:text-white duration-100 ease-in" itemName="Log Out"/>
                            </Unorderlist>
                            }
                    </Dropdown>
                        <div>
                            <FaShoppingCart/>
                        </div>
                    </Flex>
            </Flex>
        </Container>
    </div>
  )
}

export default Header