/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    if (image[sr][sc] === color ){
     return image;
    }
    var fill = image[sr][sc]
    image[sr][sc] = color
    if (sr+1 <= image.length-1 && fill === image[sr+1][sc]) {
      floodFill(image, sr+1, sc, color)
    }
    if (sr-1 >= 0 && fill === image[sr-1][sc]) {
      floodFill(image, sr-1, sc, color)
    }
    if (sc+1 <= image[0].length-1 && fill === image[sr][sc+1]) {
      floodFill(image, sr, sc+1, color)
    }
    if (sc-1 >= 0 && fill === image[sr][sc-1]) {
      floodFill(image, sr, sc-1, color)
    }
    return image;

};