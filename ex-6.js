let height = undefined;
let result = newFunction(height);

function newFunction(height) {
  height = null ?? "Height is not defined";
  return height;
}

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
