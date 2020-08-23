# [회원가입 작업관련 내용]

## 작업경로
quiz/js/쇼핑몰회원가입/join

## 파일명
    HTML파일명: join.html
    CSS파일명: style/style.css
    JS파일명: js/script.js
    image폴더명 : /images/
    이용약관: source/memberLicense.html
                  => html body요소에 텍스트파일
                        모든 내용 복붙  : 
                        필요할 경우 <pre> 요소 사용함

  
## 작업관련 참조내용
  1) 이용약관 iframe참조 => 
      https://www.w3schools.com/tags/tag_iframe.asp
      (이용약관 내용은 source 폴더 참조)
      
  2) 아이콘참조 =>
      https://www.w3schools.com/icons/default.asp

## JS 구현내용
  1) 생년월일 드롭다운 메뉴의 option 내용
      ● 출생년도 : 1940~현재년도까지 표시
      ● 출생월 : 1~12까지 표시
      ● 출생일 : 1~31까지 표시
         (단, 매월 마지막날짜까지만 출력되며
               윤년일 경우 2월은 29일까지 출력됨)
  2)  체크박스 "14세 이상입니다.(필수)"
      => 미체크 했을 경우 form 실행 안됨
  3)  체크박스 "전체동의" 클릭하면
      => 하위 체크박스 4개 모두 
        checked 적용되어야 함
  4) "14세 이상"과 "전체동의"가 모두 체크되어 
      있어야만 form 요소가 실행됨
  5) "동의하고 가입완료" 버튼 클릭했을 경우
      이름, 아이디, 비밀번호, 이메일 중 1개라도
      공백일경우 안내문구 또는 알림창 실행
  6) 모든 필수항목이 정상입력되었을 경우
      "동의하고 가입완료" 버튼을 클릭하면
      "https://www.google.com" 페이지로
      form 요소 실행됨
      필수항목 총 6개 =>
           이름, 아이디, 비밀번호,
          이메일, 14세 이상 체크, 전체동의   
              
      
           








