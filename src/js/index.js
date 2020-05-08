// https://forkify-api.herokuapp.com/api/search
// https://forkify-api.herokuapp.com/api/get

//GLOBAL Controller

import Search from "./models/Search";

const search = new Search("pizza");
console.log(search.getResult());
