import React from 'react';
import ReactDOM from 'react-dom/client';
import AccountMenu from './components/menus/AccountMenu'
/* import AccountProfileDetails from './components/account/account-profile-details'
import {AccountProfile} from './components/account/account-profile' */
import {ProductCard} from './components/product/product-card'
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AccountMenu></AccountMenu>
   {/*  <AccountProfileDetails></AccountProfileDetails>
    <AccountProfile></AccountProfile> */}
    <ProductCard></ProductCard>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
