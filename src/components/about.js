import React from 'react';

class About extends React.Component{
    next =(e)=> {
        e.preventDefault();
        this.props.nextStep();
    }
    back =(e)=>{
        e.preventDefault();
        this.props.prevStep();      
    };

    render(){
        const {handleChange,btCourse,cgpa,pgCourse,country}=this.props
        return(
            <>
            <div className="row">
        <form className="col s14">
          <div className="row">
          <h2>Enter your Personel Information</h2>
            <div className="input-field col s5">
              <input id="btCourse" type="text" className="validate"
                  onChange={handleChange("btCourse")}
                  value={btCourse}/>
              <label htmlFor="btCourse" className="active">B.Tech Course</label>
            </div>

            <div className="input-field col s5">
              <input id="cgpa" type="text" className="validate"
                  onChange={handleChange("cgpa")}
                      value={cgpa} />
              <label htmlFor="cgpa" className="active">CGPA</label>      
            </div>

            <div className="input-field col s5">
              <input id="pgCourse" type="text" className="validate"
                  onChange={handleChange("pgCourse")}
                  value={pgCourse}
                  />
              <label htmlFor="pgCourse"className="active">P.G Course</label>      
            </div>

            <div className="input-field col s5">
              <input id="country" type="text" className="validate"
                  onChange={handleChange("country")}
                  value={country}
                  />
              <label htmlFor="country" className="active">Country</label>      
            </div>
          </div>
        </form>
      </div>
      <button className="btn waves-effect waves-light blue" type="submit" name="action"
      onClick={this.back}>
        <i className="material-icons right">Previous</i>
      </button>
      

      <button className="btn waves-effect waves-light blue" type="submit" name="action"
      onClick={this.next}>
        <i className="material-icons right">Next</i>
      </button>
      </>
      
        )
    }
}

export default About