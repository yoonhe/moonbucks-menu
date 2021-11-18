export default function App({ $root, initialState }) {
  this.state = initialState;

  this.$app = document.createElement("div");
  this.$app.id = "app";
  this.$app.className = "px-4";

  $root.appendChild(this.$app);

  this.render = () => {
    this.$app.innerHTML = `
      <div class="d-flex justify-center mt-5 w-100">
        <div class="w-100">
          <header class="my-4">
            <a href="/" class="text-black">
              <h1 class="text-center font-bold">🌝 문벅스 메뉴 관리</h1>
            </a>
            <nav class="d-flex justify-center flex-wrap">
              <button
                data-category-name="espresso"
                class="cafe-category-name btn bg-white shadow mx-1"
              >
                ☕ 에스프레소
              </button>
              <button
                data-category-name="frappuccino"
                class="cafe-category-name btn bg-white shadow mx-1"
              >
                🥤 프라푸치노
              </button>
              <button
                data-category-name="blended"
                class="cafe-category-name btn bg-white shadow mx-1"
              >
                🍹 블렌디드
              </button>
              <button
                data-category-name="teavana"
                class="cafe-category-name btn bg-white shadow mx-1"
              >
                🫖 티바나
              </button>
              <button
                data-category-name="desert"
                class="cafe-category-name btn bg-white shadow mx-1"
              >
                🍰 디저트
              </button>
            </nav>
          </header>
          <main class="mt-10 d-flex justify-center">
            <div id="container" class="wrapper bg-white p-10">
              <div class="heading d-flex justify-between">
                <h2 class="mt-1">☕ 에스프레소 메뉴 관리</h2>
                <span class="mr-2 mt-4 menu-count">총 0개</span>
              </div>
              <form id="espresso-menu-form">
                <div class="d-flex w-100">
                  <label for="espresso-menu-name" class="input-label" hidden>
                    에스프레소 메뉴 이름
                  </label>
                  <input
                    type="text"
                    id="espresso-menu-name"
                    name="espressoMenuName"
                    class="input-field"
                    placeholder="에스프레소 메뉴 이름"
                    autocomplete="off"
                  />
                  <button
                    type="button"
                    name="submit"
                    id="espresso-menu-submit-button"
                    class="input-submit bg-green-600 ml-2"
                  >
                    확인
                  </button>
                </div>
              </form>
              <ul id="espresso-menu-list" class="mt-3 pl-0">
                ${this.state.menuList
                  .map(
                    ({ name }) => `
                    <li class="menu-list-item d-flex items-center py-2">
                      <span class="w-100 pl-2 menu-name">${name}</span>
                      <button
                        type="button"
                        class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
                      >
                        수정
                      </button>
                      <button
                        type="button"
                        class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
                      >
                        삭제
                      </button>
                    </li>
                  `
                  )
                  .join("")}
              </ul>
            </div>
          </main>
        </div>
      </div>
    `;
  };

  this.render();
}