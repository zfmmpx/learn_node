// input = [1,2,3]
// output = [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]

function getAllSubSet(input) {
  const output = []
  const length = input.length

  const digui = (num) => {
      if (num === 0) {
        output.push([])
      }
      if (num > 0 && num < length) {
        // output.push([])
        // output[output.length - 1].push()

        const result = []
        const digui2 = (num) => {
          result.push[input[numg]]
          digui2(num - 1)
        }
        output.push(result)
        // output.push()
        // for (let j = 0; j < length; j += 1) {
        //   for (let i = 0; i < num; i += 1) {
        //     output[output.length - 1].push(input[i])
        //     if (output[output.length - 1].length === num) {
        //       output.push([])
        //     }
        //   }
        // }
      }
      if (num === length) {
        output.push(input)
        return
      }
      digui(num + 1)
  }
  digui(0)
  return output
}

console.log(getAllSubSet([1, 2, 3]))