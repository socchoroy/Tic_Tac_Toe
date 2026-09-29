import { checkWinner, checkDraw } from "./rules.js";

// ১. টেস্ট বোর্ডসমূহ ডিফাইন করা
const emptyBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const sameBoard = [
  ["X", "O", "X"],
  ["X", "O", "O"],
  ["O", "X", "X"],
];

// ২. সবগুলো টেস্টকে একসাথে console.log করা
console.log("=== 1. Empty Board Tests ===");
console.log("Winner:", checkWinner(emptyBoard)); // Expected: null
console.log("Draw:", checkDraw(emptyBoard)); // Expected: false

console.log("\n=== 2. Winning Conditions ===");
console.log(
  "X wins top row:",
  checkWinner([
    ["X", "X", "X"],
    ["O", "O", null],
    [null, null, null],
  ]),
); // Expected: "X"

console.log(
  "O wins diagonal:",
  checkWinner([
    ["O", "X", "X"],
    [null, "O", null],
    [null, null, "O"],
  ]),
); // Expected: "O"

console.log("\n=== 3. Draw Conditions ===");
console.log(
  "Full board draw:",
  checkDraw([
    ["X", "O", "X"],
    ["X", "O", "O"],
    ["O", "X", "X"],
  ]),
); // Expected: true

console.log("Winner check on same board:", checkWinner(sameBoard)); // Expected: null

console.log(
  "Full board WITH winner (NOT a draw):",
  checkDraw([
    ["X", "X", "X"],
    ["O", "O", "X"],
    ["X", "O", "O"],
  ]),
); // Expected: false

console.log("\n=== 4. Partial Game ===");
console.log(
  "Partial line (no winner):",
  checkWinner([
    ["X", "X", null],
    [null, null, null],
    [null, null, null],
  ]),
); // Expected: null
