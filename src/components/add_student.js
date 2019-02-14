import React, { Component } from 'react';
import {formatPostData} from "../helpers";
import axios from "axios";
import {Link} from 'react-router-dom'


class AddStudent extends Component {

    state = {
        name: '',
        course: '',
        grade: '',
        instructor:'',
        notes:''
    }



    handleSubmit = async(event) => {

        event.preventDefault();     // preventing page to get refresh

        const formattedstudent = formatPostData(this.state);

        await axios.post('/server/createstudent.php', formattedstudent);  // end point and data which u want to send in here we want to send student

        this.props.history.push('/'); // it will navigate to home

    }

    resetForm = () => {
        this.setState({
            name: '',
            course: '',
            grade: '',
            instructor:'',
            notes:''
        });

    }


    handleKeyPress = (event) => {
        this.setState({
            [event.target.name]: event.target.value//   const email='jelly'; user={[email]:'abc@gmail.com}, console.log(user);
        });

        //     switch(event.target.name){  // when we entr value handelpress will call it will grab the value event.target.name. pass value in setState
        //         case 'name':
        //             this.setState({
        //                 name:event.target.value
        //             })
        //             break;
        //         case 'course':
        //             this.setState({
        //                 course:event.target.value
        //             })
        //             break;
        //         case 'grade':
        //             this.setState({
        //                 grade:event.target.value
        //             })
        //             break;
        //     }

    }

    render() {
        const {name, course, grade,instructor,notes} = this.state;

       
        return (
           <div>
               <h1 className="center">Add Student</h1>

               <div className="row">
                   <div className="col s12 right-align">
                       <Link className="btn blue" to ="/">Home </Link>
                   </div>
               </div>



               <form onSubmit={this.handleSubmit}>
                   <div className="row">
                       <div className="col input-field s10 offset-s1">
                           <input onChange={this.handleKeyPress} name="name" type="text" id="name" value={name} autoComplete='off'/>
                           <label htmlFor="name">Name</label>
                       </div>
                   </div>

                   <div className="row">
                       <div className="col input-field s10 offset-s1">
                           <input onChange={this.handleKeyPress} name="course" type="text" id="course" value={course} autoComplete='off'/>
                           <label htmlFor="course">Course</label>
                       </div>
                   </div>

                   <div className="row">
                       <div className="col input-field s10 offset-s1">
                           <input onChange={this.handleKeyPress} name="grade" type="number" id="grade" value={grade} autoComplete='off'/>
                           <label htmlFor="grade">Grade</label>
                       </div>
                   </div>

                   <div className="row">
                       <div className="col input-field s10 offset-s1">
                           <input onChange={this.handleKeyPress} name="instructor" type="text" id="instructor" value={instructor} autoComplete='off'/>
                           <label htmlFor="instructor">Instructor</label>
                       </div>
                   </div>

                   <div className="row">
                       <div className="col input-field s10 offset-s1">
                           <input onChange={this.handleKeyPress} name="notes" type="text" id="notes" value={notes} autoComplete='off'/>
                           <label htmlFor="notes">Notes</label>
                       </div>
                   </div>

                   <div className="row">
                       <div className="col s6 center">
                           <button onClick={this.resetForm} type="button" className="btn red darken-2 waves-effect waves-light">Clear</button>
                       </div>

                       <div className="col s6 center">
                           <button className="btn green darken-2">Add</button>
                       </div>
                   </div>
               </form>
           </div>

        );
    }
}

export default AddStudent;