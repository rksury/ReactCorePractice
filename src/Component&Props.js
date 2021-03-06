import React from "react";

function Newelement(props) {
    return <h2> Props Name: "{props.name}"</h2>;

}


class ClassComponentProps extends React.Component {
    render() {
        return (
            <div style={{textAlign:"center"}}>
                <Newelement name="render in class component"/>
            </div>
        )

    }
}

export default ClassComponentProps;