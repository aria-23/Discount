import React from 'react';

class App extends React.Component {
	state = {
		initialPrice:'',
		finalPrice:'',
		discount:'',
		error:''
	}

	onPriceChange = (e) => {
		const initialPrice = e.target.value;
		if(!isNaN(initialPrice)){
			this.setState(() => ({initialPrice}));
		}
	}

	onDiscountChange = (e) => {
		const initialPrice = this.state.initialPrice;
		const discount = e.target.value;
		if(!isNaN(discount)){
			if(discount>=0 && discount<=100){
				const error = "";
				const finalPrice = ((100-discount)/100) * initialPrice;
				this.setState(() => ({error,discount,finalPrice}));
			}
			else {
				const error = "*discount should be between 0% and 100%"
				this.setState(() => ({error}));
			}
		}
	}

	render() {
		return(
			<div>
			   <p>initial price</p>
			   <input type="number" value={this.state.initialPrice} onChange={this.onPriceChange} />
			   <p>discount</p>
			   <input type="number" value={this.state.discount} onChange={this.onDiscountChange} />
			   <p>{this.state.error}</p>
			   {this.state.finalPrice && <p>Final price is: {this.state.finalPrice}</p>}
			</div>
		);
	}
}

export default App;