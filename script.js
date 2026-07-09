const button = document.getElementById("revealButton");
const text = document.getElementById("hiddenText");

const poems = [
    {
        title: "Sole",
        date: new Date("2026-6-30"),
        link: "poems/Sole.html"
    },

    {
        title: "Do You Understand?",
        date: new Date("2026-7-2"),
        link: "poems/Do_You_Understand.html"
    },

    {
        title: "Stuffed Animals",
        date: new Date("2026-7-9"),
        link: "poems/Stuffed_Animals.html"
    }
];
const poemList = document.getElementById("poemList");


function displayPoems(poemsToDisplay) {

    poemList.innerHTML = "";

    poemsToDisplay.forEach(poem => {

        poemList.innerHTML += `
        
        <div class="poem-card">

            <h2>${poem.title}</h2>

            <p>${poem.date.toDateString()}</p>

            <a href="${poem.link}">
                Read Poem →
            </a>

        </div>

        `;

    });

}


// Only run the library code if the library exists
if (poemList) {

    displayPoems(poems);


    const sortOptions = document.getElementById("sortOptions");


    sortOptions.addEventListener("change", function(){

        let sortedPoems = [...poems];


        if(this.value === "latest") {

            sortedPoems.sort((a,b) => b.date - a.date);

        } 
        
        else {

            sortedPoems.sort((a,b) => a.date - b.date);

        }


        displayPoems(sortedPoems);

    });

}
