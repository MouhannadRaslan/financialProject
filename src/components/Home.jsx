import HomeBanner from "./HomeBanner";
import HomeSection from "./HomeSection";
import HomeSupport from "./HomeSupport";
import HomePath from "./HomePath";
import Footer from "./Footer";

function Home(){
    return(
        <>  
            <HomeBanner/>
            <HomeSection/>
            <HomeSupport/>
            <HomePath/>
            <Footer/>
        </>
    );
}

export default Home;