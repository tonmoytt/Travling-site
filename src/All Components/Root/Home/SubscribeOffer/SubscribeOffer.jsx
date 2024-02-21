import img from "./../../../../assets/images/New-TMA-Planes-8_1600-900-2.jpg"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';


const SubscribeOffer = () => {

    const form = useRef();
   
    const sendEmail = (e) => {
        // const Navigate=useNavigate('')
        e.preventDefault();

        emailjs.sendForm('service_c1kfic4',
            'template_0qun126',
            form.current,
            'Beg3h31jWVMZsIy-2')
            .then((result) => {
                console.log(result.text);
                swal("Subscribe", "Complete!", "success");
                 
                e.target.reset()
                
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className="flex border mx-10 rounded-xl">

            <div className="w-1/2">
                <img className="w-full rounded-l-xl h-[300px]" src={img} alt="" />
            </div>
            <div className="">
                <h1 className="text-4xl text-center mt-12 font-bold">Get special offers, and more   from Traveler</h1>
                <p className="text-gray-400 text-center mt-2">Subscribe to see secret deals prices drop the moment <br /> you sign up!</p>

                <div className="text-center">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="email" placeholder="Email address" className="input input-bordered relative mt-8 py-7 rounded-full w-9/12  " />

                        <input type="submit" className="btn btn-secondary rounded-full py-2 absolute -ml-28 mt-9 text-center " value="Subscribe" />
                    </form>
                </div>


            </div>
        </div>
    );
};

export default SubscribeOffer;