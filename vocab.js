const xyz=document.querySelector("#def");
const abc=document.querySelector("#dfn1");

let randWord = async () => {
    fetch("https://random-word-api.herokuapp.com/word")
    .then((response)=>response.json())
    .then((data)=>{
        const d=data[0];
        const word = d;
    const sup=word.charAt(0).toUpperCase()+word.slice(1)+":-";
    defination(data,sup);
    })
.catch (()=> {
    document.querySelector("#dfn1").innerText="Please try after sometime."
})
}
let defination=async (word,sup)=>{
try{
    const def=axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/"+word);
    const defi=def.data[0].meanings[0].definitions[0].definition;
    // document.querySelector("#def").innerText=defi;
    display(sup,defi);
    console.log(defi);
}catch(undefined){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd43e2a2e4fmsh0cf86d28595e583p1d4ac2jsn6ba120129247',
            'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
        }
    };
    fetch('https://mashape-community-urban-dictionary.p.rapidapi.com/define?term='+word, options)
        .then(response => response.json())
        .then(data =>{ console.log(data.list[0].definition)
        const defi2=data.list[0].definition;
        display(sup,defi2);
})
        .catch((errors)=>{console.error("Search Yourself");
        const str="Search Yourself";
    display(sup,str)})
    

}}
const display=(dfn,def)=>{
    abc.innerText=dfn;
    xyz.innerText=def;
}
window.addEventListener("load",(e)=>{
    e.preventDefault();
    randWord();
})
// chrome.tabs.onCreated.addListener((activeInfo: object)=>{
//     randWord();
// })
