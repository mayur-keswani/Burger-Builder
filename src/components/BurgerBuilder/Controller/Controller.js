import React, { Fragment, useContext } from 'react';
import './Controller.css'
import "bootstrap/dist/css/bootstrap.css";

import IngredientContext from '../../../context/IngredientContext';


const Controller=()=>{
	 let ingredientContext=useContext(IngredientContext)
	
	return(
		<Fragment>
		 
			   <div className="container-fluid ">

				<div className="row  align-items-center">
					<div className="col-lg-4 col-md-4 col-sm-4 col-4 text-right h2">Cheese</div>
					<div className="col-lg-4 col-md-4 col-sm-4 col-4 text-center ">
						<button className="btn btn-primary btn-lg" 
							onClick={ingredientContext.addIngredient.bind("this","cheese")}>MORE
						</button>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4 col-4 text-left">
						<button className="btn btn-primary btn-lg"
								onClick={ingredientContext.removeIngredient.bind("this","cheese")} disabled={ingredientContext.disabledInfo["cheese"]}> LESS
						</button>
					</div>
				</div>

				<div className="row align-items-center">
					<div className="col-lg-4 col-md-4 col-sm-4 col-4 text-right h2">Salad</div>
					<div className="col-lg-4 col-md-4 col-sm-4 col-4 text-center">
						<button className="btn btn-primary btn-lg"
					  			onClick={ingredientContext.addIngredient.bind("this","salad")}>MORE
						</button>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4 col-4 text-left">
						<button className="btn btn-primary btn-lg"
								onClick={ingredientContext.removeIngredient.bind("this","salad")} 
								disabled={ingredientContext.disabledInfo["salad"]}>LESS
						</button></div>
				</div>

				<div className="row align-items-center">
					<div className="col-lg-4 col-md-4 col-sm-4 col-4 col-4 text-right h2">Meat</div>
					<div className="col-lg-4 col-md-4 col-sm-4 col-4 col-4 text-center">
						<button className="btn btn-primary btn-lg"
								onClick={ingredientContext.addIngredient.bind("this","meat")}>MORE
						</button></div>
					<div className="col-lg-4 col-md-4 col-sm-4 col-4 col-4 text-left">
						<button className="btn btn-primary btn-lg" 
								 onClick={ingredientContext.removeIngredient.bind("this","meat")} disabled={ingredientContext.disabledInfo["meat"]}>LESS
						</button>
					</div>
				</div>
				
			  </div>

	
		</Fragment>
	);
}





export default Controller;