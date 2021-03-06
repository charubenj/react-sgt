import React, { Component } from 'react';

class AddStudent extends Component {

    state = {
        name: 'Heather',
        course: '',
        grade: '',
        instructor:'',
        notes:''
    }

    handleSubmit = (event) => {
        event.preventDefault();     // preventing page to get refresh
        this.props.add(this.state);  //adding and displaying  data into dom
        this.resetForm();
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

        );
    }
}

export default AddStudent;