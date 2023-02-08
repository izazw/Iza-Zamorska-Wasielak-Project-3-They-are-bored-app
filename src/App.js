import './App.css';
import { useState } from 'react';
import DisplayActivity from './Components/DisplayActivity';
import Form from './Components/Form';

function App() {

  const [activity, setActivity] = useState("");
  const [activityLink, setActivityLink] = useState("");

  const getActivity = (numberOfKids, typeOfActivity) => {

  console.log(numberOfKids)
  console.log(typeOfActivity)
    const url = new URL("https://www.boredapi.com/api/activity");
    
    url.search = new URLSearchParams({
      "participants": numberOfKids,
      "type": typeOfActivity,
      "minprice" : 0, 
      "maxprice" : 0.5,
      "minaccessibility": 0,
      "maxaccessibility": 0.4
    })

    fetch(url)
      .then(data=> 
        {console.log(data)
         return data.json()})
      .then((response) => {
        console.log(response);
        const activityToDisplay = response.activity;
        const activityLink = response.link;
        console.log(activityLink)
        setActivity(activityToDisplay);
        setActivityLink(activityLink);
   })
  }
  

  return (
    <div class="all">
      <header>
        <div className="wrapper">
          <h1>They are bored again... </h1>
          <p className="introduction"> No matter if it's your kiddo, nephew, niece, or any other young one, you might want help finding an activity to keep them busy. </p>
          <p className="side-note">Please note that you are responsible for assessing if the activity is age appropriate.</p>
        </div>
      </header>
      <main>
        <div className="wrapper">
          <Form getActivity={getActivity}/>
          <DisplayActivity activity={activity} link={activityLink} />
        </div>
      </main>
      <footer>
        <div className="wrapper">
          <p>Created at <a href="https://junocollege.com/">Juno College of Technology</a> by <a href="https://izacodes.me/">Iza Zamorska-Wasielak</a></p>
        </div>
      </footer>
    </div>
  )
}

export default App;
