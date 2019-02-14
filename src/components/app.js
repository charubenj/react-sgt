import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';   //.min is minified version
import 'materialize-css/dist/js/materialize.min';   // component has to be capitalized for react
import '../assets/css/app.scss';
import AddStudent from './add_student'
import Table from './table';
import{Route} from 'react-router-dom'
import studentData from "../data/get_all_students";
import {formatPostData} from '../helpers';   // if we only give folder name then it will search index file in folder
import ViewStudent from './view-student';


class App extends Component {

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

        render(){                   // creating router
        return (
            <div className="container">
                <Route exact path="/" component={Table}/>
                <Route path="/add-student" component={AddStudent}/>
                <Route path="/student/:id" component={ViewStudent}/>
            </div>
        );
    }
}


export default App;
