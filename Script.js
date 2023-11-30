// JavaScript
const words = ['apple', 'banana', 'orange', 'grape', 'pineapple', 'watermelon', 'strawberry', 'kiwi', 'blueberry', 'peach'];
let currentWord;
let score = 0;

const wordDisplay = document.getElementById('wordDisplay');
const typedWordInput = document.getElementById('typedWord');
const scoreDisplay = document.getElementById('score');

// 新しい単語を表示
function newWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  currentWord = words[randomIndex];
  wordDisplay.textContent = currentWord;
}

// タイプした単語のチェック
typedWordInput.addEventListener('input', () => {
  const typedWord = typedWordInput.value.trim();
  if (typedWord === currentWord) {
    score++;
    scoreDisplay.textContent = 'スコア: ' + score;
    typedWordInput.value = '';
    newWord();
  }
});

// ゲーム開始
newWord();
