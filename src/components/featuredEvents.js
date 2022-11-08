import React from "react"
import EventCard from "./eventCard";



const FeaturedEvents=({events,bots})=>{

    // const eventList = Object.keys(events).map((event) => (
    //     <EventCard key={events[event].id} bot={events[event]}  />
    //   ));
      const botList = Object.keys(bots).map((bot) => (
        <EventCard key={bots[bot].id} bot={bots[bot]}/>
      ));

    return (

        <div className="ui four column grid">
      <div className="row">{botList}</div>
    </div>
    )
}
export default FeaturedEvents
