import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import Error from './Error';
import StartScreen from './StartScreen';
import { useReducer, useEffect } from 'react';

const initialState = {
  questions: [],
  // 'loading' , 'error', 'ready' , 'active' , 'finished'
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "setQuestions":
      return { 
        ...state, 
        questions: action.payload, 
        status: "ready" };
    case "dataFailed":
      return {
        ...state,
        status: "error"
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

export default function App() {
  const [{questions , status} , dispatch] = useReducer
  (reducer , initialState)

  const numQuestions = questions.length;

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "setQuestions", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader/>}
        {status === "error" && <Error />}
        {status === "ready" && numQuestions > 0 && (
          <StartScreen numQuestions={numQuestions} />
        )}
        

      </Main>
    </div>
  );
}

