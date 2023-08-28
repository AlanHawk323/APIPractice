let events = [];
const eventData = document.querySelector("#eventData");

async function fetchEvents()
    {const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/events");
    const json = await response.json();
    events = json.data;
    render();
    }

function render()
    {console.log(events);
    const html = events.map(function(event)
        {return `<p> <h3> ${event.name} </h3>
        <p> Date: ${event.date} </p>
        <p> Location: ${event.location} </p>
        <p> ID: ${event.id} </p>
        <p> Description: ${event.description} </p> <br> </p>`
            }).join("");
            eventData.innerHTML = html;
    };
    fetchEvents()

    //This was just me practicing eventListeners further
const button = document.querySelector("button");
console.log(button);

    button.addEventListener("click", (function()
    {console.log("I clicked it")}
    ));