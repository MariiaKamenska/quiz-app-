import React, { Component } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import qBank from "./Components/QuestionBank";
import Question from "./Components/Question";
import Score from "./Components/Score";

class App extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      questionBank: qBank,
      currentQuestion: 0,
      selectedOption: "",
      score: 0,
      quizEnd: false
    }
  }

  handleOptionChange = (e) => {
    this.setState({ selectedOption: e.target.value });   
  }

  handleFormsubmit = (e) => {
    e.preventDefault();
    this.checkAnswer();
    this.handleNextQuestion();
  }

  checkAnswer = () => {
    const { questionBank, currentQuestion, selectedOption, score } = this.state;
    if (selectedOption === questionBank[currentQuestion].answer) {
      this.setState();
    }
  };

  handleNextQuestion = () => {
    const { questionBank, currentQuestion } = this.state;
    if (currentQuestion + 1 < questionBank.length) {
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
        selectedOption: ""
      }));
    } else {
      this.setState({
        quizEnd: true
      })
    }
  };

  render() {
    const { questionBank: qBank, currentQuestion, selectedOption, score, quizEnd } = this.state;
    return (
      <div className="App">
        <h1>QUIZ APP</h1>
        {}
      </div>
    );
  }
}

export default App;