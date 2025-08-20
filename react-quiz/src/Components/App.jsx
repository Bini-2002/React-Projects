import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import Error from './Error';
import StartScreen from './StartScreen';
import Question from './Question';
import NextButton from './NextButton';
import Progress from './Progress';
import { useReducer, useEffect } from 'react';

const initialState = {
  questions: [],
  // 'loading' , 'error', 'ready' , 'active' , 'finished'
  status: "loading",
  index: 0,
  answer: null,
  points: 0
};

function reducer(state, action) {
  switch (action.type) {
    case "setQuestions":
      return {
        ...state,
        questions: action.payload,
        status: "ready"
      };
    case "dataFailed":
      return {
        ...state,
        status: "error"
      };
    case "start":
      return {
        ...state,
        status: "active"
      };
    case "answer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points: action.payload === question.correctOption
          ? state.points + question.points // each question have different level of difficulty
          : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

export default function App() {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer
    (reducer, initialState)

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((prev, cur) => 
    prev + cur.points);

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
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && numQuestions > 0 && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress 
            index={index} 
            numQuestions={numQuestions}
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
              points={points}
            />
            <NextButton
              dispatch={dispatch}
              answer={answer} />
          </>
        )}

      </Main>
    </div>
  );
}

