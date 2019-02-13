import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';   //.min is minified version
import 'materialize-css/dist/js/materialize.min';   // componenet has to be capatilized for react
import '../assets/css/app.scss';
import AddStudent from './add_student'
import Table from './table';
import axios from 'axios';
import studentData from "../data/get_all_students";
import {formatPostData} from '../helpers';   // if we only give folder name then it will search index file in folder


class App extends Component {
    state = {
        students: []    // data will be display in array
    }

    componentDidMount() {
        this.getStudentData();
    }


    deleteStudent = async(id) => {

        const formattedId=formatPostData({id:id}) ;  // creating an object with key name id with value of id
        await axios.post('/server/deletestudent.php', formattedId);
        this.getStudentData();



    }

    addStudent = async (student) => {      //async infront of function not infront of varaible holding a function

        const formattedstudent = formatPostData(student);
        await axios.post('/server/createstudent.php', formattedstudent);  // end point and data which u want to send in here we want to send student
        this.getStudentData();

    }

    async getStudentData() {   //asychronus fuction . for asynchronus u have to be inside function

        const resp = await axios.get('/server/getstudentlist.php');  //Call server to get  student data
        this.setState({
            students:resp.data.data|| []
        });
        // if (resp.data.success) {
        //     this.setState({
        //         students: resp.data.data
        //     });
        //
        // } else{
        //
        //     this.setState({
        //         students:[]
        //     });
        // }

        //below is the second method for api call above is asynchronus await
        /* axios.get('http://localhost/server/getstudentlist.php').then((response) => {//technically axios returns an object promise
        //     console.log('Server Response: ', response.data.data);
        //     this.setState({
        //         students: response.data.data
        //     });
         });*/

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
