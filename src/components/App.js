import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    let relatives = ["darshan", "jimit", "shubham", "rp"];
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
                <ol key="relativeList">
                    {relatives.map((relative, index) => (
                    <li key={"relativeListItem" + (index + 1)}>{relative}</li>
                    ))}
                 </ol>
            </div>
        )
    }
}


export default App;
