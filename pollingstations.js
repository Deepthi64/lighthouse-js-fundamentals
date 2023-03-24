const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations (stations) {
  let goodstations = []
  for (const station of stations) {
    
   const capacity = station[1]

     if (capacity >= 20) {
        const type = station[2]
        
        if(type === "school" || type === "communtiy center") {
        
         goodstations.push(station[0])
         //console.log(goodstations)
      
        }
      }
  }

  return goodstations
}


console.log(chooseStations(stations))