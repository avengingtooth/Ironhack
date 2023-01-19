// Iteration 1: Names and Input
let hacker1 = 'Emma'
console.log("The driver's name is", hacker1)
let hacker2 = 'Soizic'
console.log("The navigator's name is", hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let txt = ''

for (let i = 0; i < hacker1.length; i++){
    txt += hacker1[i].toUpperCase() + ' '
}

console.log(txt)
txt = ''

for (let i = hacker2.length - 1; i >= 0; i--){
    txt += hacker2[i]
}
console.log(txt)

if (hacker1[0] < hacker2[0]){
    console.log("The driver's name goes first.")
}
else if (hacker1[0] > hacker2[0]){
    console.log("Yo, the navigator goes first definitely.")
}
else{
    console.log("What?! You both have the same name?")
}

// Bonus Time 1
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut egestas metus, id interdum nunc. Aenean gravida eros nec augue congue sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in congue ex. Quisque gravida ligula sed hendrerit efficitur. Donec mollis bibendum fringilla. Etiam elementum nec libero sit amet scelerisque. In hac habitasse platea dictumst. Mauris luctus dui odio, ut tempus lorem porttitor venenatis. Curabitur magna dui, vulputate bibendum scelerisque id, egestas id mauris. Suspendisse porttitor odio lacinia tellus tincidunt, ut imperdiet leo facilisis. Nullam leo risus, scelerisque nec neque sit amet, cursus cursus felis. Vivamus justo ante, porttitor sit amet tortor eu, semper accumsan arcu. Vivamus dictum nulla et leo vehicula, id laoreet odio eleifend. Etiam non luctus dolor. Aliquam vestibulum tortor at dui dignissim, ultricies elementum lorem euismod. Nunc fringilla non dolor vitae bibendum. Quisque efficitur ante nec odio rutrum finibus. Sed viverra faucibus ante, in varius odio varius vitae. Maecenas sagittis fermentum ultrices. Phasellus quis lacinia augue. Nam porta justo ipsum, ut maximus lectus condimentum id. Ut hendrerit libero diam, sed feugiat ante volutpat eu. Pellentesque tempor libero vitae ipsum ullamcorper, ut vehicula tortor blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ut commodo turpis. Donec pharetra aliquam pulvinar. Vivamus dignissim quam iaculis est facilisis pulvinar elementum eu lorem. Integer faucibus tincidunt dapibus. Nam ac mauris erat. Nunc cursus aliquet mauris eu aliquet. Phasellus tellus urna, commodo in consectetur vel, pellentesque eu odio. Integer vehicula nisl eros, sed tincidunt elit tincidunt auctor. Phasellus quis quam est. Nullam accumsan orci nunc, ut mollis neque interdum et. Donec elit dui, varius quis rutrum in, consectetur ac nisl. Integer eget facilisis sapien, eu interdum nisi. Sed bibendum vitae leo et luctus. Curabitur vitae lacus maximus, sodales mauris sed, vulputate justo. Suspendisse tristique felis nibh, a suscipit nunc volutpat nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi et lectus quis tortor varius lobortis id at ipsum."

let words = 1
let et = 0
let x = 0

for (let i=0; i < longText.length; i++){
    if(longText[i] = ' ') {
        words++
        if (longText.slice(i, i+4) == ' et '){
            x++
        }
    }

    if(longText[i] === ' ' && longText[i+1] === 'e' && longText[i+2] === 't' && longText[i+3] === ' '){
        et++
    }

    
    


