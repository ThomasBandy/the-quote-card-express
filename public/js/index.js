"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};

async function getRandomImage() {
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${process.env.CLIENT_ID}`;
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.urls.regular;

        return receivedPhotoUrl;
    } catch (error) {
        console.error(error);
    }
}

app.use("/api/v1/getRandomImage", async (request, response) => {
    response.status(200).json({
        status: 200,
        data: await getRandomImage(),
    });
});

/*async function getRandomImage() {
    const client_id = "3OB_oolul3T9tKleCbTbd_DZMWaQHe79NuFSC6Rvxg0";
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${client_id}`;
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json()
        const receivedPhotoUrl = returnedData.urls.regular;

        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url("${receivedPhotoUrl}")`;
    } catch (error) {
        console.error(error);
    }
    }

getRandomImage();*/

/*const quotes = [
    {
        quote: "Cortana",
        author: "Master Chief",
    },

    {
        quote: "It's a me, Mario!",
        author: "Mario Mario",
    },

    {
        quote: "Well it may be stupid, but it's also dumb!",
        author: "Patrick Star",
    },
]
function loopThroughQuotes() {
    let quoteIndex = 0;
    setInterval(() => {
        if (quoteIndex < quotes.length) {
            elements.quote.textContent = quotes[quoteIndex].quote;
            elements.author.textContent = quotes[quoteIndex].author;
            quoteIndex++;
        } else {
            quoteIndex = 0;
        }
    }, 3000);
}
setTimeout(loopThroughQuotes, 3000); */