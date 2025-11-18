var feedback = "Great product! Fast delivery and amazing sound quality!";

var words = feedback.split(" "); // we are spliting the string feedback into array
var wordCount = 0;
for (var i = 0; i < words.length; i++) {
    if (words[i] !== "") { // if string is empty we are not counting it
        wordCount++;
    }
}

var lowerCaseFeedback = feedback.toLowerCase();
var hasNegative = lowerCaseFeedback.includes("bad") || lowerCaseFeedback.includes("poor");


console.log("Word Count:", wordCount);

if (hasNegative) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}