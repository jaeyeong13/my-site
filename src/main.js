// Header에 페이지 아래로 스크롤 시 다크 스타일링을 적용한다.
const header = document.querySelector(".header"); // 클래스 header인 것을 가진 요소들을 찾아 달라고 querySelector에 요청함
// document: 문서 전체에 대한 정보를 갖고 있는 객체
const headerHeight = header.offsetHeight;
document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

// Home 섹션을 아래로 스크롤 시 투명하게 처리함
const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;
document.addEventListener("scroll", () => {
  console.log(1 - window.scrollY / homeHeight);
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
