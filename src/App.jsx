import Media from "react-media";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MainContainer from "./views/MainContainer.jsx";
import CatalogContainer from "./views/CatalogContainer.jsx";
import MainMobileContainer from "./views/mobile/MainMobileContainer";
import NewsContainer from "./views/NewsContainer.jsx";
import ContactContainer from "./views/ContactContainer.jsx";
import SpecialContainer from "./views/SpecialContainer.jsx";
import DiscountContainer from "./views/DiscountContainer.jsx";
import ActualContainer from "./views/ActualContainer.jsx";
import RecommendContainer from "./views/RecommendContainer.jsx";
import CategoryContainer from "./views/CategoryContainer.jsx";
import LkContainer from "./views/LkContainer.jsx";
import "antd/dist/antd.css";
import "swiper/css";
import "swiper/css/navigation";
import "./style/Style.scss";
import HowToBuyContainer from "./views/HowToBuyContainer.jsx";
import PopularContainer from "./views/PopularContainer.jsx";
import NewsDetailContainer from "./components/NewsDetails/NewsDetailContainer.jsx";
import BasketContainer from "./views/BasketContainer.jsx";
import BasketOrderContainer from "./views/BasketOrderContainer.jsx";
import ProductsContainer from "./views/ProductsContainer.jsx";
import ProductDetailContainer from "./views/ProductDetailContainer.jsx";
import SearchContainer from "./views/SearchContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Media queries={ {
          desktopOrLaptop: '(min-width: 1224px)',
          tabletOrMobile: '(max-width: 1224px)'
        } }>
          {
            matches => (
              <>
                {
                  matches.desktopOrLaptop &&
                  <>
                    <Header/>
                    <Routes>
                      <Route path="/" element={ <MainContainer/> }/>
                      <Route path="catalog" element={ <CatalogContainer/> }/>
                      <Route path="category/*" element={ <CategoryContainer/> }/>
                      <Route path="category/:id" element={ <ProductsContainer/> }/>
                      <Route path="product/:id" element={ <ProductDetailContainer/> }/>
                      <Route path="discount" element={ <DiscountContainer/> }/>
                      <Route path="special" element={ <SpecialContainer/> }/>
                      <Route path="popular" element={ <PopularContainer/> }/>
                      <Route path="/news/*" element={ <NewsContainer/> }/>
                      <Route path="/news/:id" element={ <NewsDetailContainer/> }/>
                      <Route path="contact" element={ <ContactContainer/> }/>
                      <Route path="actual" element={ <ActualContainer/> }/>
                      <Route path="/search/:id" element={ <SearchContainer/> }/>
                      <Route path="recommend" element={ <RecommendContainer/> }/>
                      <Route path="howToBuy/*" element={ <HowToBuyContainer/> }/>
                      <Route path="lk/*" element={ <LkContainer/> }/>
                      <Route path="lk/basket/*" element={ <BasketContainer/> }/>
                      <Route path="lk/basket/order" element={ <BasketOrderContainer/> }/>
                    </Routes>

                    <Footer/>
                  </>
                }
                {
                  matches.tabletOrMobile &&
                  <>
                    {/*<Header/>*/}
                    <Routes>
                      <Route path="/" element={ <MainMobileContainer/> }/>
                      <Route path="catalog" element={ <CatalogContainer/> }/>
                      <Route path="category/*" element={ <CategoryContainer/> }/>
                      <Route path="category/:id" element={ <ProductsContainer/> }/>
                      <Route path="product/:id" element={ <ProductDetailContainer/> }/>
                      <Route path="discount" element={ <DiscountContainer/> }/>
                      <Route path="special" element={ <SpecialContainer/> }/>
                      <Route path="popular" element={ <PopularContainer/> }/>
                      <Route path="/news/*" element={ <NewsContainer/> }/>
                      <Route path="/news/:id" element={ <NewsDetailContainer/> }/>
                      <Route path="contact" element={ <ContactContainer/> }/>
                      <Route path="actual" element={ <ActualContainer/> }/>
                      <Route path="/search/:id" element={ <SearchContainer/> }/>
                      <Route path="recommend" element={ <RecommendContainer/> }/>
                      <Route path="howToBuy/*" element={ <HowToBuyContainer/> }/>
                      <Route path="lk/*" element={ <LkContainer/> }/>
                      <Route path="lk/basket/*" element={ <BasketContainer/> }/>
                      <Route path="lk/basket/order" element={ <BasketOrderContainer/> }/>
                    </Routes>

                    <Footer/>
                  </>
                }
              </>
            )
          }
        </Media>
      </div>
    </BrowserRouter>
  );
}

export default App;
