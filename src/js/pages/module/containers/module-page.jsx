import React from 'react';
import {Route, Link} from 'react-router-dom';


class ModulePage extends React.Component{
    constructor(props){
        super(props)
    }
    render () {
        return (
            <div>
                <Link to={`${this.props.match.url}/assist`} >
                    Module - Assist
                </Link>
                <Link to={`${this.props.match.url}/logistic`} >
                    Module - Logistic
                </Link>
                <div>
                    <Route path={`${this.props.match.url}/assist`} component={() => <li> Module - Assist </li>} />
                    <Route path={`${this.props.match.url}/logistic`} component={() => <li> Module - Logistic </li>} />
                </div>
            </div>
        )
    }
}

export default ModulePage;