let pageHeader = document.getElementById("pageHeader");
let pageTitle = document.getElementsByTagName("h1")[0];
let keypressInput = document.getElementById("keypressInput");
let outputTarget = document.getElementById("outputTarget");
let guineaPig = document.getElementById("guineaPig");
let addColor = document.getElementById("addColor");
let makeLarge = document.getElementById("makeLarge");
let addBorder = document.getElementById("addBorder");
let addRounding = document.getElementById("addRounding");

let articleSection = document.getElementsByTagName("article")[0];

keypressInput.addEventListener("input", function(){
    outputTarget.innerHTML = keypressInput.value;
});

function articleSel(item){
    outputTarget.innerHTML = `You clicked the ${item.innerHTML} section`;
    
}

articleSection.addEventListener("click", function(){
    let clickArticle = event.target;
    
    articleSel(clickArticle);

});

pageHeader.addEventListener("mouseover", function(){
    outputTarget.innerHTML = "You moved your mouse over the header";
});

pageHeader.addEventListener("mouseleave", function(){
    outputTarget.innerHTML = "You left me";
});

