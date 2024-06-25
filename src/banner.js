import BannerBG from './img/bannerBG.png';
import Gulajawa from './img/gulajawa.png';
import Cabai from './img/cabai.png';
import Kacang from './img/kacang.png';

export default function Banner(){
    return(
        <div className='flex relative w-full lg:h-[600px] h-auto overflow-hidden'>
            <img src={BannerBG} className='object-cover w-full h-auto z-0'alt="banner"/>
            <img src={Gulajawa} className='absolute z-10 -bottom-3 lg:-bottom-5 left-5 lg:left-40 w-1/4' alt="guljaw"/>
            <img src={Cabai} className='absolute z-10 m-auto inset-x-0 -bottom-1 lg:bottom-[5px] w-1/3' alt="cabai"/>
            <img src={Kacang} className='absolute z-10 -bottom-2 right-5 lg:right-40 w-1/4' alt="kacang"/>
            <div className='absolute z-20 inset-0 m-auto w-full h-full'>
                <div className='flex flex-col justify-center items-center text-center w-full h-3/4 lg:h-1/2'>
                    <h3 className='banner-header-top text-lg sm:text-3xl lg:text-5xl'>made with</h3>
                    <h1 className='banner-header-main text-xl sm:text-4xl lg:text-6xl'>Quality ingredient</h1>
                </div>
            </div>
        </div>
    );
}