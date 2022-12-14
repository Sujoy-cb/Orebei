import React,{ useEffect, useState } from "react";
import Container from "./Container";
import Images from "./Images";
import Flex from "./Flex";
import Unorderlist from "./Unorderlist";
import Listeditem from "./Listeditem";
import {RiBarChartHorizontalFill} from 'react-icons/ri'

const Navbar = () => {

    let [show, setShow] = useState(true)

  useEffect(()=>{
    function scrollWidth(){
      if(window.innerWidth < 1024){
        setShow(false)
      }else{
        setShow(true)
      }
      
    }
    scrollWidth()
    window.addEventListener("resize",scrollWidth)
  },[])
  return (
    <nav className="py-8">
      <Container>
          <Flex className="lg:flex">
            <div className="lg:w-3/12">
              <Images imageSrc="assets/logo.png"/>
            </div>
            <div className="lg:w-9/12 w-full">
            <RiBarChartHorizontalFill onClick={()=>setShow(!show)} className="block lg:hidden ml-auto absolute top-2.5 right-2.5"/>
            {show && 
              <Unorderlist className="lg:flex lg:justify-end gap-x-20 font-dmSans text-sm font-medium mt-5 lg:mt-0">
                <Listeditem className="text-regular my-2.5 lg:my-0" itemName="Home" />
                <Listeditem className="text-regular my-2.5 lg:my-0" itemName="Shop" />
                <Listeditem className="text-regular my-2.5 lg:my-0" itemName="About" />
                <Listeditem className="text-regular my-2.5 lg:my-0" itemName="Cotact" />
                <Listeditem className="text-regular my-2.5 lg:my-0" itemName="Journal" />
              </Unorderlist>
            }
            </div>
          </Flex>
      </Container>
    </nav>
  )
}

export default Navbar