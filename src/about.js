import AboutBG from './img/aboutBG.png';
import Profpic from './img/profpic.png';

export default function About(){
    return(
        <div id='aboutSection' name='aboutSection' className='flex flex-col sm:flex-row justify-center items-center relative w-full h-auto bg-cover lg:px-40' style={{backgroundImage: `url(${AboutBG})`}} >
            <div className='flex justify-center items-center w-full h-auto sm:w-1/3 sm:h-full'>
                <img src={Profpic} className='h-auto w-2/3 object-cover transition duration-500 hover:scale-105' alt=''/>
            </div>

            <div className='w-full sm:w-2/3 flex justify-center items-center'>
                <div className='w-full flex flex-col justify-center items-center sm:items-start p-5 sm:p-16'>
                    <h3 className='allison-norm text-4xl font-normal text-slate-950' style={{lineHeight: 'normal', fontStyle: 'normal'}}>About</h3>
                    <h1 className='cinzel-norm text-2xl font-bold text-slate-950 -mt-1 lg:-mt-2' style={{lineHeight: 'normal', fontStyle: 'normal'}}>HJ. Muawanah</h1>
                    <p className='karla-norm text-center sm:text-justify mt-5 font-normal text-md sm:text-lg drop-shadow-lg max-w-72 sm:max-w-max'>
                        Pelaku usaha sambal pecel yang telah berpengalaman selama puluhan tahun menghadirkan sambal pecel kemasan khas Madiun. Memastikan bahan baku yang digunakan dalam pembuatan produk berkualitas tinggi dan terjamin mutunya.
                    </p>
                </div>
            </div>
        </div>
    );
}