
import './App.css'
import First from './First'
import Second from './Second';
import EventPropagation  from './EventPropagation';
import Third from './Third';
import LiftingtheStateUp from './LiftingtheStateUp';
import Fourth from './Fourth';
import Sample from './Second/Sample';
import ShortCircuit from './ShortCircuit';
import UseStateChallenge from './useStateChallenge';
import FormHandling from './FormHandling';
import Effect from './Second/UseEffect/Effect';
import EffectChallenge from './Second/UseEffect/EffectChallenge';
import Apihandling from './Second/UseEffect/Apihandling';
import Refernce from './Second/UseEffect/Refernce';
import PropDrill from './Second/UseEffect/PropDrill';
import ContextAPI from './Second/UseEffect/ContextAPI';
import Home from './Second/UseEffect/Home';
import ContextApplication from './Second/UseEffect/ContextApplication';
import Reducer from './ThirdFol/Reducer';
import ImprovedReducer from './ThirdFol/ImprovedReducer';
import MemoOne from './Memoization/MemoOne';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



function App() {

  const users = [
  { id: 1, name: "Ayush Badola", age: 22, city: "Dehradun" },
  { id: 2, name: "Riya Sharma", age: 24, city: "Delhi" },
  { id: 3, name: "Aman Verma", age: 21, city: "Pune" },
  { id: 4, name: "Neha Singh", age: 23, city: "Mumbai" },
  { id: 5, name: "Karan Patel", age: 25, city: "Bangalore" }
];

  const router = createBrowserRouter( [
    {
      path : "./",
      element : <Home/>
    },
    {
      path : "./About",
      element : <About />
    }
  ])

  return <>
  <p>Worked Fine</p>
  <h1>Added new File</h1>
  <h2>Added Another FIle</h2>
  </>
}

export default App
