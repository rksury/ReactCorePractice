const frameworks = {
    name: 'Cool Frameworks',
    library: 'reactjs',
    version: '16.3'
}

function dataElement(frameworks) {
    return frameworks.library + '-' + frameworks.version
}

const element =
    <div tabIndex="0">
        <h1>{frameworks.name} {dataElement(frameworks)}</h1>
    </div>;

console.log("----------",element)


function FrameworkScreen() {
    return (
       element
    );
}

export default FrameworkScreen;
