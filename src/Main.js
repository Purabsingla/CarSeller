import { NavbarDefault } from './Caro';
import { CaroContent } from './Caroues';
import New from './Products/NewProducts';
import InfiniteSlider from './Products/InfiniteCarousel';
import { BackgroundBlogCard } from './Footer/Blog';
import { FooterWithSocialLinks } from './Footer/Footer'
import Login_1 from './Login_Signup/Login_1';
const Main = () => {
    return (
        <>
            <NavbarDefault />
            <CaroContent />
            <New />
            <InfiniteSlider />
            <BackgroundBlogCard />
            <FooterWithSocialLinks />
            <Login_1 />
        </>
    )
}
export default Main;