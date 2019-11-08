import React, { useEffect , useState }  from 'react';
import { connect } from 'react-redux';
import { getSmurf, deleteSmurf } from '../Actions/Actions';


const SmurfDisplay = (props) => {
  console.log(props.smurf)
  const [dead, setDead] = useState(false)
  console.log(dead)

    useEffect(() => {
        props.getSmurf();
      }, []);
      useEffect(() => {
        props.getSmurf();
      }, [dead]);

      if(props.smurf !== undefined) {
    return (
      <>
      <div>
      {props.smurf.map((smurfs) => {
         console.log(smurfs.id)
          return <div className='smurf-card'
             key={smurfs.id}>
            <h2>{smurfs.name}</h2>
            <h4>Age: {smurfs.age}</h4>
            <h4>Height: {smurfs.height}</h4>
            <button onClick={() => setDead(!dead)} onClick={()=>props.deleteSmurf(smurfs)}>Smurf Died</button>
          </div>
        })}
        </div>
        </>
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
      getSmurf,
      deleteSmurf
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (SmurfDisplay);
