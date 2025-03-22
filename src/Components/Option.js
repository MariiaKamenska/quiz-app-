import React, { Component } from "react";

class Option extends Component {
    render() {
        const { options, selectedOption, onOptionChange } = this.props;

        return (
            <div className="options">
                {options.map((option, index)=> (
                    <div key={index} className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="option"
                            value={option} 
                            checked={selectedOption === option}
                            onChange={onOptionChange}
                        />
                      <label className="form-check-label">
                          {option}
                       </label>
                    </div>
                ))}
            </div>
        )
    }
}

export default Option;