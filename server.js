const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const quizData = [
  {
    question: "연인이 몰래 외도를 했다! 당신은?",
    options: [
      { text: "증거를 모아 철저히 복수한다", score: ["지선우", "설명숙"] },
      { text: "대화로 해결하려 한다", score: ["고예림", "김윤기"] }
    ]
  },
  {
    question: "사랑과 현실 중 하나를 선택해야 한다면?",
    options: [
      { text: "사랑보다 현실이 중요하다", score: ["설명숙", "손제혁"] },
      { text: "현실보다 사랑이 먼저다", score: ["이태오", "여다경"] }
    ]
  },
  {
    question: "상대방이 나에게 거짓말을 했다면?",
    options: [
      { text: "절대 용서하지 않는다", score: ["지선우", "설명숙"] },
      { text: "한 번쯤은 용서할 수도 있다", score: ["고예림", "여다경"] }
    ]
  },
  {
    question: "연애할 때 나는?",
    options: [
      { text: "헌신적이지만 현실적이다", score: ["고예림", "김윤기"] },
      { text: "감정적으로 몰입하는 스타일이다", score: ["이태오", "여다경"] }
    ]
  },  {
    question: "중요한 일을 앞두고 긴장하는 편인가?",
    options: [
      { text: "차분하게 준비하며 논리적으로 해결", score: ["지선우", "김윤기"] },
      { text: "불안하지만 직감적으로 행동", score: ["이태오", "여다경"] }
    ]
  },
  {
    question: "친구가 배신을 했다면?",
    options: [
      { text: "영원히 관계를 끊어버린다", score: ["설명숙", "지선우"] },
      { text: "사정을 듣고 이해하려 한다", score: ["고예림", "김윤기"] }
    ]
  },
  {
    question: "직장에서 큰 실수를 했다면?",
    options: [
      { text: "조용히 묻어두고 해결책을 찾는다", score: ["손제혁", "설명숙"] },
      { text: "상사에게 솔직하게 이야기 한다", score: ["김윤기", "지선우"] }
    ]
  },
  {
    question: "연애할 때 중요한 것은?",
    options: [
      { text: "신뢰와 원칙을 지키는 것", score: ["지선우", "김윤기"] },
      { text: "감정을 최우선으로 하는 것", score: ["이태오", "여다경"] }
    ]
  },
  {
    question: "내가 원하는 사랑은?",
    options: [
      { text: "안정적이고 현실적인 관계", score: ["고예림", "김윤기"] },
      { text: "뜨겁고 열정적인 사랑", score: ["이태오", "여다경"] }
    ]
  },
  {
    question: "위기 상황에서 나는?",
    options: [
      { text: "철저한 계획을 세우고 해결", score: ["지선우", "손제혁"] },
      { text: "상황에 맞춰 즉흥적으로 행동", score: ["이태오", "여다경"] }
    ]
  },
  {
    question: "나는 타인의 평가를 중요하게 생각하는가?",
    options: [
      { text: "평가보다는 내 기준이 중요하다", score: ["김윤기", "지선우"] },
      { text: "다른 사람의 시선이 중요하다", score: ["이태오", "여다경"] }
    ]
  },
  {
    question: "예상치 못한 문제가 발생하면?",
    options: [
      { text: "냉정하게 대처하며 전략적으로 접근", score: ["설명숙", "지선우"] },
      { text: "감정적으로 반응하고 직감적으로 해결", score: ["이태오", "여다경"] }
    ]
  },
  // ⚠️ 여기에 질문 10개를 추가하세요 (총 12개)
];

app.get("/api/quiz", (req, res) => {
  res.json(quizData);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
