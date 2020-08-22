import React from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

//function useQuery() {
//    return new URLSearchParams(useLocation().search);
//}

function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    var data = null;
    if (r !== null) {
        try {
            data = JSON.parse(decodeURI(r[2]));
            if (typeof data != 'object') {
                data = decodeURI(r[2]);
            }
        } catch (e) {
            data = decodeURI(r[2]);
        }
    }
    return data;
}


export default class DemoIndex extends React.Component {
    render() {
     
        return (<div>
                <div>
                    <h2>demo </h2>
               ?name=  {getQueryString('name')}
                </div>
            </div>
            )
    }
}

//function QueryParamsDemo() {
//    let query = useQuery();

//    return (
//        <div>
//            <div>
//                <h2>Accounts</h2>
//                <ul>
//                    <li>
//                        <Link to="/account?name=netflix">Netflix</Link>
//                    </li>
//                    <li>
//                        <Link to="/account?name=zillow-group">Zillow Group</Link>
//                    </li>
//                    <li>
//                        <Link to="/account?name=yahoo">Yahoo</Link>
//                    </li>
//                    <li>
//                        <Link to="/account?name=modus-create">Modus Create</Link>
//                    </li>
//                </ul>

//                <Child name={query.get("name")} />
//            </div>
//        </div>
//    );
//}






function Child({ name }) {
    return (
        <div>
            {name ? (
                <h3>
                    The <code>name</code> in the query string is &quot;{name}
                    &quot;
        </h3>
            ) : (
                    <h3>There is no name in the query string</h3>
                )}
        </div>
    );
}