import './App.css'


function App() {
  // list of lola's hobbies
  const hobbies = ['Barking at men.', 'Inspecting grocery deliveries.', 'Cropdusting.'];

  // displays a list of lola's favorite things
  const favoriteThings = () => {
    return (
      <>
        <ul>
          <li>Toys that scream.</li>
          <li>Cheese</li>
          <li>Augy's Bed</li>
        </ul>
      </>
    )
  }

  // displays the lola's profile
  return (
    <div className="profile">
      
      <div>
        <h1>Lola</h1>
        <h2>Menace to Society</h2>
        <div>
          <img src="src/assets/lola.jpg"></img>
        </div>
          
        <h3>Hobbies</h3>
        <ul>
          {hobbies.map(hobby => (
            <li>{hobby}</li>
          ))}
        </ul>
        <h3>Favorite Things</h3>
        {favoriteThings()}
        
      </div>
      
      
      
    </div>
  )
}

export default App
