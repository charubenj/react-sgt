import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';   //.min is minified version
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import AddStudent from './add_student'
import Table from './table';
import studentData from "../data/get_all_students";



class App extends Component {
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
        return (
            <div>
                <h1 className="center">SGT</h1>

                <div className="row">
                    <div className="col s12 m8">
                        <Table studentList={this.state.students}/>
                    </div>
                    <div className="col s12 m4">
                        <AddStudent/>
                    </div>
                </div>
            </div>
        )
    }
}


export default App;
