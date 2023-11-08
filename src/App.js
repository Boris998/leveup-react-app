import './App.css';
import Checkout from "./components/Checkout/Checkout";

const url = "http://localhost:9091/api/card/validate";

const App = () => {

    const validateCardHandler = async (cardDetails) => {
        console.log(cardDetails);

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(cardDetails),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                const err = await response.json();
                alert(err.error);
            } else {
                alert(cardDetails+' successfully');
            }
        }
        catch (err) {
            console.error(err);
        }


        /*.then(res => {
            if (!res.ok) return res.json();
            else alert(cardDetails + ' successful validation');
        }).then(err => alert(err.error)).catch(error=>console.error(error));
*/
    }

    return (
        <div className="App">
            <Checkout onCheckValidation={validateCardHandler}/>
        </div>
    );
}


export default App;
