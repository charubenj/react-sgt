import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';   //.min is minified version
import 'materialize-css/dist/js/materialize.min';   // componenet has to be capatilized for react
import '../assets/css/app.scss';
import AddStudent from './add_student'
import Table from './table';
import axios from 'axios';
import studentData from "../data/get_all_students";
import {randomString} from '../helpers';   // if we only give folder name then it will search index file in folder


class App extends Component {
    state = {
        students: []    // data will be display in array
    }

    componentDidMount() {
        this.getStudentData();
    }

    deleteStudent = (id) => {
        const indexToDelete = this.state.students.findIndex((student) => {

            return student.id === id;
        });
        if (indexToDelete >= 0) {
            const tempStudents = this.state.students.slice();   // we need copy of an array

            tempStudents.splice(indexToDelete, 1);

            this.setState({
                students: tempStudents
            });
        }

    }

    addStudent = (student) => {

        student.id = randomString();

        this.setState({
            students: [...this.state.students, student]  //adding array value and add to newarray
        });
    }

    getStudentData() {

        //Call server to get  student data

        axios.get('http://localhost/server/getstudentlist.php').then((response) => {         //technical axios returns an object promise
            console.log('Server Response: ', response.data.data);
            this.setState({
                students: response.data.data
            });
        });
        
    }

    render() {
        return (
            <div>
                <h1 className="center">SGT</h1>

                <div className="row">
                    <div className="col s12 m8">
                        <Table deleteStudent={this.deleteStudent} studentList={this.state.students}/>
                    </div>
                    <div className="col s12 m4">
                        <AddStudent add={this.addStudent}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default App;
