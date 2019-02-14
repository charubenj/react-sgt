import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {formatPostData} from '../helpers'

class ViewStudent extends Component {

    state = {
        student: {}
    }

    async componentDidMount() {           // first render then constructor then componentDidMount will execute
        //console.log('student id', this.props.match.params.id);
        const studentId = formatPostData({
            id: this.props.match.params.id
        });

        const studentData = await axios.post('/server/getstudentdetails.php', studentId);

        console.log('student data', studentData);

        this.setState({
            student: studentData.data.data
        })

    }

    render() {
        const {name, course ,grade} = this.state.student;       //deconstructing the object

        return (
            <div>
                <h1 className="center">Student Details</h1>
                <div className="row">
                    <div className="col s12 right-align">
                        <Link to="/" className="btn blue">Home</Link>
                    </div>
                </div>
                <h2 className="center">{name}</h2>
                <h5 className="center">{course}</h5>
                <h5 className="center">{grade}</h5>
            </div>
        )
    }
}

export default ViewStudent;