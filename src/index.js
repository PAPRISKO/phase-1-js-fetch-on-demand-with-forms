const init = () => {
    const inputForm = document.querySelector("form");

    inputForm.addEventListener("submit", (event) => {
        event.preventDefault(); 
        
        const input = document.querySelector("input#searchByID");
        const movieId = input.value;

        fetch(`http://localhost:3000/movies/${movieId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Movie not found! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                const title = document.querySelector("section#movieDetails h4");
                const summary = document.querySelector("section#movieDetails p");

                title.innerText = data.title;
                summary.innerText = data.summary;
            })
            .catch((error) => {
                console.error("Error fetching movie:", error);
                alert("Movie not found! Please enter a valid ID.");
            });

        input.value = "";
    });
};

document.addEventListener("DOMContentLoaded", init);
