//----------------------------- Currency Conversion --------------------------------------
// **Description: component corresponding to the input and select of the currency exchange
// The amount entered by the user and the type of currency obtained by the API are expected


import PropTypes from "prop-types";
import '../styles/CurrencyConversion.css';

function CurrencyConversion(props) {
  return (
    <div class="container text-center">
      <div class="row">
        
          <div class="col-5">
            <div class="input-group mb-3">
                <span class="input-group-text">$</span>
                <input class="form-control" 
                      type="text" value={props.amount} 
                      onChange={ev => props.onAmountChange(ev.target.value)} />
            </div>
          </div>  
          <div class="col-5">
            <select class="form-select" 
                    value={props.currency} 
                    onChange={ev => props.onCurrencyChange(ev.target.value)}>
                    {props.currencies.map((currency => (<option value={currency}>{currency}</option>
              )))}
            </select>
          </div>
          <div class="col-2">
            <img src={props.image} width="70px" class="rounded mx-auto d-block flag"></img>
          </div>

      </div>
    </div>
  );
}

CurrencyConversion.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
  image: PropTypes.string.isRequired,
};

export default CurrencyConversion;