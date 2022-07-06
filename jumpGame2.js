var canJump = function(nums) {
    let lastIndex = nums.length - 1
    let result = false

    if (nums.length === 1) {
        return true
    }

    function jumpGame(index) {
        let newIndex = 0

        for (var i = 1; i <= nums[index]; i++) {
            if (index + i >= lastIndex) {
               result = true
               break;
            } else if (nums[i + index] === 0 ) {
                continue;
            } else if (index + i + nums[i + index] > newIndex + nums[newIndex]) {
                newIndex = i + index
            }
        }
        console.log(newIndex)
        if (newIndex === 0) {
            return
        } else {
            jumpGame(newIndex)  
        }  
    }

    jumpGame(0)
    return result
};

console.log(canJump([5,9,3,2,1,0,2,3,3,1,0,0]))