import React from 'react';
import StudentRow from './student_row';


const Table = props => {
    const {studentList} = props;
    let studentRows = [];   // we are restting to variable value to an array;

    if (Array.isArray(studentList) && studentList.length) {      // if we have data we build our student rows

        studentRows = props.studentList.map((student) => {  // map is an array function use for looping of an array element
            return <StudentRow delete={props.deleteStudent} key={student.id} student={student}/>
        });

    }  else {

        studentRows.push(
            <tr key="no-data">
                <td colSpan="4">
                    <h4 className="center grey-text">No Student Data Available</h4>
                </td>
            </tr>
        )
    }


    return (
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

    );
}


export default Table;