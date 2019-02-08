import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';   //.min is minified version
import '../assets/css/app.scss';
import Table from './table';


const App = () => (
    <div>

        <h1 className="center">SGT</h1>

       <Table/>

    </div>
);

export default App;
