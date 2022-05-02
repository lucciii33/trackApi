import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="conta text-center">
			<button>see tesla rockets</button>
			<h1>Hi tesla</h1>
			<h3>Hi want to see how you work</h3>
			<p>lorem impsu again cono de la madre aqui vans otra vez</p>
		</div>
	);
};
