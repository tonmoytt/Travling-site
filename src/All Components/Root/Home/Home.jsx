import Banner from "./Banner/Banner";
import DestinationsBenner from "./DestinationsBenner/DestinationsBenner";
import Footer from "./Footer/Footer";
import Imagesection from "./Imagesection/Imagesection";
import Post from "./Post/Post";
import RecomendedBenner from "./RecomendedBenner/RecomendedBenner";
import SubscribeOffer from "./SubscribeOffer/SubscribeOffer";

 

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Imagesection></Imagesection>
            <DestinationsBenner></DestinationsBenner>
            <Post></Post>
            <RecomendedBenner></RecomendedBenner>
            <SubscribeOffer></SubscribeOffer>
            <Footer></Footer>
        </div>
    );
};

export default Home;