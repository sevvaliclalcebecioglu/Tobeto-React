function Loops({ users }) {
    return (
        <ul>
            {
                users.map((user, i) => <li key={i}>{user.name} ({user.username}) - company : {user.company} </li>)
            }
        </ul>
    );
    
}

export default Loops;