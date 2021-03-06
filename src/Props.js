import logo from './logo.svg'


function FormatDate() {
    return (
        <div>
            {new Date().toLocaleTimeString()}, {new Date().toLocaleDateString()}
        </div>
    );
}

function Avatar(props) {
    return (
        <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name}/>
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="user-Info-name">
                {props.user.name}
            </div>
        </div>
    )
}


export default function Profile(props) {
    return (
        <div className="profile">
            <div className="userInfo">
                <UserInfo user={profileElement.author.name}/>
                <div className="Comment-text">
                    {profileElement.author.name}, {profileElement.text}
                </div>
                <div className="Comment-date">
                    {FormatDate(props.date)}
                </div>
            </div>

        </div>
    )
}

const profileElement = {
    // date: new Date(),
    author: {
        name: "react developer",
        avatarUrl: {logo}
    },
    text: "enjoying react"
};
console.log("++++++++++",profileElement.author.name)


