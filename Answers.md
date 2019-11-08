1. What problem does the context API help solve?

    It helps with prop drilling by allowing one to pass props from one component to another even if the component isn't a direct parent of the component that is recieving props.


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are the functions that get executed when called upon. They always have a type which indicates which action is being performed.
    Reducer takes in what the previous state. Then takes a dispatch action from actions and then returns the next state. The redux store is where the apps state is actually stored. It is immutable and tells what the state is for the entire app.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and component state is local. If you want to change something throughout the entire app use global. If changing state in a single component use component state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk allows us to return a function instead of an action object. It is useful for dispatching a sychronous action inside of asynchrounous actions. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I hated redux at first. But I'm slowly learning to enjoy it. It just seems like it has so much power to it. Now that I know about logger it is also nice for keeping track of exactly what I'm doing. 
