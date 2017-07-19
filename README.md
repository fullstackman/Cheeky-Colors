# Cheeky-Colors
Give your digital colors some personality! Design inspired by [this awesome collection](https://github.com/webkul/coolhue) of background gradients.

## About
Using [LeetSpeak](https://en.wikipedia.org/wiki/Leet), there are many fun words that can be spelled using the hexadecimal digits and used as colors on the web and in digital applications. This website contains over 14,000 opinionated spellings along with a visual representation and word definitions. That list didn't come from arbitrary guesswork or community contributions. Rather, a set of rules was defined for an algorithm so that it could derive all possible colors from a [modern dictionary](https://dumps.wikimedia.org/enwiktionary/20170620/) that encompasses many different languages. Check out the dictionary folder to read more about my process.

 ## What's Next
  * Incorporate search sidebar
  * Allow for filter by number of characters and/or first letter
  * Google Analytics
  * Design a logo
  * Add [progressive web app](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/) capability

### Algorithm to find similar colors
Parse the hex code and find the segment with the highest value. Match with colors that have a highest value segment within the range + or - 64 bytes of that segment value.

For example:
 * #37a10f
 * highest value segment is the middle "a1"
 * Accept all colors that have a middle segment value of "71" to "d1"
 
 Note that the 3-character names expand to be 6 characters by inserting a copy of each character right after itself. So, #5EA expands to #55EEAA. 
 
## Disclaimer
Just to be clear, the content of this site does not represent the entire range of possible spellings. Languages are constantly evolving and new words will be created that may not reach this site (assuming emojis don't [completely replace](https://www.thesocialclinic.com/are-emojis-replacing-words/) our use of written words). On top of that, these spellings are opinionated. I defined a certain set of rules and let an algorithm do all the work. By using different rules or changing the spelling of certain words, one could easily generate a different list of spellings. This project is open sourced precisely so that others may freely modify it to suit their needs/preferences.

Also, I didn't know that somebody [already attempted this](bada55.io). Hopefully you find a unique use for my implementation.
