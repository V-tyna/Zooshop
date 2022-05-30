import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { firebaseConfig } from './configs';

import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById('root'));

onAuthStateChanged(auth, () => {});

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

reportWebVitals();
