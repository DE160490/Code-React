function Header() {
  return (
    <div className="container row">
      <div className="col-4 col-md-3">Logo</div>
      <div className="col-6 col-md-6 ">
        <a href="#">Home</a>
        <a href="#">Room</a>
        <a href="#">Food</a>
        <a href="#">Service</a>
        <a href="#">Contact</a>
      </div>
      <div className="col col-md-3">Search</div>
    </div>
  );
}

export default Header;
