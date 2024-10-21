let vocals = ['a','e','i','o','u']

function lookAt(the_phrase, letter){
    let index = the_phrase.indexOf(letter)
    return (index > -1) ? letter : -1
}

function getSentence(sentence){
    return sentence;
} 

function searchVocals(sentence){
    let letter = "";
    let vocals_copy = vocals.slice();
    let vocals_finded = [];

    for (let index = 0; index < vocals.length; index++) {
            letter = lookAt(sentence, vocals_copy.shift())
            if( typeof(letter) == "string"){
                vocals_finded.push(letter)
            }
    }
    return vocals_finded;
}
function deleteDuplicity(list){
    let array_set = new Set(list);
    let vocals_set = new Set(vocals);
    return Array.from(vocals_set.intersection(array_set));
} 
function getVocals(sentence){
    let vocals = searchVocals(sentence);
    let vocals_string = []
    for (let index = 0; index < vocals.length; index++) {
        vocals_string += vocals[index];
        if(index != vocals.length-1){
            vocals_string +=",";
        }
    }
    return vocals_string
}

function update_loop(){
    let word = document.getElementById("input_text")
    
    idGetSentence.innerHTML = "<h2>Este es getSentence: " + getSentence(word.value) + "<h2>";
    idSearchVocals.innerHTML = "<h2>Este es searchVocals: [" + searchVocals(word.value) + "]<h2>";
    idDeleteDup.innerHTML = "<h2>Este es deleteDuplicity: [" + deleteDuplicity(word.value) + "]<h2>";
    idgetVocals.innerHTML = "<h2>Este es getVocals: '" +getVocals(word.value) + "'<h2>";
}
// const word = getSentence("esta es la sentecia")
document.getElementById("input_text").addEventListener("keydown", update_loop);
document.getElementById("input_text").addEventListener("keyup", update_loop);



console.log(getSentence("Hola como esta"));
console.log(searchVocals("la le li lo lu pa pe pi po pu"));
console.log(deleteDuplicity(['i','i']));
console.log("'" + getVocals("Hello World!") + "'");