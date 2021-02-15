import './App.css';
import UserList from './UserList';

function App() {

  const listOfUser = UserList();

  return (
    <div className="App">
      <h1> List Of Users : </h1>
            <ul>
            {
        listOfUser.map(user=><div key={user.id} className="user"> 
                                 <li > <span>Name :</span> {user.name}</li> 
                                 <li> <span>Username :</span> {user.username}</li> 
                                 <li> <span>E-mail :</span> {user.email}</li> 
                                 <li> <span>Adress :</span> {user.address.street} ,
                                              {user.address.suite} ,
                                              {user.address.city} ,
                                              {user.address.zipcode}.      
                                 </li> 
                                 <li> <span>Phone :</span> {user.phone}</li> 
                                 <li> <span>Web-Site :</span> {user.website}</li> 
                                 <li> <span>Name Of Company :</span> {user.company.name}</li> 
                                 <li> <span>Catch Phrase :</span> {user.company.catchPhrase}</li> 
                                 <li> <span>Bs:</span> {user.company.bs}</li>
                             </div>)
            }
            </ul>
    </div>
  );
}

export default App;
