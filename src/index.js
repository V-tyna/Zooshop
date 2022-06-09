import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { firebaseConfig } from './configs/configs';

import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import unitedReducers from './redux/unitedReducers';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById('root'));

onAuthStateChanged(auth, () => {});

export const store = configureStore({reducer: unitedReducers});

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>	
);

reportWebVitals();
