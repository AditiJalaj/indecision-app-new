
const user={
    name:'Aditi',
    age:'22',
    location:'PATNA'
}
function getLocation(location){
    if(location){
        return <p>Location:{location}</p>;
    }
}

const templatetwo=(
    <div>
    <h1>{user.name?user.name :'Anonymous'}</h1>
    {user.age>18 && <p>Age:{user.age}</p>}
    {getLocation(user.location)}
    </div>
)