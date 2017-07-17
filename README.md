# Cheeky-Colors
Give your digital colors some personality! Inspired by [this awesome collection](https://github.com/webkul/coolhue) of background gradients.

Download a modern dictionary [here](https://dumps.wikimedia.org/enwiktionary/20170620/). The list of page titles should be all that you need.

## Algorithm to find similar colors
Parse the hex code and find the segment with the highest value. Match with colors that have a highest value segment within the range + or - 64 bytes of that segment value.

For example:
 * #37a10f
 * highest value segment is the middle "a1"
 * Accept all colors that have a middle segment value of "71" to "d1"

 ## What's Next
  * Incorporate search sidebar
  * Allow for filter by number of characters and/or first letter
  * Design a logo
  * Add [progressive web app](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/) capability