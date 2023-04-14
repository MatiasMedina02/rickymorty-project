import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Swal from 'sweetalert2';

import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import LoginForm from './components/LoginForm/LoginForm';
import Favorites from './components/Favorites/Favorites';

const URL = "https://rickandmortyapi.com/api/character";
const API_KEY = "";

function App() {
   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const navigate = useNavigate()
   const [access, setAccess] = useState(true);
   const EMAIL = "rusomedina02@gmail.com";
   const PASSWORD = "matias02";

   const onSearch = (id) => {
      axios(`${URL}/${id}`).then(({ data }) => {
         if (data.name){
            if(!characters.some(character => character.id === data.id)){
               setCharacters((oldChars) => [...oldChars, data]);
            } else{
               Swal.fire({
                  title: "Error",
                  text: "¡The character with that ID is already on the list!",
                  icon: "error",
                  confirmButtonText: "Back",
                  confirmButtonColor: "#ef233c",
                  timer: 3000
               })
            }
         } else{
            Swal.fire({
               title: "Error",
               text: '¡No hay personajes con este ID!',
               icon: "error",
               confirmButtonText: "Back",
               confirmButtonColor: "#ef233c",
               timer: 3000
            })
         }
      });
   };

   const onClose = (id) => {
      Swal.fire({
         title: "Are you sure?",
         text: "Are you sure to delete this card? There is no way back.",
         icon: "warning",
         showCancelButton: true,
         cancelButtonColor: '#ef233c',
         confirmButtonColor: '#38b000',
         confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
         if (result.isConfirmed) {
            const charactersFilter = characters.filter(character => character.id !== parseInt(id));
            setCharacters(charactersFilter);
            Swal.fire({
               title: "Deleted!",
               text: "Your card has been deleted.",
               icon: "success",
               timer: 1500,
               showConfirmButton: false
            })
         }
      });
   };

   const login = userData => {
      if(userData.email === EMAIL && userData.password === PASSWORD){
         setAccess(true);
         navigate("/home");
      } else{
         Swal.fire({
            title: "Error logging in",
            text: "Your data is not correct. Please put it back.",
            icon: "error",
            timer: 3000,
            confirmButtonText: "Go back",
            confirmButtonColor: "#ef233c"
         })
      }
   }

   const logout = () => {
      Swal.fire({
         title: "Are you sure?",
         text: "Are you sure to log out? There is no way back.",
         icon: "warning",
         showCancelButton: true,
         cancelButtonColor: '#ef233c',
         confirmButtonColor: '#38b000',
         confirmButtonText: 'Yes, log out!'
      }).then((result) => {
         if (result.isConfirmed) {
            setCharacters([]);
            setAccess(false);
            Swal.fire({
               title: 'Logged out!',
               text: 'You have been logged out.',
               icon: 'success',
               showConfirmButton: false,
               timer: 1500
            });
            navigate("/");
         }
      });
   }

   useEffect(() => {
      !access && navigate("/");
   }, [])

   return (
      <div className='App'>
         {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
         <Routes>
            <Route path='/' element={<LoginForm login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='*' element={<PageNotFound />} />
         </Routes>
      </div>
   );
}

export default App;
