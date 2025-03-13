const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// CORS 설정 (모든 요청 허용)
app.use(cors());

// JSON 데이터를 반환하는 API 엔드포인트
app.get("/api/quiz", (req, res) => {
  const quizData = [
    {
      question: "HTML의 약자는 무엇인가?",
      options: ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Management Language"],
      answer: 0
    },
    {
      question: "CSS의 역할은 무엇인가?",
      options: ["웹 페이지의 디자인을 담당", "웹 페이지의 기능을 담당", "웹 페이지의 데이터를 저장"],
      answer: 0
    },
    {
      question: "JavaScript는 어떤 언어인가?",
      options: ["프로그래밍 언어", "데이터베이스 언어", "디자인 언어"],
      answer: 0
    }
  ];

  res.json(quizData);
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`✅ 서버가 http://localhost:${PORT} 에서 실행 중`);
});
