const express = require('express');  //설치한 라이브러리를 첨부해주세요
const app = express();  //라이브러리로 새로운 객체를 만들어주세요

app.listen(8080, function() {  //8080port에 서버를 띄워주세요
    console.log("listentin on 8080");
});

//a경로로 들어오면 b를 보내줌!
//누군가가 /live로 방문을 하면 live 페이지로 띄워줌

app.get('/live', function(요청, 응답) {
    응답.send('실시간 스트리밍');
})

app.get('/beauty', function(request, response) {
    response.send('뷰티용품 쇼핑 페이지임');
})

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index3.html')
})