var canJump = function(nums) {
    let lastIndex = nums.length - 1
    let result = false
    let indexes = []

    if (nums.length === 1) {
        return true
    }

    function jumpGame(index) {
        for (var i = nums[index]; i > 0; i--) {
            if (index + i >= lastIndex) {
                result = true
                break;
            } else if (i === 0 ) {
                continue;
            } else {
                if (indexes.includes(index + i) === true) {
                    continue;
                } else {
                    indexes.push(index + i)
                    jumpGame(index + i)
                }
            }
        }
    }

    jumpGame(0)
    return result
};

console.log(canJump([8,2,4,4,4,9,5,2,5,8,8,0,8,6,9,1,1,6,3,5,1,2,6,6,0,4,8,6,0,3,2,8,7,6,5,1,7,0,3,4,8,3,5,9,0,4,0,1,0,5,9,2,0,7,0,2,1,0,8,2,5,1,2,3,9,7,4,7,0,0,1,8,5,6,7,5,1,9,9,3,5,0,7,5]))