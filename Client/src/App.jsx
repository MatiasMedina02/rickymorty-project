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

const URL = "http://localhost:3001/rickandmorty/character";
const URL_LOGIN = "http://localhost:3001/rickandmorty/login/";
const API_KEY = "";

// email: rusomedina02@gmail.com
// password: matias02

function App() {
   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const navigate = useNavigate()
   const [access, setAccess] = useState(false);

   const onSearch = async (id) => {
      try {
         const { data } = await axios(`${URL}/${id}`);
         if (data.name){
            const filterCharsId = !characters.some(character => character.id === data.id)
            if(filterCharsId){
               setCharacters((oldChars) => [...oldChars, data]);
               Swal.fire({
                  position: "top-right",
                  icon: "success",
                  title: "Character added correctly.",
                  showConfirmButton: false,
                  timer: 1000,
                  width: "50%",
               })
            } else {
               Swal.fire({
                  title: "Error",
                  text: "¡The character with that ID is already on the list!",
                  icon: "error",
                  confirmButtonText: "Back",
                  confirmButtonColor: "#ef233c",
                  timer: 3000
               });
            }
         }
      } catch (error) {
         Swal.fire({
            title: "Error",
            text: '¡There are no characters with this ID!',
            icon: "error",
            confirmButtonText: "Back",
            confirmButtonColor: "#ef233c",
            timer: 3000
         });
         console.error(error.message);
      }
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
            const charactersFilter = characters.filter(character => character.id !== id);
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

   const login = async userData => {
      try {
         const { email, password } = userData;
         const { data } = await axios(URL_LOGIN + `?email=${email}&password=${password}`);
         const { access } = data;
         setAccess(access);
         access && navigate("/home");
      } catch (error) {
         console.error(error.message);
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
