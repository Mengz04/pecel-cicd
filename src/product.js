import Pecel from './img/pecel.png';
import ChilliEmpty from './img/chilli-empty.png';
import ChilliFull from './img/chilli-full.png';
import Variants from './variants';
import { FaAngleLeft } from "react-icons/fa";

export default function Product(){
    function slideImage() {
        console.log("IN");
        var imgElement = document.getElementById("product-slide");
        var leftContent = document.getElementById("left-content");
        var rightContent = document.getElementById("right-content");
        imgElement.classList.toggle("active");

        leftContent.classList.toggle("z-10");
        leftContent.classList.toggle("opacity-100");
        leftContent.classList.toggle("opacity-0");

        rightContent.classList.toggle("z-10");
        rightContent.classList.toggle("opacity-100");
        rightContent.classList.toggle("opacity-0");
    }

    return(
        <div id='productSection' name='productSection' className="flex flex-col lg:flex-row w-full h-75 lg:h-[500px] bg-light py-0 lg:py-7 relative overflow-hidden">
            <div id='left-content' className='transition-opacity ease-in-out delay-150 opacity-100 duration-300 z-10 w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start p-5 lg:p-16 lg:pl-44'>
                <h3 className='content-top-header'>creates</h3>
                <h1 className='content-main-header -mt-1 lg:-mt-5'>Quality Product</h1>
                <p className='karla-norm text-center lg:text-justify mt-5 max-w-96 font-normal text-sm lg:text-lg'>
                    Sambal pecel khas madiun dengan cita rasa otentik. Dibuat dengan resep tradisional yang terjaga keasliannya.
                </p>
                <button onClick={slideImage} className='rounded-full bg-orange-500 py-1 lg:py-3 px-7 text-justify karla-norm text-white text-md lg:text-lg mt-2 lg:mt-10'>variants</button>
            </div>
            
            <div id='right-content' className='transition-opacity ease-in-out delay-150 opacity-0 duration-300 w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start p-5 lg:p-16'>
                <h3 className='content-top-header'>Product</h3>
                <h1 className='content-main-header -mt-1 lg:-mt-5'>Variants</h1>
                <div className='flex flex-row w-full sm:w-2/3 lg:w-full karla-norm text-center lg:text-justify mt-5 max-w-96 font-normal text-md lg:text-lg gap-2 md:gap-10 lg:gap-10'>
                    <Variants
                        image1={ChilliEmpty}
                        image2={ChilliEmpty}
                        color='hover:shadow-green-300'
                        bgchange='hover:bg-green-100'
                        kategori="Gado-gado"
                    />

                    <Variants
                        image1={ChilliFull}
                        image2={ChilliEmpty}
                        color='hover:shadow-yellow-300'
                        bgchange='hover:bg-yellow-200'
                        kategori="Sedang"
                    />

                    <Variants
                        image1={ChilliFull}
                        image2={ChilliFull}
                        color='hover:shadow-orange-300'
                        bgchange='hover:bg-orange-200'
                        kategori="Pedas"
                    />
                </div>
                <div className='flex flex-row align-middle mt-6 lg:mt-10'>
                <button onClick={slideImage} className='bg-orange-500 rounded-full mr-3 p-3'> <FaAngleLeft size={25} style={{color:'white'}}/></button>
                <a href="https://wa.me/6281334236309"><button className='rounded-full bg-orange-500 py-3 px-7 text-justify karla-norm text-white text-sm lg:text-base'>order</button></a>
                </div>
                
            </div>
            <div className='w-full h-full absolute'>
                <div id='product-slide' className='pecel-img active'>
                    <img src={Pecel} className='object-cover h-auto w-1/2 sm:w-1/3 lg:h-3/4 lg:w-auto transition duration-500 hover:scale-105'/>
                </div>
            </div>
                       
        </div>
    );
}