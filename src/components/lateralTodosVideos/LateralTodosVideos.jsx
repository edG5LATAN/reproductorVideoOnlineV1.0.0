import "./ListaLateral.css";

function LateralTodosVideos() {
  return (
    <div className="col-4 p-2">
      <div className="list-group" id="list-tab" role="tablist">
        <a
          className="list-group-item list-group-item-action active"
          id="list-home-list"
          data-bs-toggle="list"
          href="#list-home"
          role="tab"
          aria-controls="list-home"
        >
          Home
        </a>
        <a
          className="list-group-item list-group-item-action"
          id="list-profile-list"
          data-bs-toggle="list"
          href="#list-profile"
          role="tab"
          aria-controls="list-profile"
        >
          Profile
        </a>
        <a
          className="list-group-item list-group-item-action"
          id="list-messages-list"
          data-bs-toggle="list"
          href="#list-messages"
          role="tab"
          aria-controls="list-messages"
        >
          Messages
        </a>
        <a
          className="list-group-item list-group-item-action"
          id="list-settings-list"
          data-bs-toggle="list"
          href="#list-settings"
          role="tab"
          aria-controls="list-settings"
        >
          Settings
        </a>
        <a
          className="list-group-item list-group-item-action"
          id="list-settings-list"
          data-bs-toggle="list"
          href="#list-settings"
          role="tab"
          aria-controls="list-settings"
        >
          infor
        </a>
      </div>
    </div>
  );
}

export default LateralTodosVideos;
