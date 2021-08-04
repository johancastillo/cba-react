const Home = () => {
    return(
        <div id="wrapper">
  {/* header of the page */}
  <header id="page-header" className="page-header-stick">
    {/* top bar */}
    <div className="top-bar bg-dark text-gray">
      <div className="container">
        <div className="row top-bar-holder">
          <div className="col-xs-9 col">
            {/* bar links */}
            <ul className="font-lato list-unstyled bar-links">
              <li>
                <a href="tel:+611234567890">
                  <strong className="dt element-block text-capitalize hd-phone">Call :</strong>
                  <strong className="dd element-block hd-phone">+(61) 123 456 7890</strong>
                  <i className="fas fa-phone-square hd-up-phone hidden-sm hidden-md hidden-lg"><span className="sr-only">phone</span></i>
                </a>
              </li>
              <li>
                <a href="mailto:Example@domain.com">
                  <strong className="dt element-block text-capitalize hd-phone">Email :</strong>
                  <strong className="dd element-block hd-phone">Example@domain.com</strong>
                  <i className="fas fa-envelope-square hd-up-phone hidden-sm hidden-md hidden-lg"><span className="sr-only">email</span></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-3 col justify-end">
            {/* user links */}
            <ul className="list-unstyled user-links fw-bold font-lato">
              <li><a href="#popup1" className="lightbox">Login</a> <span className="sep">|</span> <a href="#popup2" className="lightbox">Register</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* header holder */}
    <div className="header-holder">
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-3">
            {/* logo */}
            <div className="logo">
              <a href="home.html">
                <img className="hidden-xs" src="images/logo.png" alt="studylms" />
                <img className="hidden-sm hidden-md hidden-lg" src="images/logo-dark.png" alt="studylms" />
              </a>
            </div>
          </div>
          <div className="col-xs-6 col-sm-9 static-block">
            {/* nav */}
            <nav id="nav" className="navbar navbar-default">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              {/* navbar collapse */}
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                {/* main navigation */}
                <ul className="nav navbar-nav navbar-right main-navigation text-uppercase font-lato">
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">home</a>
                    <ul className="dropdown-menu">
                      <li><a href="home.html">Home 1</a></li>
                      <li><a href="home2.html">Home 2</a></li>
                      <li><a href="home3.html">Home 3</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Courses</a>
                    <ul className="dropdown-menu">
                      <li><a href="courses-list.html">Course List</a></li>
                      <li><a href="course-single.html">Course Single</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Events</a>
                    <ul className="dropdown-menu">
                      <li><a href="events-list.html">Event List</a></li>
                      <li><a href="event-sigle.html">Event Single</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                    <ul className="dropdown-menu">
                      <li><a href="404.html">404 Page</a></li>
                      <li><a href="about-us.html">About us</a></li>
                      <li><a href="forum.html">Forum Page</a></li>
                      <li><a href="forum-single.html">Forum Single</a></li>
                      <li><a href="instructors-list.html">Instructors List</a></li>
                      <li><a href="instructor-single.html">Instructors Single</a></li>
                      <li><a href="login-register.html">Login &amp; Register</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                    <ul className="dropdown-menu">
                      <li><a href="blog.html">Blog List</a></li>
                      <li><a href="blog-single.html">Blog Single</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop</a>
                    <ul className="dropdown-menu">
                      <li><a href="shop.html">Shop List</a></li>
                      <li><a href="single-product.html">Shop Single</a></li>
                      <li><a href="cartage.html">Cart Page</a></li>
                      <li><a href="checkout.html">Checkout</a></li>
                    </ul>
                  </li>
                  <li><a href="contact.html">coNTACT</a></li>
                </ul>
              </div>
              {/* navbar form */}
              <form action="#" className="navbar-form navbar-search-form navbar-right">
                <a className="fas fa-search search-opener" role="button" data-toggle="collapse" href="#searchCollapse" aria-expanded="false" aria-controls="searchCollapse"><span className="sr-only">search opener</span></a>
                {/* search collapse */}
                <div className="collapse search-collapse" id="searchCollapse">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search …" />
                    <button type="button" className="fas fa-search btn"><span className="sr-only">search</span></button>
                  </div>
                </div>
              </form>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* contain main informative part of the site */}
  <main id="main">
    {/* intro block */}
    <section className="intro-block">
      <div className="slider fade-slider">
        <div>
          {/* intro block slide */}
          <article className="intro-block-slide overlay bg-cover" style={{backgroundImage: 'url(images/img01.jpg)'}}>
            <div className="align-wrap container">
              <div className="align">
                <div className="anim">
                  <h1 className="intro-block-heading">Education &amp; Training Organization</h1>
                </div>
                <div className="anim delay1">
                  <p>We offer the most complete course pakage in the country, for the research, design and development of Education.</p>
                </div>
                <div className="anim delay2">
                  <div className="btns-wrap">
                    <a href="courses-list.html" className="btn btn-warning btn-theme text-uppercase">Our Courses</a>
                    <a href="contact.html" className="btn btn-white text-uppercase">Contact us</a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div>
          {/* intro block slide */}
          <article className="intro-block-slide overlay bg-cover" style={{backgroundImage: 'url(images/img01.jpg)'}}>
            <div className="align-wrap container">
              <div className="align">
                <div className="anim">
                  <h1 className="intro-block-heading">Education Organization</h1>
                </div>
                <div className="anim delay1">
                  <p>We offer the most complete course pakage in the country, for the research, design and development of Education.</p>
                </div>
                <div className="anim delay2">
                  <div className="btns-wrap">
                    <a href="courses-list.html" className="btn btn-warning btn-theme text-uppercase">Our Courses</a>
                    <a href="contact.html" className="btn btn-white text-uppercase">Contact us</a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div>
          {/* intro block slide */}
          <article className="intro-block-slide overlay bg-cover" style={{backgroundImage: 'url(images/img01.jpg)'}}>
            <div className="align-wrap container">
              <div className="align">
                <div className="anim">
                  <h1 className="intro-block-heading">Training Organization</h1>
                </div>
                <div className="anim delay1">
                  <p>We offer the most complete course pakage in the country, for the research, design and development of Education.</p>
                </div>
                <div className="anim delay2">
                  <div className="btns-wrap">
                    <a href="courses-list.html" className="btn btn-warning btn-theme text-uppercase">Our Courses</a>
                    <a href="contact.html" className="btn btn-white text-uppercase">Contact us</a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="container">
        {/* features aside */}
        <aside className="features-aside">
          <a href="#" className="col">
            <span className="icn-wrap text-center no-shrink">
              <img src="images/icon01.svg" width={44} height={43} alt="trophy" />
            </span>
            <div className="description">
              <h2 className="features-aside-heading">World’d Best Instructors</h2>
              <span className="view-more element-block text-uppercase">view more</span>
            </div>
          </a>
          <a href="#" className="col">
            <span className="icn-wrap text-center no-shrink">
              <img src="images/icon02.svg" width={43} height={39} alt="computer" />
            </span>
            <div className="description">
              <h2 className="features-aside-heading">Learn Courses Onlines</h2>
              <span className="view-more element-block text-uppercase">view more</span>
            </div>
          </a>
          <a href="#" className="col">
            <span className="icn-wrap text-center no-shrink">
              <img src="images/icon03.svg" width={43} height={39} alt="computer" />
            </span>
            <div className="description">
              <h2 className="features-aside-heading">Online Library &amp; Store</h2>
              <span className="view-more element-block text-uppercase">view more</span>
            </div>
          </a>
        </aside>
      </div>
    </section>
    {/* popular posts block */}
    <section className="popular-posts-block container">
      <header className="popular-posts-head">
        <h2 className="popular-head-heading">Most Popular Courses</h2>
      </header>
      <div className="row">
        {/* popular posts slider */}
        <div className="slider popular-posts-slider">
          <div>
            <div className="col-xs-12">
              {/* popular post */}
              <article className="popular-post">
                <div className="aligncenter">
                  <img src="images/img02.jpg" alt="image description" />
                </div>
                <div>
                  <strong className="bg-primary text-white font-lato text-uppercase price-tag">$99.00</strong>
                </div>
                <h3 className="post-heading"><a href="course-single.html">French for Beginners to Advanced Training</a></h3>
                <div className="post-author">
                  <div className="alignleft rounded-circle no-shrink">
                    <a href="instructor-single.html"><img src="images/img06.jpg" className="rounded-circle" alt="image description" /></a>
                  </div>
                  <h4 className="author-heading"><a href="instructor-single.html">Keny White</a></h4>
                </div>
                <footer className="post-foot gutter-reset">
                  <ul className="list-unstyled post-statuses-list">
                    <li>
                      <a href="#">
                        <span className="fas icn fa-users no-shrink"><span className="sr-only">users</span></span>
                        <strong className="text fw-normal">98</strong>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fas icn no-shrink fa-comments"><span className="sr-only">comments</span></span>
                        <strong className="text fw-normal">10</strong>
                      </a>
                    </li>
                  </ul>
                  <ul className="star-rating list-unstyled">
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                  </ul>
                </footer>
              </article>
            </div>
          </div>
          <div>
            <div className="col-xs-12">
              {/* popular post */}
              <article className="popular-post">
                <div className="aligncenter">
                  <img src="images/img03.jpg" alt="image description" />
                </div>
                <div>
                  <strong className="bg-success text-white font-lato text-uppercase price-tag">Free</strong>
                </div>
                <h3 className="post-heading"><a href="course-single.html">Introduction to Mobile Apps Development</a></h3>
                <div className="post-author">
                  <div className="alignleft no-shrink rounded-circle">
                    <a href="instructor-single.html"><img src="images/img07.jpg" className="rounded-circle" alt="image description" /></a>
                  </div>
                  <h4 className="author-heading"><a href="instructor-single.html">Sarah Johnson</a></h4>
                </div>
                <footer className="post-foot gutter-reset">
                  <ul className="list-unstyled post-statuses-list">
                    <li>
                      <a href="#">
                        <span className="fas icn fa-users no-shrink"><span className="sr-only">users</span></span>
                        <strong className="text fw-normal">150</strong>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fas icn no-shrink fa-comments"><span className="sr-only">comments</span></span>
                        <strong className="text fw-normal">3</strong>
                      </a>
                    </li>
                  </ul>
                  <ul className="star-rating list-unstyled">
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="far fa-star"><span className="sr-only">star</span></span></li>
                  </ul>
                </footer>
              </article>
            </div>
          </div>
          <div>
            <div className="col-xs-12">
              {/* popular post */}
              <article className="popular-post">
                <div className="aligncenter">
                  <img src="images/img04.jpg" alt="image description" />
                </div>
                <div>
                  <strong className="bg-primary text-white font-lato text-uppercase price-tag">$85.60</strong>
                </div>
                <h3 className="post-heading"><a href="course-single.html">How to Become a Startup Founder</a></h3>
                <div className="post-author">
                  <div className="alignleft no-shrink rounded-circle">
                    <a href="instructor-single.html"><img src="images/img08.jpg" className="rounded-circle" alt="image description" /></a>
                  </div>
                  <h4 className="author-heading"><a href="instructor-single.html">Jhon Milton</a></h4>
                </div>
                <footer className="post-foot gutter-reset">
                  <ul className="list-unstyled post-statuses-list">
                    <li>
                      <a href="#">
                        <span className="fas icn fa-users no-shrink"><span className="sr-only">users</span></span>
                        <strong className="text fw-normal">200</strong>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fas icn no-shrink fa-comments"><span className="sr-only">comments</span></span>
                        <strong className="text fw-normal">3</strong>
                      </a>
                    </li>
                  </ul>
                  <ul className="star-rating list-unstyled">
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="far fa-star-half"><span className="sr-only">star</span></span></li>
                  </ul>
                </footer>
              </article>
            </div>
          </div>
          <div>
            <div className="col-xs-12">
              {/* popular post */}
              <article className="popular-post">
                <div className="aligncenter">
                  <img src="images/img05.jpg" alt="image description" />
                </div>
                <div>
                  <strong className="bg-primary text-white font-lato text-uppercase price-tag">$68.00</strong>
                </div>
                <h3 className="post-heading"><a href="course-single.html">Your Complete Guide to Self Devlopement</a></h3>
                <div className="post-author">
                  <div className="alignleft no-shrink rounded-circle">
                    <a href="instructor-single.html"><img src="images/img09.jpg" className="rounded-circle" alt="image description" /></a>
                  </div>
                  <h4 className="author-heading"><a href="instructor-single.html">Peter Parker</a></h4>
                </div>
                <footer className="post-foot gutter-reset">
                  <ul className="list-unstyled post-statuses-list">
                    <li>
                      <a href="#">
                        <span className="fas icn fa-users no-shrink"><span className="sr-only">users</span></span>
                        <strong className="text fw-normal">48</strong>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fas icn no-shrink fa-comments"><span className="sr-only">comments</span></span>
                        <strong className="text fw-normal">5</strong>
                      </a>
                    </li>
                  </ul>
                  <ul className="star-rating list-unstyled">
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                  </ul>
                </footer>
              </article>
            </div>
          </div>
          <div>
            <div className="col-xs-12">
              {/* popular post */}
              <article className="popular-post">
                <div className="aligncenter">
                  <img src="images/img02.jpg" alt="image description" />
                </div>
                <div>
                  <strong className="bg-primary text-white font-lato text-uppercase price-tag">$99.00</strong>
                </div>
                <h3 className="post-heading"><a href="course-single.html">French for Beginners to Advanced Training</a></h3>
                <div className="post-author">
                  <div className="alignleft no-shrink rounded-circle">
                    <a href="instructor-single.html"><img src="images/img06.jpg" className="rounded-circle" alt="image description" /></a>
                  </div>
                  <h4 className="author-heading"><a href="instructor-single.html">Keny White</a></h4>
                </div>
                <footer className="post-foot gutter-reset">
                  <ul className="list-unstyled post-statuses-list">
                    <li>
                      <a href="#">
                        <span className="fas icn fa-users no-shrink"><span className="sr-only">users</span></span>
                        <strong className="text fw-normal">98</strong>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fas icn no-shrink fa-comments"><span className="sr-only">comments</span></span>
                        <strong className="text fw-normal">10</strong>
                      </a>
                    </li>
                  </ul>
                  <ul className="star-rating list-unstyled">
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                  </ul>
                </footer>
              </article>
            </div>
          </div>
          <div>
            <div className="col-xs-12">
              {/* popular post */}
              <article className="popular-post">
                <div className="aligncenter">
                  <img src="images/img03.jpg" alt="image description" />
                </div>
                <div>
                  <strong className="bg-success text-white font-lato text-uppercase price-tag">Free</strong>
                </div>
                <h3 className="post-heading"><a href="course-single.html">Introduction to Mobile Apps Development</a></h3>
                <div className="post-author">
                  <div className="alignleft no-shrink rounded-circle">
                    <a href="instructor-single.html"><img src="images/img07.jpg" className="rounded-circle" alt="image description" /></a>
                  </div>
                  <h4 className="author-heading"><a href="instructor-single.html">Sarah Johnson</a></h4>
                </div>
                <footer className="post-foot gutter-reset">
                  <ul className="list-unstyled post-statuses-list">
                    <li>
                      <a href="#">
                        <span className="fas icn fa-users no-shrink"><span className="sr-only">users</span></span>
                        <strong className="text fw-normal">200</strong>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fas icn no-shrink fa-comments"><span className="sr-only">comments</span></span>
                        <strong className="text fw-normal">3</strong>
                      </a>
                    </li>
                  </ul>
                  <ul className="star-rating list-unstyled">
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="far fa-star"><span className="sr-only">star</span></span></li>
                  </ul>
                </footer>
              </article>
            </div>
          </div>
          <div>
            <div className="col-xs-12">
              {/* popular post */}
              <article className="popular-post">
                <div className="aligncenter">
                  <img src="images/img04.jpg" alt="image description" />
                </div>
                <div>
                  <strong className="bg-primary text-white font-lato text-uppercase price-tag">$85.60</strong>
                </div>
                <h3 className="post-heading"><a href="course-single.html">How to Become a Startup Founder</a></h3>
                <div className="post-author">
                  <div className="alignleft no-shrink rounded-circle">
                    <a href="instructor-single.html"><img src="images/img08.jpg" className="rounded-circle" alt="image description" /></a>
                  </div>
                  <h4 className="author-heading"><a href="instructor-single.html">Jhon Milton</a></h4>
                </div>
                <footer className="post-foot gutter-reset">
                  <ul className="list-unstyled post-statuses-list">
                    <li>
                      <a href="#">
                        <span className="fas icn fa-users no-shrink"><span className="sr-only">users</span></span>
                        <strong className="text fw-normal">200</strong>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fas icn no-shrink fa-comments"><span className="sr-only">comments</span></span>
                        <strong className="text fw-normal">3</strong>
                      </a>
                    </li>
                  </ul>
                  <ul className="star-rating list-unstyled">
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="far fa-star-half"><span className="sr-only">star</span></span></li>
                  </ul>
                </footer>
              </article>
            </div>
          </div>
          <div>
            <div className="col-xs-12">
              {/* popular post */}
              <article className="popular-post">
                <div className="aligncenter">
                  <img src="images/img05.jpg" alt="image description" />
                </div>
                <div>
                  <strong className="bg-primary text-white font-lato text-uppercase price-tag">$68.00</strong>
                </div>
                <h3 className="post-heading"><a href="course-single.html">Your Complete Guide to Self Devlopement</a></h3>
                <div className="post-author">
                  <div className="alignleft no-shrink rounded-circle">
                    <a href="instructor-single.html"><img src="images/img09.jpg" className="rounded-circle" alt="image description" /></a>
                  </div>
                  <h4 className="author-heading"><a href="instructor-single.html">Peter Parker</a></h4>
                </div>
                <footer className="post-foot gutter-reset">
                  <ul className="list-unstyled post-statuses-list">
                    <li>
                      <a href="#">
                        <span className="fas icn fa-users no-shrink"><span className="sr-only">users</span></span>
                        <strong className="text fw-normal">48</strong>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fas icn no-shrink fa-comments"><span className="sr-only">comments</span></span>
                        <strong className="text fw-normal">5</strong>
                      </a>
                    </li>
                  </ul>
                  <ul className="star-rating list-unstyled">
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                    <li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
                  </ul>
                </footer>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* counter aside */}
    <aside className="bg-cover counter-aside" style={{backgroundImage: 'url(images/img10.jpg)'}}>
      <div className="container align-wrap">
        <div className="align">
          <div className="row">
            <div className="col-xs-12 col-sm-3 col">
              <h2 className="counter-aside-heading">
                <strong className="counter countdown element-block">150</strong>
                <strong className="text element-block">COUNTRIES REACHED</strong>
              </h2>
            </div>
            <div className="col-xs-12 col-sm-3 col">
              <h2 className="counter-aside-heading">
                <strong className="counter countdown element-block">28000</strong>
                <strong className="text element-block">PASSED GRADUATES</strong>
              </h2>
            </div>
            <div className="col-xs-12 col-sm-3 col">
              <h2 className="counter-aside-heading">
                <strong className="counter countdown element-block">750</strong>
                <strong className="text element-block">QUALIFIED STAFF</strong>
              </h2>
            </div>
            <div className="col-xs-12 col-sm-3 col">
              <h2 className="counter-aside-heading">
                <strong className="counter countdown element-block">1200</strong>
                <strong className="text element-block">COURSES PUBLISHED</strong>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </aside>
    {/* upcoming events block */}
    <section className="upcoming-events-block container">
      <header className="block-header">
        <div className="pull-left">
          <h2 className="block-header-heading">Upcoming Events</h2>
          <p>Recent and upcoming educational events listed here</p>
        </div>
        <a href="event-list.html" className="btn btn-default text-uppercase pull-right">View More</a>
      </header>
      {/* upcoming events list */}
      <ul className="list-unstyled upcoming-events-list">
        <li>
          <div className="alignright">
            <img src="images/img11.jpg" alt="image description" />
          </div>
          <div className="alignleft">
            <time dateTime="2011-01-12" className="time text-uppercase">
              <strong className="date fw-normal">01</strong>
              <strong className="month fw-light font-lato">march</strong>
              <strong className="day fw-light font-lato">WEDNESDAY</strong>
            </time>
          </div>
          <div className="description-wrap">
            <h3 className="list-heading"><a href="event-sigle.html">WordPress Theme Development with Bootstrap</a></h3>
            <address><time dateTime="2011-01-12">8:00 am - 5:00 pm</time> | Great Russell Street, WC1B 3DG UK</address>
            <a href="event-sigle.html" className="btn btn-default text-uppercase">register</a>
          </div>
        </li>
        <li>
          <div className="alignright">
            <img src="images/img12.jpg" alt="image description" />
          </div>
          <div className="alignleft">
            <time dateTime="2011-01-12" className="time text-uppercase">
              <strong className="date fw-normal">05</strong>
              <strong className="month fw-light font-lato">march</strong>
              <strong className="day fw-light font-lato">SATURDAY</strong>
            </time>
          </div>
          <div className="description-wrap">
            <h3 className="list-heading"><a href="event-sigle.html">Build Apps with React Native</a></h3>
            <address><time dateTime="2011-01-12">12:00 pm - 5:00 pm</time> | No1 Warehouse London, UK</address>
            <a href="event-sigle.html" className="btn btn-default text-uppercase">register</a>
          </div>
        </li>
        <li>
          <div className="alignright">
            <img src="images/img13.jpg" alt="image description" />
          </div>
          <div className="alignleft">
            <time dateTime="2011-01-12" className="time text-uppercase">
              <strong className="date fw-normal">13</strong>
              <strong className="month fw-light font-lato">march</strong>
              <strong className="day fw-light font-lato">Thursday</strong>
            </time>
          </div>
          <div className="description-wrap">
            <h3 className="list-heading"><a href="event-sigle.html">Free Yoga &amp; Excercise Class at Every Morning</a></h3>
            <address><time dateTime="2011-01-12">4:00 pm - 8:00 pm</time> | 21 New Globe Walk London, UK</address>
            <a href="event-sigle.html" className="btn btn-default text-uppercase">register</a>
          </div>
        </li>
      </ul>
    </section>
    {/* course search aside */}
    <aside className="course-search-aside bg-gray">
      {/* course search form */}
      <form action="#" className="container course-search-form">
        <label className="element-block text-center font-lato">Search For Course</label>
        <div className="form-holder">
          <div className="form-row">
            <div className="form-group">
              <select data-placeholder="Category" className="chosen-select-no-single">
                <option value={0}>Category</option>
                <option value={0}>Category</option>
                <option value={0}>Category</option>
              </select>
            </div>
            <div className="form-group">
              <select data-placeholder="Course Cost" className="chosen-select-no-single">
                <option value={0}>Course Cost</option>
                <option value={0}>Course Cost</option>
                <option value={0}>Course Cost</option>
              </select>
            </div>
            <div className="form-group">
              <select data-placeholder="Search Text" className="chosen-select-no-single">
                <option value={0}>Search Text</option>
                <option value={0}>Search Text</option>
                <option value={0}>Search Text</option>
              </select>
            </div>
          </div>
          <button type="button" className="btn btn-theme btn-warning no-shrink text-uppercase">Search</button>
        </div>
      </form>
    </aside>
    {/* categories aside */}
    <aside className="bg-cover categories-aside text-center" style={{backgroundImage: 'url(images/img14.jpg)'}}>
      <div className="container holder">
        {/* categories list */}
        <ul className="list-unstyled categories-list">
          <li>
            <a href="#">
              <div className="align">
                <span className="icn-wrap">
                  <img src="images/icon04.svg" width={43} height={43} alt="image description" />
                </span>
                <strong className="h h5 element-block text-uppercase">Business</strong>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="align">
                <span className="icn-wrap">
                  <img src="images/icon05.svg" width={44} height={48} alt="image description" />
                </span>
                <strong className="h h5 element-block text-uppercase">Language</strong>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="align">
                <span className="icn-wrap">
                  <img src="images/icon06.svg" width={51} height={42} alt="image description" />
                </span>
                <strong className="h h5 element-block text-uppercase">Programming</strong>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="align">
                <span className="icn-wrap">
                  <img src="images/icon07.svg" width={51} height={42} alt="image description" />
                </span>
                <strong className="h h5 element-block text-uppercase">Film &amp; Video</strong>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="align">
                <span className="icn-wrap">
                  <img src="images/icon08.svg" width={51} height={39} alt="image description" />
                </span>
                <strong className="h h5 element-block text-uppercase">Photography</strong>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="align">
                <span className="icn-wrap">
                  <img src="images/icon09.svg" width={51} height={51} alt="image description" />
                </span>
                <strong className="h h5 element-block text-uppercase">Web Design</strong>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </aside>
    {/* getstarted block */}
    <article className="container getstarted-block">
      <div className="row">
        <div className="col-xs-12 col-md-8 col">
          <div className="alignleft">
            <img src="images/img15.jpg" alt="image description" />
          </div>
          <div className="description-wrap">
            <h2><span className="element-block">Get the coaching training</span><span className="fw-light ttn element-block">1000s of online courses for free</span></h2>
            <p>German final week mother of god grey viverra no computer unlock impossibru. Pikachu grin venenatis cuteness…</p>
            <a href="#" className="btn btn-default text-uppercase">view details</a>
          </div>
        </div>
        <div className="col-xs-12 col-md-4 col text-center">
          <div className="limit-counter">
            <strong className="title element-block fw-normal">It’s limited seating! Hurry up</strong>
            <div id="defaultCountdown" className="comming-timer" />
          </div>
        </div>
      </div>
      {/* getstarted bar */}
      <aside className="getstarted-bar bg-gray text-center">
        <strong className="h h4 element-block">CREATE AN ACCOUNT TO GET STARTED</strong>
        <a href="#" className="btn btn-theme btn-warning text-uppercase no-shrink">Signin Now</a>
      </aside>
    </article>
    {/* testimonials block */}
    <section className="testimonials-block text-center bg-gray" style={{backgroundImage: 'url(images/bg-pattern01.png)'}}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1">
            <h2>What People Say</h2>
            {/* testimonail slider */}
            <div className="slick-slider slider testimonail-slider">
              <div>
                {/* testimonial quote */}
                <blockquote className="testimonial-quote font-roboto">
                  <p>“ Trent from punchy rollie grab us a waggin school. Flat out like a bludger where he hasn't got a damper. As stands out like brass razoo heaps it'll be relo. As busy as a paddock.”</p>
                  <cite className="element-block font-lato">
                    <span className="avatar rounded-circle element-block">
                      <img className="rounded-circle" src="images/img16.jpg" alt="Nethor Doct -Developer" />
                    </span>
                    <strong className="element-block h5 h">Nethor Doct -<span className="text-gray">Developer</span></strong>
                  </cite>
                </blockquote>
              </div>
              <div>
                {/* testimonial quote */}
                <blockquote className="testimonial-quote font-roboto">
                  <p>“ Trent from punchy rollie grab us a waggin school. Flat out like a bludger where he hasn't got a damper. As stands out like brass razoo heaps it'll be relo. As busy as a paddock.”</p>
                  <cite className="element-block font-lato">
                    <span className="avatar rounded-circle element-block">
                      <img className="rounded-circle" src="images/img16.jpg" alt="Nethor Doct -Developer" />
                    </span>
                    <strong className="element-block h5 h">Nethor Doct -<span className="text-gray">Developer</span></strong>
                  </cite>
                </blockquote>
              </div>
              <div>
                {/* testimonial quote */}
                <blockquote className="testimonial-quote font-roboto">
                  <p>“ Trent from punchy rollie grab us a waggin school. Flat out like a bludger where he hasn't got a damper. As stands out like brass razoo heaps it'll be relo. As busy as a paddock.”</p>
                  <cite className="element-block font-lato">
                    <span className="avatar rounded-circle element-block">
                      <img className="rounded-circle" src="images/img16.jpg" alt="Nethor Doct -Developer" />
                    </span>
                    <strong className="element-block h5 h">Nethor Doct -<span className="text-gray">Developer</span></strong>
                  </cite>
                </blockquote>
              </div>
              <div>
                {/* testimonial quote */}
                <blockquote className="testimonial-quote font-roboto">
                  <p>“ Trent from punchy rollie grab us a waggin school. Flat out like a bludger where he hasn't got a damper. As stands out like brass razoo heaps it'll be relo. As busy as a paddock.”</p>
                  <cite className="element-block font-lato">
                    <span className="avatar rounded-circle element-block">
                      <img className="rounded-circle" src="images/img16.jpg" alt="Nethor Doct -Developer" />
                    </span>
                    <strong className="element-block h5 h">Nethor Doct -<span className="text-gray">Developer</span></strong>
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* news block */}
    <section className="news-block container">
      <header className="seperator-head text-center">
        <h2>Recent News</h2>
        <p>Share your work to collaboratve with our vibrant design element.</p>
      </header>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          {/* news post */}
          <article className="news-post">
            <div className="aligncenter">
              <a href="blog-single.html"><img src="images/img17.jpg" alt="image desciption" /></a>
            </div>
            <h3><a href="blog-single.html">Best Educational Psd Template Launching Today</a></h3>
            <p>Areas tackled in the most fundamental part of medical research include cellu lar and molecular biology…</p>
            <time dateTime="2011-01-12" className="time text-uppercase text-gray">Mar 05,2017  by <a href="blog-single.html">andrew caset</a></time>
          </article>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          {/* news post */}
          <article className="news-post">
            <div className="aligncenter">
              <a href="blog-single.html"><img src="images/img18.jpg" alt="image desciption" /></a>
            </div>
            <h3><a href="blog-single.html">Your one stop Solution for Android Development Needs</a></h3>
            <p>Areas tackled in the most fundamental part of medical research include cellu lar and molecular biology…</p>
            <time dateTime="2011-01-12" className="time text-uppercase text-gray">Mar 05,2017  by <a href="blog-single.html">andrew caset</a></time>
          </article>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          {/* news post */}
          <article className="news-post">
            <div className="aligncenter">
              <a href="blog-single.html"><img src="images/img19.jpg" alt="image desciption" /></a>
            </div>
            <h3><a href="blog-single.html">Online Learning students council meeting 2017</a></h3>
            <p>Areas tackled in the most fundamental part of medical research include cellu lar and molecular biology…</p>
            <time dateTime="2011-01-12" className="time text-uppercase text-gray">Mar 05,2017  by <a href="blog-single.html">andrew caset</a></time>
          </article>
        </div>
      </div>
    </section>
    {/* subscription aside block */}
    <aside className="subscription-aside-block bg-theme text-white">
      {/* newsletter sub form */}
      <form action="#" className="container newsletter-sub-form">
        <div className="row form-holder">
          <div className="col-xs-12 col-sm-6 col">
            <div className="text-wrap">
              <span className="element-block icn no-shrink rounded-circle"><i className="far fa-envelope-open"><span className="sr-only">icn</span></i></span>
              <div className="inner-wrap">
                <label htmlFor="email">Signup for Newsletter</label>
                <p>Subscribe now and receive weekly newsletter with new updates.</p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col">
            <div className="input-group">
              <input type="email" id="email" className="form-control" placeholder="Enter your email…" />
              <span className="input-group-btn">
                <button className="btn btn-dark text-uppercase" type="button">Submit</button>
              </span>
            </div>
          </div>
        </div>
      </form>
    </aside>
  </main>
  {/* footer area container */}
  <div className="footer-area bg-dark text-gray">
    {/* aside */}
    <aside className="aside container">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-3 col">
          <div className="logo"><a href="home.html"><img src="images/logo.png" alt="studyLMS" /></a></div>
          <p>We have over 20 years experience providing expert Educational both businesses and individuals. Our Investment Committee brings cades the industry expertise in driving our investment approach. portfolio constructor and allocation</p>
          <a href="#" className="btn btn-default text-uppercase">Start Leaning Now</a>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3 col hidden-xs">
          <h3>Popular Courses</h3>
          {/* widget cources list */}
          <ul className="widget-cources-list list-unstyled">
            <li>
              <a href="course-single.html">
                <div className="alignleft">
                  <img src="images/img20.jpg" alt="image description" />
                </div>
                <div className="description-wrap">
                  <h4>Introduction to Mobile Apps Development</h4>
                  <strong className="price text-primary element-block font-lato text-uppercase">$99.00</strong>
                </div>
              </a>
            </li>
            <li>
              <a href="course-single.html">
                <div className="alignleft">
                  <img src="images/img21.jpg" alt="image description" />
                </div>
                <div className="description-wrap">
                  <h4>Become a Professional Film Maker</h4>
                  <strong className="price text-success element-block font-lato text-uppercase">Free</strong>
                </div>
              </a>
            </li>
            <li>
              <a href="course-single.html">
                <div className="alignleft">
                  <img src="images/img22.jpg" alt="image description" />
                </div>
                <div className="description-wrap">
                  <h4>Swift Programming For Beginners</h4>
                  <strong className="price text-primary element-block font-lato text-uppercase">$75.00</strong>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <nav className="col-xs-12 col-sm-6 col-md-3 col">
          <h3>Quick Links</h3>
          {/* fooer navigation */}
          <ul className="fooer-navigation list-unstyled">
            <li><a href="#">All Courses</a></li>
            <li><a href="#">Summer Sessions</a></li>
            <li><a href="#">Recent Exams</a></li>
            <li><a href="#">Professional Courses</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">All Courses</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
        <div className="col-xs-12 col-sm-6 col-md-3 col">
          <h3>contact us</h3>
          <p>If you want to contact us about any issue our support available to help you 8am-7pm Monday to saturday.</p>
          {/* ft address */}
          <address className="ft-address">
            <dl>
              <dt><span className="fas fa-map-marker"><span className="sr-only">marker</span></span></dt>
              <dd>Address: 9015 Sunset Boulevard United Kingdom</dd>
              <dt><span className="fas fa-phone-square"><span className="sr-only">phone</span></span></dt>
              <dd>Call: <a href="tel:+2156237532">+ 215 623 7532</a></dd>
              <dt><span className="fas fa-envelope-square"><span className="sr-only">email</span></span></dt>
              <dd>Email: <a href="mailto:info@Studylms.com">info@Studylms.com</a></dd>
            </dl>
          </address>
        </div>
      </div>
    </aside>
    {/* page footer */}
    <footer id="page-footer" className="font-lato">
      <div className="container">
        <div className="row holder">
          <div className="col-xs-12 col-sm-push-6 col-sm-6">
            <ul className="socail-networks list-unstyled">
              <li><a href="#"><span className="fab fa-facebook" /></a></li>
              <li><a href="#"><span className="fab fa-twitter" /></a></li>
              <li><a href="#"><span className="fab fa-instagram" /></a></li>
              <li><a href="#"><span className="fab fa-linkedin" /></a></li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-pull-6 col-sm-6">
            <p><a href="#">Studylms</a> | © 2018 <a href="#">DesignFalls</a>, All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
  {/* back top of the page */}
  <span id="back-top" className="text-center fa fa-caret-up" />
  {/* loader of the page */}
  <div id="loader" className="loader-holder">
    <div className="block"><img src="images/svg/hearts.svg" width={100} alt="loader" /></div>
  </div>
</div>

    )
}


export default Home