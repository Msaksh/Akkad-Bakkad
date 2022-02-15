const tags = document.getElementById("tags");
const textarea = document.getElementById("textArea");
textarea.focus();

textarea.addEventListener("keyup", (e) => {
    trackValue(e.target.value);

    if(e.key === "Enter"){

        setTimeout(() => {
            e.target.value='';
        }, 10);

        randomSelect();
    }
})

function trackValue(input){
    // console.log(input);
    const newTagValue = input.split(',').filter(newTag => newTag.trim() !== '').map(newTag => newTag.trim());
    //  split(',') => splitting the input string with comma and return output in form of a array.
    // .filter(newTag => newTag.trim()) => filtering the array with by trimming the empty spaces.
    // .map(newTag => newTag.trim()) => is apllying this in all element of the array by trimming spaces from them {"element  " will equal to "element"}.  

    tags.innerHTML="";


    // ***************printing tags *******************//
    newTagValue.forEach(element => {
        const newTag = document.createElement("span");
        newTag.classList.add("tag");
        newTag.innerText = element;
        tags.appendChild(newTag);
    });
    // console.log(newTagValue);

} 

function randomSelect(){
    console.log("enter key pressed..")
    const times = 30;

    const interval = setInterval(() => {
        const pickRandom = pickRandomTag();

        highlight(pickRandom);

        setTimeout(() => {
            unHighlight(pickRandom);
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const random = pickRandomTag();

            greenHighlight(random);
            console.log(random);
            const choosenValue = random.innerText;
            console.log("value : "+choosenValue);
            textarea.innerText = choosenValue;
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const spanTags = document.querySelectorAll('.tag');
    return spanTags[Math.floor(Math.random() * spanTags.length)];
}

function highlight(tag) {
    tag.classList.add("highlight");
}
 function greenHighlight(tag){
     tag.classList.add('greenHighlight');
 }

function unHighlight(tag) {
    tag.classList.remove("highlight");
}