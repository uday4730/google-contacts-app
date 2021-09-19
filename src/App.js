import React from 'react';
import { lazy } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dash from './components/Dashboard';
import ContactList from './pages/ContactsList';
import { Suspense } from 'react';

const ContactsList = lazy(()=> import('./pages/ContactsList'));
const Family = lazy(()=> import('./pages/Family'));
const Friends = lazy(()=> import('./pages/Friends'));
const Favourites = lazy(()=> import('./pages/Favourites'));

function App() {
  const contacts= [
    {Name: 'Uday Narayan Samanta', email:'udaynarayansamanta4730@gmail.com',Number:'+917970308900',company:'BIT mesra', isFam: false,isFr:true, isFav:false},
    {Name: 'Charchit Gupta', email:'charchitgupta@gmail.com',Number:'+918770501417',company:'BIT mesra', isFam: false,isFr:true, isFav:true},
    {Name: 'Ankit Kumar', email:'ankitkr@gmail.com',Number:'+919723750157',company:'BIT mesra', isFam: true,isFr:false, isFav:false},
    {Name: 'Saday Kumar Samanta', email:'sadaykumarsamanta@gmail.com',Number:'+917970308901',company:'BIT mesra', isFam: false,isFr:true, isFav:true},

  ]
  return (
   <div>
     
     <Suspense fallback={<h1 className="text-center">Loading...</h1>}>
      <BrowserRouter>
          <Dash/>
          <Switch>
            <Route exact path='/' component={ContactsList} render={()=> <ContactsList contacts={contacts}/>} />
            <Route exact path='/family' component={Family}  render={()=> <Family contacts={contacts}/>}/>
            <Route exact path='/friends' component={Friends} render={()=> <Friends contacts={contacts}/>} />
            <Route exact path='/favourites' component={Favourites} render={()=> <Favourites contacts={contacts}/>} />
          </Switch>
      </BrowserRouter>
     </Suspense>
   </div>
  );
};

export default App;
