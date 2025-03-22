import React, { Component } from "react";
import Option from "./Option";

class Question extends Component {
    render() {
        const { question, selectedOption, onOptionChange, onSubmit } = this.props;

        return(
            <div className="">
                <h3>Question {question.id}</h3>
                <h5 className="">{question.question}</h5>
                <form onSubmit={onSubmit} className=""> 
                    <Option
                        options = {question.options}
                        selectedOption = {selectedOption}
                        onOptionChange = {onOptionChange}
                    />
                    <button type="submit" className="">
                        SUBMIT
                    </button>
                </form>
            </div>
        );
    };
}

export default Question;