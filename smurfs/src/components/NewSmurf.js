import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { addSmurf } from '../Actions/Actions'
import styled from 'styled-components'

const Form = styled.form`
display: flex;
flex-direction: column;
width: 20%;
text-align: center;
`
const Input = styled.input`
text-align: center;
`

function NewSmurf(props) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name == '') {
            return (
                alert('Put in your name!!!')
            )
        }
        if (age == '') {
            return (
                alert("Come on you're not that old")
            )
        }
        if (height == '') {
            return (
                alert("We're all short... just add your height")
            )
        }
        props.addSmurf({
            name: name,
            age: age,
            height: height + 'cm',
        });
        setName('')
        setAge('')
        setHeight('')
        alert(`WELCOME ${name}!!!`)
    }


    const handleNameChange = e => {
        e.preventDefault();
        setName(e.target.value)
    }
    const handleAgeChange = e => {
        e.preventDefault();
        setAge(e.target.value)
    }

    const handleHeightChange = e => {
        e.preventDefault();
        setHeight(e.target.value)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <label>Name</label>
            <Input type='name' placeholder='Name' name='Name' value={name} onChange={handleNameChange} />
            <label>Age (years)</label>
            <Input type='number' min="0" max='500' placeholder='Age' name='Age' value={age} onChange={handleAgeChange} />
            <label>Height (cm) </label>
            <Input type='number' min='0' max='100' placeholder='Height' name='Height' value={height} onChange={handleHeightChange} />
            <button onClick={handleSubmit}>Add Smurf</button>
        </Form>
    )
}


function mapStateToProps(state) {
    console.log(state)
    return {
        smurf: state.smurf
    }
}
const mapDispatchToProps = {
    addSmurf
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSmurf)