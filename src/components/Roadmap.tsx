import "./Roadmap.css";

export default function Roadmap() {
  return (
    <div id="Roadmap">
      <h3>
        We're rebuilding the protocol from the ground up.
      </h3>
      <div style={{ height: "1.375rem" }} />
      <p>Below are some development goals on our roadmap:</p>
      <div style={{ height: "1.375rem" }} />
      <div className="cards">
        <div className="card border">
            <div className="card-body">
                <div className="card-text">Implement the core protocol as a series of open-source Rust libraries</div>
            </div>
        </div>
        <div className="card border">
            <div className="card-body">
                <div className="card-text">Build and release a Notary server implementation</div>
            </div>
        </div>
        <div className="card border">
            <div className="card-body">
                <div className="card-text">Develop a web extension for the browser</div>
            </div>
        </div>
        <div className="card border">
            <div className="card-body">
                <div className="card-text">Create developer tools to build on top of TLSNotary</div>
            </div>
        </div>
      </div>
    </div>
  );
}
