import Header from '../../components/header/Header'
import TransferMarketHeader from './TransferMarketHeader'
import Footer from '../../components/footer/Footer'
import './TransferMarket.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
import MarketList from './MarketList'
const TransfarMarket = () => {
    return (
        <>
            <div>
                <div className="bgBanner" >
                    <Header />
                </div>
                <TransferMarketHeader />
                <MarketList />
                <Footer />
            </div>

        </>
    )
}

export default TransfarMarket