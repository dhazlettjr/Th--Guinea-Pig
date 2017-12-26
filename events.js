let pageHeader = document.getElementById("pageHeader");
let pageTitle = document.getElementById("pageTitle");
let keypressInput = document.getElementById("keypressInput");
let outputTarget = document.getElementById("outputTarget");
let guineaPig = document.getElementById("guineaPig");
let addColor = document.getElementById("addColor");
let makeLarge = document.getElementById("makeLarge");
let addBorder = document.getElementById("addBorder");
let addRounding = document.getElementById("addRounding");

let articleSection = document.getElementsByTagName("article")[0];

function articleSel(item){
    outputTarget.innerHTML = `You clicked the ${item.innerHTML} section`;
    
}

articleSection.addEventListener("click", function(){
    let clickArticle = event.target;
    
    articleSel(clickArticle);

});


// articleSection.addEventListener("click", function(){
//     document.getElementsById("outputTarget").innerHTML = "you clicked on the article";
// });
