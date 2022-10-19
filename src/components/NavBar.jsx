function NavBar({ onSection, token }) {
  return (
    <header className="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          <div
            className="navbar-brand"
            onClick={() => {
              onSection("posts");
            }}
          >
            <img src="/images/logo.png" className="ml-3 mr-2" alt="Logo" />
            <span>Three pics</span>
          </div>
        </div>
        <div className="d-flex">
          {token ? (
            <div className="dropdown d-inline-block">
              <button
                onClick={() => {
                  onSection("profile");
                }}
                type="button"
                className="btn header-item text-start d-flex align-items-center"
              >
                <img className="rounded-circle header-profile-user" src="/images/perfil.jpg" alt="Guillermo Santisteban Guerrero" />
                <span className="ml-2 d-none d-sm-block header-profile-desc">
                  <span className="user-name">Guillermo</span>
                  <span className="user-sub-title">Administrador</span>
                </span>
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
