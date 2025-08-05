import { useEffect, useState } from "react";
import ShowPostdata from "./ShowPostdata";

const Post = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/Hoteldata.json")
      .then(res => res.json())
      .then(data => {
        // শুধু যেগুলার category "recommended" না, সেগুলো রাখবে
        const filtered = data.filter(item => item.category !== "recommended");
        setData(filtered);
      });
  }, []);

  return (
    <div className="py-8 md:py-20 bg-gray-50">
      <p className="text-4xl font-bold text-center pb-16">Plan your next stay cation</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 lg:gap-6 mx-2 md:mx-6">
        {data.map(item => (
          <ShowPostdata key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Post;
