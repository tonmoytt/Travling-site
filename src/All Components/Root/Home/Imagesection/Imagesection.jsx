import img from "./../../../../assets/images/Frame-3150-min.png" 
import img1 from "./../../../../assets/images/Frame-3151-min.png" 
const Imagesection = () => {
    return (
        <div className="flex gap-6 mt-20 mx-10">
           <div>
            <img className="text-base hover:text-2xl" src={img} alt="" />
           </div>
           <div>
           <img src={img1} alt="" />
           </div>
        </div>
    );
};

export default Imagesection;