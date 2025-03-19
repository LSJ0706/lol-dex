## 롤 백과사전
Riot Api를 사용한 롤의 정보를 보여주는 사이트입니다!<br/>

<br/>

## 📑 페이지 구성
| 페이지 | 경로 | 설명 |
| --- | --- | --- |
| 홈 | `/` | 메인 홈화면 |
| 챔피언 목록 페이지| `/champions` | 롤 챔피언의 목록 보여주기 |
| 아이템 목록 페이지| `/items` | 롤 아이템의 목록 보여주기|
| 챔피언 로테이션 페이지| `/rotation` | 금주의 무료 챔피언 보여주기 |
| 챔피언 상세 페이지 | `/champions/[id]` | 롤 챔피언의 상세 정보 보여주기 |

<br/>
<br/>

## ⚙ 주요 기능

- 롤의 아이템, 챔피언, 금주의 무료 챔피언을 확인할 수 있습니다.
- 사용자 경험 향상: next.js를 통해 ssr, csr, isr, ssg를 사용하여 사용자의 편의성을 더했습니다.
- 사용자 경험 향상: PC, 태블릿, 모바일 환경에서 헤더와 화면이 반응형으로 변합니다.

<br/>

## 🕶️ 기술 스택

#### **Deploy** <br/>

&emsp; <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"/>

#### **Frontend** <br/>

&emsp; <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white" alt="Next.js"/><img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white" alt="Tailwind CSS"/><img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" alt="TypeScript"/>

<br/>
<br/>

## 📍 프로젝트 실행
```sh
$ git clone https://github.com/LSJ0706/lol-dex.git
$ cd lol-dex

$ npm install
$ npm run dev
```
<br/>
<br/>

## 📁 프로젝트 구조
```
LOL-DEX\src
├─app
│  ├─api
│  │  └─rotation
│  ├─champions
│  │  └─[id]
│  ├─items
│  └─rotation
├─components
│  ├─champions
│  ├─commons
│  └─items
├─constants
├─types
└─utils
```

<br />
<br/>
