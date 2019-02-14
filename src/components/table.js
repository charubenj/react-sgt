import React, {Component} from 'react';
import StudentRow from './student_row';
import axios from "axios";
import {Link} from 'react-router-dom'
import {formatPostData} from "../helpers";



class Table extends Component {

    state = {
        students: []    // data will be display in array
    }

    componentDidMount() {
        this.getStudentData();
    }


    deleteStudent = async (id) => {

        const formattedId = formatPostData({id: id});  // creating an object with key name id with value of id
        await axios.post('/server/deletestudent.php', formattedId);
        this.getStudentData();

    }

    async getStudentData() {   //asychronus fuction . for asynchronus u have to be inside function

        const resp = await axios.get('/server/getstudentlist.php');  //Call server to get  student data
        this.setState({
            students: resp.data.data || []
        });
    }


    render() {

        const {students} = this.state;
        let studentRows = [];   // we are resetting to variable value to an array;

        if (Array.isArray(students) && students.length) {      // if we have data we build our student rows
            studentRows = students.map((student) => {  // map is an array function use for looping of an array element
                return <StudentRow delete={this.deleteStudent} key={student.id} student={student}/>
            });

        } else {

            studentRows.push(
                <tr key="no-data">
                    <td colSpan="4">
                        <h4 className="center grey-text">No Student Data Available</h4>
                    </td>
                </tr>
            )
        }


        return (
            <div>
                <h1 className="center">Student Grade Table</h1>

                <div className="row">
                    <div className="col s12 right-align">
                        <Link className="btn blue" to ="/add-student">Add Student</Link>
                    </div>
                </div>

                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Grade</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {studentRows}
                    </tbody>
                </table>

            </div>
        );
    }
}


export default Table;