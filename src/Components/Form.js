
import { useState } from "react";

const Form = ({getActivity}) => {
   
   const [userNumberChoice, setUserNumberChoice] = useState("1");
   const [userActivityChoice, setUserActivityChoice] = useState("")
   const [newSearch, setNewSearch] = useState("Show me the activity");

   const handleChange = (event) => {
      setUserNumberChoice(event.target.value);
      setNewSearch("Show me the activity")
      console.log(event.target.value)
   };

   const handleTypeChange = (event) => {
      setUserActivityChoice(event.target.value)
   }
   

   return (
      <div>
         <form 
         onSubmit={(event) => {
            event.preventDefault();
            setNewSearch("Give me more of that")
            getActivity(userNumberChoice, userActivityChoice)
            }
         } 
         className="user-form" 
         name="user-selection">
            <fieldset>
               <legend>How many kids are feeling bored?</legend>
               
               <div>
                  <input 
                     type="radio" 
                     name ="number-of-kids" 
                     id="one-kid" 
                     value="1" 
                     checked={userNumberChoice === '1'}
                     onChange={handleChange}></input>
                  <label htmlFor="one-kid">1</label>
               </div>
               <div>
                  <input 
                     type="radio" 
                     name ="number-of-kids" 
                     id="two-kids" 
                     value="2"
                     checked={userNumberChoice === '2'}
                     onChange={handleChange}></input>
                  <label htmlFor="two-kids">2 or more</label>
               </div>
            </fieldset>
            <fieldset>
               <legend>What kind of activity do you think of?</legend>
               <div>
                  <input 
                     type="radio" 
                     name ="type-of-activity" 
                     id="random" 
                     value=""
                     checked={userActivityChoice === ""}
                     onChange={handleTypeChange}>
                  </input>
                  <label htmlFor="random">Doesn't matter to me</label>
               </div>
               <div>
                  <input 
                     type="radio" 
                     name ="type-of-activity" 
                     id="education" 
                     value="education"
                     checked={userActivityChoice === "education"}
                     onChange={handleTypeChange}>
                  </input>
                  <label htmlFor="education">Education</label>
               </div>
               <div>
                  <input 
                     type="radio" 
                     name ="type-of-activity" 
                     id="recreational" 
                     value="recreational"
                     checked={userActivityChoice === "recreational"}
                     onChange={handleTypeChange}>
                  </input>
                  <label htmlFor="recreational">Recreational</label>
               </div>
               <div>
                  <input 
                     type="radio" 
                     name ="type-of-activity" 
                     id="social" 
                     value="social"
                     checked={userActivityChoice === "social"}
                     onChange={handleTypeChange}>
                  </input>
                  <label htmlFor="social">Social</label>
               </div>
               <div>
                  <input 
                     type="radio" 
                     name ="type-of-activity" 
                     id="diy" 
                     value="diy"
                     checked={userActivityChoice === "diy"}
                     onChange={handleTypeChange}>
                  </input>
                  <label htmlFor="diy">DIY</label>
               </div>
               <div>
                  <input 
                     type="radio" 
                     name ="type-of-activity" 
                     id="cooking" 
                     value="cooking"
                     checked={userActivityChoice === "cooking"}
                     onChange={handleTypeChange}>
                  </input>
                  <label htmlFor="cooking">Cooking</label>
               </div>
               <div>
                  <input 
                     type="radio" 
                     name ="type-of-activity" 
                     id="busywork" 
                     value="busywork"
                     checked={userActivityChoice === "busywork"}
                     onChange={handleTypeChange}>
                  </input>
                  <label htmlFor="busywork">Chores to keep them busy</label>
               </div>
            </fieldset>
            <button
               type="submit"> {newSearch} </button>
         </form>
      </div>
   )
}

export default Form; 
