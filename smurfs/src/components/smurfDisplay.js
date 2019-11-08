import React, { useEffect , useState }  from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../Actions/Actions';


const SmurfDisplay = (props) => {
  console.log(props.smurf)

    useEffect(() => {
        props.getSmurf();
      }, []);

      if(props.smurf !== undefined) {
    return (
      <div>
      {props.smurf.map((smurfs) => {
         console.log(smurfs.name)
          return <div className='smurf-card'
             key={smurfs.id}>
            <h2>{smurfs.name}</h2>
            <h4>Age: {smurfs.age}</h4>
            <h4>Height: {smurfs.height}</h4>
          </div>
        })}
        </div>
    )
  }
  return(<div>Loading...</div>)
}

function mapStateToProps(state) {
    console.log(state)
    return {
        smurf: state.smurf
    }
  }
  
  const mapDispatchToProps = {
      getSmurf
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (SmurfDisplay);
