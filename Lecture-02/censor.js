function censorWord(sentence, wordToCensor) {
    const regex = new RegExp(wordToCensor, 'gi')
    const censoredText = sentence.replace(regex, '***')
    return censoredText
}

const originalPost = "JavaScript is fun but sometimes javascript can be tricky."
const censoredPost = censorWord(originalPost, "javascript")
console.log(censoredPost) 
// Output: "*** is fun but sometimes *** can be tricky."