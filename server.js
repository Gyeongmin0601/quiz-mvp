const express = require('express'); 
const app = express();
const PORT = 3000;

// 기본 엔드포인트 설정
app.get('/', (req, res) => {
    res.send("서버가 정상적으로 실행되었습니다!");
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`서버 실행 중: http://localhost:${PORT}`);
});
