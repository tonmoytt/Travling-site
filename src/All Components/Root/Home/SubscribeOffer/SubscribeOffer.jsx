import img from "./../../../../assets/images/New-TMA-Planes-8_1600-900-2.jpg"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import swal from 'sweetalert';

const SubscribeOffer = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c1kfic4',
            'template_0qun126',
            form.current,
            'Beg3h31jWVMZsIy-2')
            .then((result) => {
                console.log(result.text);
                swal("Subscribe", "Complete!", "success");
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="mx-6 md:mx-10 my-10 border rounded-xl overflow-hidden md:flex">
            {/* ছবি */}
            <div className="w-full md:w-1/2">
                <img className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none" src={img} alt="Subscribe Offer" />
            </div>

            {/* টেক্সট এবং ফর্ম */}
            <div className="w-full md:w-1/2 px-6 md:px-12 py-8 flex flex-col justify-center">
                <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">
                    Get special offers, and more from Traveler
                </h1>
                <p className="text-gray-400 text-center md:text-left mt-2 text-sm md:text-base">
                    Subscribe to see secret deals prices drop the moment <br className="hidden md:block" /> you sign up!
                </p>

                <form ref={form} onSubmit={sendEmail} className="relative mt-8 flex flex-col items-center md:items-start">
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Email address"
                        required
                        className="input input-bordered rounded-full w-full md:w-9/12 py-4 px-5 text-base"
                    />

                    <input
                        type="submit"
                        value="Subscribe"
                        className="btn btn-secondary rounded-full mt-4 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 px-6 py-3 text-base font-semibold cursor-pointer"
                    />
                </form>
            </div>
        </div>
    );
};

export default SubscribeOffer;
