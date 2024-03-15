import React, { useState } from 'react';
import img from "./../../../../assets/images/about1.png"
import img1 from "./../../../../assets/images/man1.png"
import img2 from "./../../../../assets/images/man2.png"
import img3 from "./../../../../assets/images/man3.png"
import img4 from "./../../../../assets/images/man4.png"
import img5 from "./../../../../assets/images/man5.png"
import img6 from "./../../../../assets/images/man6.png"
import img7 from "./../../../../assets/images/man7.png"
import img8 from "./../../../../assets/images/man8.png"
import Footer from '../../Home/Footer/Footer';

const About = () => {
    // const [name, setName] = useState("");
    // const [showName, setShowName] = useState(false);

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     setShowName(true);
    // }


    return (
        <div>
            <img className='h-full w-full lg:mx-6 mt-4 rounded-3xl' src={img} alt="" />

            <div className='pl-6 md:pl-32 mt-16 pb-10'>
                <h1 className='text-4xl font-bold'>About the company</h1>
                <p className='py-10'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci velit, sed quia non numquam eius modi ullma tempora incidunt ut labore et dolore magnam aliquam quaerat fruitr voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem. Itaque earum rerum hic tea sapiente delectus, ut aut reiciendis voluptatibus.</p>

                <div className='grid md:grid-cols-2 justify-between gap-10'>
                    <div>
                        <h1 className='text-lg font-bold pb-10'>Our mission</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris nisi ut aliquip.</p>
                        <p className='mt-10 pb-6'>Excepteur sint occaecat cupidatat non proident.</p>
                        <p className='pb-6'>Quis autem vel eum iure reprehende qui in ea.</p>
                        <p>At vero eos accusamus iusto odio dignissimos.</p>
                    </div>
                    {/* section 2 */}
                    <div>
                        <h1 className='text-lg font-bold pb-10'>Our mission</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris nisi ut aliquip.</p>

                    </div>

                </div>
            </div>
            <div className='bg-slate-50'>
                <h1 className='text-4xl font-bold text-center py-16'>Meet our teem</h1>

                {/* card one */}
                <div className='grid md:grid-cols-4 gap-6 px-6 pb-4'>
                    {/* card 1.1 */}
                    <div>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="">
                                <img src={img1} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-lg font-bold">Darlene Robertson</h2>
                                <p className='text-gray-500 mt-4'>Founder & CEO</p>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="">
                                <img src={img2} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-lg font-bold">Jenny Wilson</h2>
                                <p className='text-gray-500 mt-4'>Marketing Manager</p>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="">
                                <img src={img3} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-lg font-bold">Jerome Bell</h2>
                                <p className='text-gray-500 mt-4'>Product Manager</p>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="">
                                <img src={img4} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-lg font-bold">Annette Black</h2>
                                <p className='text-gray-500 mt-4'>UI/UX Designer</p>

                            </div>
                        </div>
                    </div>

                </div>


                {/* card two */}
                <div className='grid md:grid-cols-4 gap-6 px-6 py-1'>
                    {/* card 2.2 */}
                    <div>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="">
                                <img src={img5} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-lg font-bold">Eleanor Pena</h2>
                                <p className='text-gray-500 mt-4'>Creative Director</p>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="">
                                <img src={img6} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-lg font-bold">Marvin McKinney</h2>
                                <p className='text-gray-500 mt-4'>Chief Financial Officer</p>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="">
                                <img src={img7} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-lg font-bold">Annette Black</h2>
                                <p className='text-gray-500 mt-4'>Project Manager</p>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="">
                                <img src={img8} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-lg font-bold">Darrell Steward</h2>
                                <p className='text-gray-500 mt-4'>President of Sales</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* <div className="App">
                <form>
                    <label>Name:</label>
                    <input
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button onClick={handleSubmit} type="submit">
                        Submit
                    </button>
                </form>
                 
                {showName === true && <p>You have submitted. Name: {name}</p>}
            </div> */}
            <Footer></Footer>
        </div>
    );
};

export default About;