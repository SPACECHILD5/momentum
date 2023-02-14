const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // html에 이미지 요소 생성하기

bgImage.src = `img/${chosenImage}`; // 이미지 소스 위치 알려주기
document.body.appendChild(bgImage); // 웹페이지에 백그라운드 이미지 출력하기

//Node.appendChild() 메소드
// 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙임
