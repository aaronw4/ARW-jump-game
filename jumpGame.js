var canJump = function(nums) {
    let lastIndex = nums.length - 1
    let result = false

    if (nums.length === 1) {
        return true
    }

    function jumpGame(index) {
        for (var i = nums[index]; i > 0; i--) {
            console.log(index, i)
            if (index + i === lastIndex) {
                result = true
                break
            } else if (i === 0 || index + i > lastIndex) {
                continue
            } else if (index + i < lastIndex) {
                jumpGame(index + i)
            }
        }
    }

    jumpGame(0)
    return result
};

console.log(canJump([4,0,4,2,2,0,1,3,3,0,3]))