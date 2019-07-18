function solve(name, area, population, country, postCode) {

    let result = {
        name,
        area,
        population,
        country,
        postCode
    };

let entries = Object.entries(result);

  for([first,second] of entries) {
      console.log(`${first} -> ${second}`);

  }
}