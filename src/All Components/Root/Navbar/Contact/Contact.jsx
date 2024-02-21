import { MdLocationPin, MdOutlineLocalPhone, MdOutlineMail } from "react-icons/md";

import emailjs from '@emailjs/browser';
import { useRef } from 'react';
 
import swal from 'sweetalert';


const Contact = () => {

    const form = useRef();
   
    const sendEmail = (e) => {
       
       
        e.preventDefault();

        emailjs.sendForm('service_c1kfic4',
            'template_0qun126',
            form.current,
            'Beg3h31jWVMZsIy-2')
            .then((result) => {
                console.log(result.text);
                swal("Message", "send Successfully!", "success");
              
                 
                e.target.reset()
                
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="px-6 gap-6 grid md:grid-cols-2 items-center bg-slate-50">

            <div className="mt-10">
                <h1 className="text-3xl font-bold">Contact information</h1>
                <p className="pt-4 text-slate-500">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                {/* section */}
                <div className="flex pt-12 pb-6 border-b-2 items-center">
                    <MdLocationPin className="h-5 w-5  text-blue-400"></MdLocationPin>
                    <div>
                        <p className="  pl-2" >540 Libety Road, New District, New York</p>
                    </div>
                </div>
                <div className="flex py-6 border-b-2 items-center">

                    <MdOutlineLocalPhone className="h-5 w-5  text-blue-400"></MdOutlineLocalPhone>
                    <div>
                        <p className="  pl-2" >(000) 999 -656 -888</p>
                    </div>
                </div>
                <div className="flex py-6   items-center">

                    <MdOutlineMail className="h-5 w-5  text-blue-400"></MdOutlineMail>
                    <div>
                        <p className="  pl-2" >travelerwp@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className=" bg-white mt-10 mb-4 rounded-2xl">
                <div className="p-6">
                    <form  ref={form} onSubmit={sendEmail} >
                        <h1 className="text-3xl font-bold ">Send a message</h1>
                        <div className="flex gap-4 mt-10">
                            <input type="text" placeholder="Your name*" className="input input-bordered hover:input-secondary input-md w-full max-w-xs" />
                            <input type="text" placeholder="Number" className="input input-bordered hover:input-secondary input-md w-full max-w-xs" />
                        </div>
                        <input type="email" placeholder="Your Email*" className="mt-6 input input-bordered hover:input-success input-md w-full  " />


                        <textarea className="mt-10 textarea textarea-info w-full h-40" placeholder="Message"></textarea>

                        <input type="submit" value="Submit" className="btn btn-secondary btn-outline px-12 mt-6 rounded-3xl" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;