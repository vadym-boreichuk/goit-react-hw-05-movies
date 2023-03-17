import {Route, Routes} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Home from './Home'
import Layout from './Layout'
import Movies from './Movies'

export const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}/>
    <Route index element={<HomePage />} />
    <Route path="home/" element={<Home/>}/>
    <Route path="movies/" element={<Movies/>}/>
    </Routes>
   
  );
};