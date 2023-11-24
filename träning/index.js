let largeCountries = ["Tuvalu", "India", "USA","Indonesia","Monaco"]

//tuvalu and monaco is wrong
//China first
//Pakistan last

largeCountries.pop()
largeCountries.push("Pakistan")
largeCountries.shift(0)
largeCountries.unshift("China")


console.log(largeCountries);
