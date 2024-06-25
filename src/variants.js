

export default function Variants(props){
    return(
        <div className={`w-1/3 aspect-square flex flex-col justify-center items-center bg-slate-50 drop-shadow-lg rounded-lg transition duration-500 hover:scale-105 hover:shadow-md ${props.color} ${props.bgchange}`}>
            <div className='flex flex-row w-full justify-center items-center'>
                <img src={props.image1} className='w-5 h-5 lg:w-8 lg:h-8' alt=' '/>
                <img src={props.image2} className='w-5 h-5 lg:w-8 lg:h-8' alt=' '/>
            </div>
            <p className='text-center mt-3 text-sm lg:text-base'>{props.kategori}</p>
        </div>
    );
}