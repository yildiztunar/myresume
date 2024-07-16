import { Redirect, Route } from "react-router-dom";

export default function ProtectedRoute ({children, ...rest}) {

    const token=localStorage.getItem("token");

    return (
        <Route 
        {...rest}
        render={({location}) =>
            token ? (
                children
            ) : (
                <Redirect to={{
                    pathname: "/login",
                    state: {from: location}}}/>
            
            )}
        />
    )
}