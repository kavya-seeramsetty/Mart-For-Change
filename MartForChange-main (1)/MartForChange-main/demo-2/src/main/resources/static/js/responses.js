function getBotResponse(input) {
  // hardcoded inputs
  if (input.toLowerCase() === "hello") {
    return "Hi there!!";
  } else if (input.toLowerCase() === "place order") {
    return "Please provide customer details.";
  }

  // simple responses
  if (input.toLowerCase() === "thanks" || input.toLowerCase() === "bye") {
    return "Talk to you later!";
  } else {
    return "Try asking something else!";
  }
}
