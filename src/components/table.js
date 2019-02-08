import React, {Component} from 'react';
import StudentRow from './student_row';
import studentData from '../data/get_all_students'


class Table extends Component {

    state = {
        students: []    // data will be display in array
    }

    componentDidMount() {

        this.getStudentData();
    }

    getStudentData() {

        //Call server to get  student data

        this.setState({

            students: studentData
        });

    }

    render() {

        //console.log('Table State: ', this.state);
        const studentRows=this.state.students.map((student)=>{  // map is an array function use for loopin of an array element
           return <StudentRow key={student.id} student={student}/>
        })
        return (
            <div className="row">
                <div className="col s12 m8">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Course</th>
                                <th>Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                        {studentRows}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Table;