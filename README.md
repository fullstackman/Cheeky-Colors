# Cheeky-Colors
HEX colors with a little personality!
Download a modern dictionary [here](https://dumps.wikimedia.org/enwiktionary/20170620/). The list of page titles should be all that you need.

## Algorithm to find similar colors
Parse the hex code and find the segment with the highest value. Match with colors that have a highest value segment within the range + or - 64 bytes of that segment value.

For example:
 * #37a10f
 * highest value segment is the middle "a1"
 * Accept all colors that have a middle segment value of "71" to "d1"
