const angularFramework = {
    name: 'Cool Frameworks',
    library: 'Angular Cli',
    version: '11'
}


function dataElements(angularFramework) {
    return angularFramework.library + '-' + angularFramework.version
}
const element = (
    <h1>{angularFramework.name} {dataElements(angularFramework)}</h1>
);
console.log("++++++++++",element)

function GetGreetingScreen() {
    return (
        element
    );
}

export default GetGreetingScreen;
