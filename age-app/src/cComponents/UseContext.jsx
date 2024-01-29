import React,{ useContext } from "react";
import { ToggleTheme } from "../App";
import NewUseState from "./NewUseState";


function UseContext(){
  const para = `Damn
  I was in Ohio before I met you
  I rizzed too much and that's an issue
  But I'm Grimace Shake
  Gyat!
  Tell your friends it was nice to rizz them
  But I hope I never meet you again
  I know it breaks your Fanum
  Taxin' in Ohio and I'm still not Sigma
  Four years, no Livvy
  Now you're lookin' pretty on Adin Ross' twitchy
  And I can't rizz
  No, I can't mew
  So baby Gronk me closer
  In the back Skibidi Toilet
  That I know you can't afford
  Kai Cenat tatted on my shoulder
  Pull the gyat right of the corner
  From that Fanum that you taxed
  From your roommate back in Ohio
  We ain't ever not the Rizzler!
  We ain't ever not the Rizzler!
  We ain't ever not the Rizzler!
  Yeah, that's sick!`

  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2rem",
    margin:"2rem"
  }

  return(
    <div style={themeStyle}>
      <NewUseState para={para}/>
    </div>
  )
}

export default UseContext;