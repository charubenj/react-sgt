import React from 'react';
import StudentRow from './student_row';



const Table = props =>  {
        //console.log('Table State: ', this.state);
        const studentRows = props.studentList.map((student) => {  // map is an array function use for looping of an array element
            return <StudentRow key={student.id} student={student}/>
        });
        return (
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

        );
    }


export default Table;