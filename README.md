NOTES 30 Jan 2020

## HabitForm.js

import React 
import PropTypes 

const HapbitForm = ({ title, desctipon, frequency, onChaneTitle, onChange Descriptoin, OnChangeFrequency }) => {
    <form>
        <import type="text" value{title} onChance={onChangeTitle}/>
        <textarea><textarea/>
        <imput type ="number"/>
        <button>Submit</button>
}   </form>

HabitForm.PropTypes = {
    title: 
    desctipoin: 
    frequecny: 
    onChangeTite: PropTypes.func.isRequired
    .....
}

*** So we are storing the values in state and we are pushing the curent state into the form. 
online 10, this is wahtever is in state will go here for the title. 
so for line 10 as well, when we call the onchange function we will put hte reutrn value at this place. 

## HabitTracker.js

import React, { Component }
export defualt class HabitTracker extends Compooent 

    state = {
        title: ''
        des: ''
        freq: 0
        habits: []
    }

::::::::: now we will dead withthe function creations 

handleTalechange = ({ target }) => {
    this.setState({ title: target.value })
}

:::::::::: and also we will change the state of the description using the same kind of function except its just descritponis: target value ****



::::::::::; whenever you change state with a number.. they always give you a string back. so we need to parse a number with the frequency: Number(target.value... )

so now we can update our habits by doign this...

handleSubmit event => e{
    event.preventDefaoult(); 

    this.setState(state => ({
        habits: [...state.habits, {
            title: state.title, 
            desc: state.desc
            freq: state.freq. 
        }]
    }))
}



render (){
    const { title, desc, freq ... }
    return (
        <HabitForom 
        title={}
        descrtipons={}
        fewquency
        ....
        />
    )
}
}


### HabitTracker.Test.js

import react
import shallow 
ippmort HabbitTracker 

describe('habtrac comopn', () => {
    it('can change title in state' , () => {
        const wrapper = shallow(<HabbitTracker />)
        const habtiTracker = wrapper.instance();
        habbitTracker.handleTitleChange({
            target; {
                value: 'mycool title'
            }
        }); 

        expect(wrapper.state('title').toEqual('mycool title'); 
    })
    it('can chagne descritpon in state', () => {
        const wrapper = shallow(<HabbitTracker />)
        const habbitTracker = wrapper.instance(); 

        habitTracker.ahngleDescritponiChange({
            target: {
                value: 'mydesc'
            }
                    expect(wrapper.state('desc').toEqual('mydesc');
        })
  

:::::::::::::: yeah so al the stes pretty puch look just like this. 

it('can add a new habbit on submit', () => {
        const wrapper = shallow(<HabbitTracker />)
        const habbitTracker = wrapper.instance(); 

        habitTracker.HandleSubmit({
            preventDefault: () => {}
        });

        wrapper.setState({
            title: 'asdf', 
            desc: 'asdf', 
            freq: 9
        })
        expect(wrapper.state('habits')).toEqual([
            {
                titel: 'asdf', 
                desc: 'asdf', 
                freq: 9
            }
        ])

    })
})

:::::::::::: now we can add a before each to reduce some of the code. 

the before each can take it this since it is all the time blah blah 

       const wrapper = shallow(<HabbitTracker />)
        const habbitTracker = wrapper.instance(); 

        we can create a jest mock function to ensure that prevent default is being called. 

        const prevent efault = jest.fn() 


        and then expect(preventDefault).toHaveBeenCalled(); 

        ## HabitForm.js
         
         so now in our const HabitForm we are going to give everything a name='title' ... etc.

         ******** this allows us to refactor. 

         handleChange = .. 
         this.setState({ [target.naem]: target.value})

Habit.js

import React
import PropTypes

const habit =({ Habit }) => (
    <section>
        <h2>{Habit.title}</h2>
        <p>{habit.descripoiton}</p>
)

Habit.propTypes = {
    habit: ....
}its.js

## Habit.js

import react 
import proptyeos 

const Habits = () => {
 const habitElements = habits.map(habit => )
}


const Habits = () {
    habits: ProptTypes.arrayOf(PropTYes.shape({
        title: PropTypes.string.isRequered, 
        description: PropTYpes.string....
    }))
}
export default Habits

__Mocks__/*same name as the thing

now we are going to create a function with the same name as our fetch stuff. 

So we are going to create a fake promise that resolves with an array whcih contains all thi things that our api model will contain whcih we getched and maped through in order to pupolate the api that we are workign with.. 
