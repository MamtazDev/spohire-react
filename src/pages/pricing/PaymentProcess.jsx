import Header from '../../components/header/Header';
import PaymentForm from './PaymentForm';
import './Pricing.css'
const PaymentProcess = () => {
    return (
        <>
            <div className="bgBanner">
                <Header />
            </div>

            <PaymentForm />

        </>
    );
};

export default PaymentProcess;