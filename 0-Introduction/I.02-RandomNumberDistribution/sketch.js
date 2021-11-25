let nums = [];

function setup() {
  createCanvas(400, 400);
  background(250);
  fill(200);
  for (let i = 1; i <= 20; i++) {
    nums.push(0);
  }
}

function draw() {
  const index = int(random(nums.length));
  nums[index]++;

  const w = width / nums.length;
  for (let x = 0; x < nums.length; x++) {
    rect(x * w, height - nums[x], w - 1, nums[x]);
  }
}
