import img from "./../../../../assets/images/Frame-3150-min.png"
import img1 from "./../../../../assets/images/Frame-3151-min.png"
const Imagesection = () => {
    return (
        <div className="flex flex-row-reverse gap-6 mt-20 md:mt-36 mx-6">
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