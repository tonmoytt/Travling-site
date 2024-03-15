import img from "./../../../../assets/images/Frame-3150-min.png"
import img1 from "./../../../../assets/images/Frame-3151-min.png"
const Imagesection = () => {
    return (
        <div className="grid md:flex flex-row-reverse gap-6 mt-[370px] md:mt-72 lg:mt-36 mx-6">
            <div className='overflow-hidden    '>
                <img className=' hover:scale-105 transition duration-300' src={img} alt="" />
            </div>
            <div className='overflow-hidden    '>
                <img className=' hover:scale-105 transition duration-300  ' src={img1} alt="" />
            </div>
            
        </div>
    );
};

export default Imagesection;