import { useEffect, useState } from "react";
import ShowPostdata from "./ShowPostdata";

 

const Post = () => {
    const [data,setdata]=useState([])

    useEffect(() =>{
        fetch("/Hoteldata.json")
        .then(res => res.json())
        .then(data => setdata(data))
        
    },[])
    return (
        <div className="py-8 md:py-20 bg-gray-50">
               <p className="text-4xl font-bold text-center pb-16">Plan your next staycation</p> 
               <div className="grid md:grid-cols-3 gap-4  mx-6">
                {
                    data.map(data => <ShowPostdata key={data.id} data={data} ></ShowPostdata>)
                }
               </div>
        </div>
    );
};

export default Post;