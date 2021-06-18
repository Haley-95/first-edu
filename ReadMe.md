# FIRST EDU

### 1. GNB

- Before Login

```html
<body class="non-member-page-background">
  <header class="non-member-header">
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div class="non-member-header-wrapper">
            <section class="non-member-header-left">
              <h1 class="white-logo">
                <a href="/">
                  <img src="./assets/png/White Logo.png" alt="FIRST EDU"
                /></a>
              </h1>
            </section>

            <section class="non-member-header-right">
              <article class="portpolio-icon-content">
                <a
                  class="portpolio-icon-item"
                  href="https://github.com/FirstEduTeam/FirstEdu"
                  target="_blank"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a
                  class="portpolio-icon-item"
                  href="https://www.notion.so/1-6738b688eb524bb5aaeaab898d6d0f71"
                  target="_blank"
                >
                  <span
                    class="iconify notion-icon"
                    data-icon="simple-icons:notion"
                    data-inline="false"
                  ></span>
                </a>
                <a
                  class="portpolio-icon-item"
                  href="https://www.figma.com/file/IQhcNwbGCcygJxvmjhuMH2/FIRST-EDU-TEAM-LIB?node-id=0%3A1"
                  target="_blank"
                >
                  <i class="fab fa-figma"></i>
                </a>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  </header>
</body>
```

- After Login

```html
<header class="global-header">
      <div class="gnb">
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <h1 class="visually-hidden">헤더</h1>
              <div class="global-header-wrapper">
                <div class="global-header-left">
                  <button
                  class="global-header-icon-button toggle-menu"
                  type="button"
                  aria-label="사이드바 토글 버튼"
                  >
                    <span class="material-icons open"> menu </span>
                    <span class="material-icons close"> menu_open </span>
                  </button>

                  <div class="global-header-search sm-hidden">
                    <div class="input-group sm-hidden">
                      <span class="material-icons"> search </span>
                      <input
                      class="form-input-search"
                      type="search"
                      placeholder="학생명을 입력하세요."
                      />
                    </div>
                    <section class="search-history">
                      <header class="search-history-header">
                        <h2 class="title">최근 검색어</h2>
                        <button type="button">전체 삭제</button>
                      </header>

                      <!-- Note: Exists Recent Search Term -->
                      <div class="search-history-content">
                        <ol class="search-history-list">
                          <li class="search-history-item">
                            <button class="word-button" type="button">김고딩</button>
                            <button
                            class="delete-button"
                            type="button"
                            aria-label="검색어 삭제"
                            >
                            <span class="material-icons">close</span>
                          </button>
                          </li>
                          <li class="search-history-item">
                            <button class="word-button" type="button">박고딩</button>
                            <button
                            class="delete-button"
                            type="button"
                            aria-label="검색어 삭제"
                            >
                            <span class="material-icons">close</span>
                          </button>
                          </li>
                          <li class="search-history-item">
                            <button class="word-button" type="button">윤고딩</button>
                            <button
                            class="delete-button"
                            type="button"
                            aria-label="검색어 삭제"
                            >
                            <span class="material-icons">close</span>
                            </button>
                          </li>
                        </ol>
                    </div>
                  </div>
                </div>

                <div class="global-header-right">
                  <div class="button-group">
                    <button
                    class="global-header-icon-button sm-only"
                    type="button"
                    aria-label="검색창 열기 버튼"
                    >
                    <span class="material-icons"> search </span>
                    </button>

                    <button
                    class="global-header-icon-button"
                    type="button"
                    aria-label="알람 확인 버튼"
                    >
                    <i class="fas fa-bell"></i>
                    <strong class="badge">5+</strong>
                    </button>

                    <button
                    class="global-header-icon-button"
                    type="button"
                    aria-label="출퇴근 버튼"
                    >
                    <i class="fas fa-user-clock"></i>
                    </button>

                    <div class="my-menu">
                      <button
                      class="my-menu-button"
                      type="button"
                      aria-label="마이메뉴 열기 버튼"
                      >
                        <img src="./assets/svg/undraw_profile.svg" alt="profile"/>
                        <strong class="user-name lg-only">강용승 선생님</strong>
                      </button>

                      <div class="my-menu-content">
                        <ul class="my-menu-list">
                          <li class="my-menu-item">
                            <a href="/" aria-label="마이홈">
                              <i class="fas fa-house-user"></i>
                              <span>마이홈</span>
                            </a>
                          </li>
                          <li class="my-menu-item">
                            <a href="/" aria-label="로그아웃">
                              <i class="fas fa-sign-out-alt"></i>
                              <span>로그아웃</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- gnb end -->

      <div class="lnb">
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <div class="breadcrumb-point">
                <div class="breadcrumb">
                  <a href="/">
                    <i class="fas fa-home" aria-label="메인으로 가기"></i>
                  </a>
                  <p class="unicode" aria-hidden="true">&sol;</p>
                  <a href="/">
                    출결 관리
                  </a>
                  <p class="unicode" aria-hidden="true">&sol;</p>
                  <p>출결 입력</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- lnb end -->
    </header>
```

### 2. Sidebar

- Login Teacher

```html
<aside class="side-gnb">
  <header class="side-gnb-header">
    <h1 class="logo">
      <a href="/">
        <img src="./assets/png/Basic Logo.png" alt="FIRST EDU" />
      </a>
    </h1>
  </header>

  <nav class="drawer-menu-all">
    <h2 class="visually-hidden">메뉴</h2>

    <strong class="drawer-menu-category">학생</strong>
    <div class="drawer-menu">
      <a class="drawer-menu-link" href="/">
        <i class="fas fa-user-friends" aria-hidden="true"></i>
        원생 관리
      </a>
    </div>

    <div class="drawer-menu">
      <a class="drawer-menu-link" href="/">
        <i class="fas fa-stopwatch" aria-hidden="true"></i>
        출결 관리
      </a>
    </div>

    <div class="drawer-menu">
      <button class="drawer-menu-button" type="button">
        <i class="fas fa-edit" aria-hidden="true"></i>
        성적 관리
        <span class="material-icons" aria-hidden="true">chevron_right</span>
      </button>

      <div class="drawer-menu-content">
        <ul class="drawer-menu-list">
          <li class="drawer-menu-item is-active">
            <a href="/"> 시험 일정 </a>
          </li>
          <li class="drawer-menu-item">
            <a href="/"> 시험 점수 </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="drawer-menu">
      <a class="drawer-menu-link" href="/">
        <i class="fas fa-file-invoice-dollar" aria-hidden="true"></i>
        수납 관리
      </a>
    </div>

    <div class="drawer-menu">
      <a class="drawer-menu-link" href="/">
        <i class="fas fa-comment-dots" aria-hidden="true"></i>
        상담 관리
      </a>

      <strong class="drawer-menu-category">선생님</strong>
      <div class="drawer-menu">
        <a class="drawer-menu-link" href="/">
          <i class="fas fa-file-alt" aria-hidden="true"></i>
          업무 관리
        </a>
      </div>

      <div class="drawer-menu">
        <a class="drawer-menu-link" href="/">
          <i class="fas fa-business-time" aria-hidden="true"></i>
          근태 관리
        </a>
      </div>

      <div class="drawer-menu">
        <button class="drawer-menu-button" type="button">
          <i class="fas fa-chalkboard" aria-hidden="true"></i>
          수업 관리
          <span class="material-icons" aria-hidden="true">chevron_right</span>
        </button>

        <div class="drawer-menu-content">
          <ul class="drawer-menu-list">
            <li class="drawer-menu-item">
              <a href="/"> 시간표 관리 </a>
            </li>
            <li class="drawer-menu-item">
              <a href="/"> 과목 관리 </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="drawer-menu">
        <button class="drawer-menu-button" type="button">
          <i class="fas fa-sms" aria-hidden="true"></i>
          문자 관리
          <span class="material-icons" aria-hidden="true">chevron_right</span>
        </button>

        <div class="drawer-menu-content">
          <ul class="drawer-menu-list">
            <li class="drawer-menu-item">
              <a href="/"> 문자 목록 </a>
            </li>
            <li class="drawer-menu-item">
              <a href="/"> 문자 전송 </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="drawer-menu">
        <button class="drawer-menu-button" type="button">
          <i class="fas fa-clipboard" aria-hidden="true"></i>
          게시판
          <span class="material-icons" aria-hidden="true">chevron_right</span>
        </button>

        <div class="drawer-menu-content">
          <ul class="drawer-menu-list">
            <li class="drawer-menu-item">
              <a href="/"> 공지사항 </a>
            </li>
            <li class="drawer-menu-item">
              <a href="/"> 자료실 </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</aside>
```

- Login Boss (Add)

```html
<div class="drawer-menu">
        <button class="drawer-menu-button" type="button">
          <i class="fas fa-sitemap"></i>
          조직 관리
          <span class="material-icons" aria-hidden="true">chevron_right</span>
        </button>

        <div class="drawer-menu-content">
          <ul class="drawer-menu-list">
            <li class="drawer-menu-item is-active">
              <a href="/">
                회사 정보
              </a>
            </li>
            <li class="drawer-menu-item">
              <a href="/">
                운영 권한 관리
              </a>
            </li>
            <li class="drawer-menu-item">
              <a href="/">
                직원 목록
              </a>
            </li>
            <li class="drawer-menu-item">
              <a href="/">
                직원 등록
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </aside>
```
