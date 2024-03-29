import {useRef} from "react";
import './Checkout.scss';


const Checkout = (props) => {
    const cardHolderNameRef = useRef('');
    const cardNumberRef = useRef('');
    const CVVRef = useRef('');
    const expirationDateRef = useRef('');
    const typeRef = useRef('');

    const submitCardDetailsHandler = (e) => {
        e.preventDefault();

        const cardDetails = {
            cardHolderName: cardHolderNameRef.current.value,
            cardNumber: cardNumberRef.current.value,
            cvv: +CVVRef.current.value,
            expirationDate: expirationDateRef.current.value+'-01',
            type: typeRef.current.value,
        }

        props.onCheckValidation(cardDetails);
    }

    return <div className="grid align__item">

        <h2 style={{color: "rgb(105,105,105)"}}>Enter your payment information below</h2>

        <div className="card">

            <header className="card__header">
                <h3 className="card__title">Payment Details</h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="card__logo" width="140" height="43"
                     viewBox="0 0 175.7 53.9">
                    <path className="visa"
                          d="M61.9 53.1l8.9-52.2h14.2l-8.9 52.2zm65.8-50.9c-2.8-1.1-7.2-2.2-12.7-2.2-14.1 0-24 7.1-24 17.2-.1 7.5 7.1 11.7 12.5 14.2 5.5 2.6 7.4 4.2 7.4 6.5 0 3.5-4.4 5.1-8.5 5.1-5.7 0-8.7-.8-13.4-2.7l-2-.9-2 11.7c3.3 1.5 9.5 2.7 15.9 2.8 15 0 24.7-7 24.8-17.8.1-5.9-3.7-10.5-11.9-14.2-5-2.4-8-4-8-6.5 0-2.2 2.6-4.5 8.1-4.5 4.7-.1 8 .9 10.6 2l1.3.6 1.9-11.3M164.2 1h-11c-3.4 0-6 .9-7.5 4.3l-21.1 47.8h14.9s2.4-6.4 3-7.8h18.2c.4 1.8 1.7 7.8 1.7 7.8h13.2l-11.4-52.1m-17.5 33.6c1.2-3 5.7-14.6 5.7-14.6-.1.1 1.2-3 1.9-5l1 4.5s2.7 12.5 3.3 15.1h-11.9zm-96.7-33.7l-14 35.6-1.5-7.2c-2.5-8.3-10.6-17.4-19.6-21.9l12.7 45.7h15.1l22.4-52.2h-15.1"/>
                    <path fill="#F7A600"
                          d="M23.1.9h-22.9l-.2 1.1c17.9 4.3 29.7 14.8 34.6 27.3l-5-24c-.9-3.3-3.4-4.3-6.5-4.4"/>
                </svg>

            </header>

            <form action="" method="post" className="form" onSubmit={submitCardDetailsHandler}>

                <div className="card__number form__field">
                    <label htmlFor="card__number" className="card__number__label">Card Type</label>
                    <input ref={typeRef} type="text" id="card__number" className="card__number__input"
                           placeholder="VISA"/>
                </div>

                <div className="card__number form__field">
                    <label htmlFor="card__number" className="card__number__label">Card Number</label>
                    <input ref={cardNumberRef} type="text" id="card__number" className="card__number__input"
                           placeholder="4000 1234 5678 9010"/>
                </div>

                <div className="card__number form__field">
                    <label htmlFor="card__number" className="card__number__label">VALID THRU</label>
                    <input ref={expirationDateRef}
                           style={{background: 'rgba(93,93,93,0.3)', padding: '10px', borderRadius: '15px'}}
                           type='month' name='expirationDate'
                    />
                </div>

                <div className="card__number form__field">
                    <label htmlFor="card__number" className="card__number__label">Placeholder Name</label>
                    <input ref={cardHolderNameRef} type="text" id="card__number" className="card__number__input"
                           placeholder="Boris Tadirov"/>
                </div>

                <div className="card__ccv form__field">
                    <label htmlFor="">CCV</label>
                    <input ref={CVVRef} type="text" className="card__ccv__input" placeholder="583"/>
                </div>
                <button>Pay</button>

            </form>

        </div>

    </div>;

}

export default Checkout;