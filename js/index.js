// bài 1
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
var result = [];

arrA.forEach(function (item) {
  if (arrB.includes(item)) {
    result.push(item);
  }
});

document.write(
  "<p>Bài 1: Kết quả giao giữa 2 mảng <span>" +
    arrA.join(", ") +
    "</span> và mảng <span>" +
    arrB.join(", ") +
    "</span> là <span>" +
    result.join(", ") +
    "</span></p>"
);

// bài 2
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
var result = [];
function flattenArr(_arr) {
  _arr.forEach(function (item) {
    if (Array.isArray(item)) {
      flattenArr(item);
    } else {
      result.push(item);
    }
  });
  return result;
}
console.log("Bài 2:");
console.log(arr);
console.log(flattenArr(arr));
document.write("<p>Bài 2: ở console</p>");

// bài 3
var arr = [
  ["a", 1, true],
  ["b", 2, false],
];
var result = [];
arr = flattenArr(arr);
var classifyItem = [[], [], []];
arr.forEach(function (item) {
  if (typeof item === "string") {
    classifyItem[0].push(item);
  } else if (typeof item === "number") {
    classifyItem[1].push(item);
  } else {
    classifyItem[2].push(item);
  }
});
console.log("Bài 3:");
console.log(classifyItem);
document.write("<p>Bài 3: ở console</p>");

// bài 4
var contents = [
  [
    "https://picsum.photos/300/200",
    "Tiêu đề 1",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui accusantium hic eveniet minus itaque tenetur quidem cum animi repellendus tempore, aspernatur assumenda delectus debitis in voluptatem sapiente molestias rerum architecto.",
  ],
  [
    "https://picsum.photos/300/200",
    "Tiêu đề 2",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui accusantium hic eveniet minus itaque tenetur quidem cum animi repellendus tempore, aspernatur assumenda delectus debitis in voluptatem sapiente molestias rerum architecto.",
  ],
  [
    "https://picsum.photos/300/200",
    "Tiêu đề 3",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui accusantium hic eveniet minus itaque tenetur quidem cum animi repellendus tempore, aspernatur assumenda delectus debitis in voluptatem sapiente molestias rerum architecto.",
  ],
];
document.write("<p>Bài 4:</p>");
document.write("<div class='wrap'>");
contents.forEach(function (item) {
  document.write(
    " <div class='content-wrap'><img src='" +
      item[0] +
      "'><div><h2>" +
      item[1] +
      "</h2><p>" +
      item[2] +
      "</p></div></div>"
  );
});
document.write("</div>");
