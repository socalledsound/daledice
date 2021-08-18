import React, { Component, Fragment} from 'react';
//import { div, Col, Container } from 'reactstrap';
import Dice from "./Dice.js";
import '../rollDice.css';
import { connect } from 'react-redux';
import { setDiceHistory } from '../redux/actions';
import { addDiceToHistory } from '../redux/gameReducer/gameActions.js';



const sides = ['one', 'two', 'three', 'four', 'five', 'six'];

let num = 1;

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diceValues : Array.from({length: num}, () => 'one'), 
            //diceHistory : [], 
            rolling: false,
            isPast: false,
            number: '1'
        };
        this.roll = this.roll.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    
    roll() {
        
        //moved diceHistory to store, so pull off of props
        const {diceValues, } = this.state;
        const { diceHistory, addDiceToHistory } = this.props;
        console.log("dice history from state " + diceHistory);
        const newDiceValues = diceValues.map(() => sides[Math.floor(Math.random() * sides.length)]);
        //diceHistory.push(newDiceValues);
        // setDiceHistory({diceHistory: newDiceValues});
        console.log("updated dice history " + diceHistory);
        this.setState({diceValues: newDiceValues, rolling: true, });
       addDiceToHistory(newDiceValues)
        setTimeout(() => {
            this.setState({rolling: false});
        }, 1000);
    }
    
    handleInput(e) {
       this.setState({
           number: e.target.value
           
        });
       
   }

    onSubmit() {
       this.setState({
            diceValues: Array.from({length: this.state.number}, () => 'one')
       });
   }
    
    render() {
        const { diceValues, rolling, isPast, number } = this.state;
        const { diceHistory }  = this.props
        console.log(this.props);
        return(
            <Fragment>
                <div className={'diceDisplay'}>
                {
                    diceValues.map((item, idx) => <Dice key={`dice${idx}`}face={item} rolling={rolling} isPast={isPast} />)
                }
                </div>
                <div className='buttons'>

                    <button className={'rollButton'} onClick={this.roll} disabled={this.state.rolling}>
                        {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
                    </button>

                    <label for="selector" className={'selector'}>Choose your number of dice:</label>
                    <input id='selector'  className={'selector'} type='number' pattern='[0-9]' min='1' max='9' placeholder='1' onInput={this.handleInput} value={number}/>
                    <button type='button' className={'submit'} onClick={this.onSubmit} >
                        Save
                    </button>
                </div>

                <div style={{display: 'flex', flexDirection: 'column'}} className={'historyDisplay'}>
                    {
                        diceHistory.length > 0 ?
                        diceHistory.map((priorDice, idx) => (
                            <div>
                                <p>Roll Number: {idx + 1}</p>
                                {
                                    priorDice.map( (item, idx) =>
                                    <Dice key={`container${idx}`} face={item} rolling={false} isPast={true}></Dice>
                                )
                                }
                            </div>
                            )
                        )
                        :
                        <div></div>

                    }
                </div>
​              
            </Fragment>
        );
    }
}

//added to use redux
const mapStateToProps = (state) => ({
    diceHistory : state.game.diceHistory
});

const mapDispatchToProps = (dispatch) => ({
    // setDiceHistory: (values) => {
    //     const action = setDiceHistory(values)
    //     console.log(action);
    //     dispatch(setDiceHistory(values))
    // }
    addDiceToHistory : (values) => dispatch(addDiceToHistory(values))

});

export default connect(mapStateToProps, mapDispatchToProps)(RollDice);