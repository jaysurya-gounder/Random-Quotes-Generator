function generateQuote() {
    // Get a random index from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    console.log(randomIndex)
    // Display the random quote
    document.getElementById("quotes").textContent = quotes[randomIndex].quote;
    document.getElementById("writerName").textContent = quotes[randomIndex].writer;
  }