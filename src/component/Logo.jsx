import "./nav.css"

const Logo = () => {
  return (
    <div className="divNav">
      <div>
        <img
          src="/image/1.jpg"
          alt=""
          style={{ borderRadius: "24px", objectFit: "cover" }}
        />
      </div>
      <div style={{ width: "23%" }}>
        <input
          type="search"
          placeholder="Որոնում..."
          class="form-control"
        ></input>
        <button className="btnSearch">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
  )
}
export default Logo
