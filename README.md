# BLANCO : 명품 쇼핑몰

<div style="display: flex; justify-content:center; gap:20px">
  <img src="../balanco/public/utils/readme_images/CELINE.png" alt="CELINE" width=800/>
</div>
<br>

[📎 BALANCO 서비스 URL](https://balanco.vercel.app/)

- Test ID: abc@test.com
- Test PW: abcd1234

<br>

## 프로젝트 소개

BALANCO는 명품 쇼핑몰로써, 고급스럽고 세련된 느낌을 위해 블랙을 메인컬러로 사용하였고, 모바일과 태블릿 버전으로도 이용가능합니다.

- 2024.04 | 개인프로젝트

### 서비스 기능

📌 회원가입과 로그인을 통해 BALANCO 회원만의 기능을 사용할 수 있습니다.<br>
📌 검색기능과 브랜드 카테고리별로 원하는 상품을 찾아볼 수 있습니다.<br>
📌 좋아요한 상품들을 모아 확인해볼 수 있습니다. <br>
📌 장바구니 기능을 사용해서 결제할 금액을 확인할 수 있습니다<br>
📌 고객센터와 채팅기능을 사용해, 문의사항을 채팅으로 남길 수 있습니다.

### 도메인 소개

#### Main

<img src="../balanco/public/utils/readme_images/MainPage.png" alt="CELINE" width=800/>

홈화면에서는 전체 상품을 확인할 수 있으며, 페이지네이션으로 페이지별로 상품 확인이 가능합니다.
전체 상품 리스트를 살펴보면서 좋아요와 장바구니 기능도 사용할 수 있습니다.<br>

#### Search

<img src="../balanco/public/utils/readme_images/search-burberry.gif" alt="search" width=800/>
<img src="../balanco/public/utils/readme_images/Search.png" alt="search" width=800/>

검색기능을 통해 원하는 상품을 빠르게 검색해볼 수 있습니다.
<br>

#### LogIn

<img src="../balanco/public/utils/readme_images/log-in.gif" alt="log-in" width=800/>

모달로 뜨는 로그인 폼을 이용해, BALANCO 유저로 접근이 가능합니다.
아직 회원이 아니라면, 회원가입 링크로 이동할 수 있습니다.
<br>

#### SignUp

<img src="../balanco/public/utils/readme_images/sign-up.gif" alt="sign-up" width=800/>

이메일 형식과 8글자 이상의 비밀번호를 유효성 검사를 통해 BALANCO의 회원가입이 가능합니다.
<br>

#### Brand

<img src="../balanco/public/utils/readme_images/brand_%20category.png" alt="CELINE" width=800/>
<img src="../balanco/public/utils/readme_images/category_CELINE.png" alt="CELINE" width=800/>

약 50개의 브랜드별로 상품들을 찾아볼 수 있습니다.
<br>

#### Product Detail

<img src="../balanco/public/utils/readme_images/DetailPage.png" alt="DetailPage" width=800/>

상세페이지에서 해당 상품의 상세정보를 확인해볼 수 있으며,
장바구니, 좋아요 기능을 사용할 수 있습니다.
<br>

#### Cart

<img src="../balanco/public/utils/readme_images/cart.gif" alt="CartPage" width=800/>

장바구니 페이지를 통해, 총 결제해야할 금액들을 확인할 수 있습니다.
<br>

#### MyPage

<img src="../balanco/public/utils/readme_images/MyPage.png" alt="MyPage" width=800/>

마이페이지에서 좋아요한 상품들의 리스트들을 확인할 수 있습니다.
<br>

#### Chat

<img src="../balanco/public/utils/readme_images/chatting.gif" alt="Chat" width=400 />

고객센터 채팅 기능을 통해 유저는 문의사항을 남길 수 있습니다.
<br>

### 기술 스택

<hr>
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/zustand-4D4DFF?style=for-the-badge&logo=zustand&logoColor=white">
<img src="https://img.shields.io/badge/react--query-FF4154?style=for-the-badge&logo=react-query&logoColor=white">
<img src="https://img.shields.io/badge/socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white">
<img src="https://img.shields.io/badge/tailwindcss-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white">
<img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

#### commit convention

| 이모지 | 태그     | 설명                                                     |
| :----- | :------- | :------------------------------------------------------- |
| ✨     | feat     | 새로운 기능 추가 (자료 추가 포함)                        |
| 🐛     | fix      | 버그 수정 (자료 수정)                                    |
| ♻️     | refactor | 코드 리팩토링                                            |
| ✏️     | comment  | 주석 추가(코드 변경 X) 혹은 오타 수정                    |
| 📝     | docs     | README 문서 수정 (전체 개괄이나 목차만 있는 readme 파일) |
| 🔀     | merge    | merge                                                    |
| 🚚     | rename   | 파일, 폴더명 수정 혹은 이동                              |
| 💎     | style    | 코드 포맷팅, 세미콜론 누락 등                            |

### Installation

```
git clone https://github.com/Yuiii0/BALANCO.git
cd BALANCO
```

```
npm install
npm run dev
```
