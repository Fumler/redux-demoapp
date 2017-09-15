import React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import App from "./containers/App"
import reducer from "./app/reducers"
import "./index.css"

const store = createStore(
	reducer,
	compose(
		applyMiddleware(thunk, createLogger()),
		window.devToolsExtension ? window.devToolsExtension() : f => f,
	),
)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root"),
)
