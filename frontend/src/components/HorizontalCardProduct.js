import { useState , useRef} from "react"
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'


const HorizontalCardProduct = () => {
    const [scroll,setScroll] = useState(0)
    const scrollElement = useRef()
    const scrollRight = () =>{
        scrollElement.current.scrollLeft += 300
    }
    const scrollLeft = () =>{
        scrollElement.current.scrollLeft -= 300
    }
  return (
 <div className='container mx-auto px-4 my-6 relative'>
    <h2 className='text-2xl font-semibold py-4'>heading</h2>
    <div className='flex items-center gap-4 md:gap-6 overflow-scroll scrollbar-none transition-all' ref={scrollElement}>
    <button  className='bg-white shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block' onClick={scrollLeft}><FaAngleLeft/></button>
    <button  className='bg-white shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block' onClick={scrollRight}><FaAngleRight/></button> 
    </div>
 </div>
  )
}

export default HorizontalCardProduct