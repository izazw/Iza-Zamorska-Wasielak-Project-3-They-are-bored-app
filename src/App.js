import './App.css';
import { useState } from 'react';
import DisplayActivity from './Components/DisplayActivity';
import Form from './Components/Form';

function App() {

  const [activity, setActivity] = useState("");


  const getActivity = (numberOfKids, typeOfActivity) => {

   console.log(numberOfKids)
   console.log(typeOfActivity)
    const url = new URL("https://www.boredapi.com/api/activity");
    
    url.search = new URLSearchParams({
      "participants": numberOfKids,
      "type": typeOfActivity,
      // "price": 0,
      // "minaccessibility": 0,
      // "maxaccessibility": 0.4
    })

    fetch(url)
      .then(data=>data.json())
      .then((response) => {
        console.log(response);
        const activityToDisplay = response.activity;
        setActivity(activityToDisplay);
   })
  }
  

  return (
    <>
      <header>
        <h1>They are bored again... </h1>
      </header>
      <main>
        <Form getActivity={getActivity}/>
        <DisplayActivity activity={activity}/>
      </main>
      <footer>
      </footer>
    </>
  )
}

export default App;
