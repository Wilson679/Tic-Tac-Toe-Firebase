/* 棋盘动态效果 */
.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  max-width: 500px;
  margin: 20px auto;
}

.cell {
  aspect-ratio: 1;
  background: #f8f9fa;
  border: 3px solid #4a90e2;
  border-radius: 15px;
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* 胜利动画 */
.win-animation {
  animation: glow 1.5s infinite;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
}

@keyframes glow {
  0% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
  100% { opacity: 0.8; transform: scale(1); }
}

/* 模式选择特效 */
.mode-panel button:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}