const PopupHolder = () => {
    return(
        <div className="popup-holder">
  <div id="popup1" className="lightbox-demo">
    <form action="#" className="user-log-form">
      <h2>Login Form</h2>
      <div className="form-group">
        <input type="text" className="form-control element-block" placeholder="Username or email address *" />
      </div>
      <div className="form-group">
        <input type="password" className="form-control element-block" placeholder="Password *" />
      </div>
      <div className="btns-wrap">
        <div className="wrap">
          <label htmlFor="rem" className="custom-check-wrap fw-normal font-lato">
            <input type="checkbox" id="rem" className="customFormReset" />
            <span className="fake-label element-block">Remember me</span>
          </label>
          <button type="submit" className="btn btn-theme btn-warning fw-bold font-lato text-uppercase">Login</button>
        </div>
        <div className="wrap text-right">
          <p>
            <a href="#" className="forget-link">Lost your Password?</a>
          </p>
        </div>
      </div>
    </form>
  </div>
  <div id="popup2" className="lightbox-demo">
    <form action="#" className="user-log-form">
      <h2>Register Form</h2>
      <div className="form-group">
        <input type="email" className="form-control element-block" placeholder="Email address *" />
      </div>
      <div className="form-group">
        <input type="password" className="form-control element-block" placeholder="Password *" />
      </div>
      <div className="btns-wrap">
        <div className="wrap">
          <button type="submit" className="btn btn-theme btn-warning fw-bold font-lato text-uppercase">Register</button>
        </div>
      </div>
    </form>
  </div>
</div>

    )
}


export default PopupHolder