import './App.css';
import { useState } from 'react';

// components

import DisplayActivity from './Components/DisplayActivity';
import Form from './Components/Form';
import Error from './Components/Error';


function App() {

  //states for the activity to display 
  const [activity, setActivity] = useState("");
  const [activityLink, setActivityLink] = useState("");

  // catching errors from API
  const [formError, setFormError] = useState(false);


  const getActivity = (numberOfKids, typeOfActivity) => {

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
      .then(data=> data.json())
      .then((response) => {
        const activityToDisplay = response.activity;
        const activityLink = response.link;
        setActivity(activityToDisplay);
        setActivityLink(activityLink);
        setFormError(false);
   })
  //  error handling 
   .catch((error) => {
    setFormError(true);
  }
    );
  }
  
  return (
    <div className="all">
      <header>
        <div className="wrapper">
          <h1>They are bored <span>again</span>... </h1>
          <p className="introduction"> No matter if it's your kiddo, nephew, niece, or any other young one, you might want help finding an activity to keep them busy. </p>
          <p className="side-note">Please note that you are responsible for assessing if the activity is age appropriate.</p>
        </div>
      </header>
      <main>
        <div className="wrapper">
          <Form getActivity={getActivity}/>
          <Error error={formError}/>
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
