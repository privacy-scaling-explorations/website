import "./Usecases.css";

export default function Usecases() {
  return (
    <div id="Usecases">
        <div className="body">
        <h2 className="header">What can TLSNotary do?</h2>
        <div style={{ height: "1.375rem" }} />
        <p>
            With TLSNotary, you can create cryptographic proofs of authenticity for any data on the web, even your private data.
            Using our protocol you can securely prove:
        </p>
        <div style={{ height: "1.375rem" }} />
        <div className="cards">
            <div className="card border">
                <div className="card-body">
                    <div className="card-text">Private information about yourself.</div>
                </div>
            </div>
            <div className="card border">
                <div className="card-body">
                    <div className="card-text">You received a private message from someone.</div>
                </div>
            </div>
            <div className="card border">
                <div className="card-body">
                    <div className="card-text">You received a money transfer.</div>
                </div>
            </div>
            <div className="card border">
                <div className="card-body">
                    <div className="card-text">A snapshot of a webpage.</div>
                </div>
            </div>
            <div className="card border">
                <div className="card-body">
                    <div className="card-text">You were blocked from using an app.</div>
                </div>
            </div>
            <div className="card border">
                <div className="card-body">
                    <div className="card-text">You have access to an account.</div>
                </div>
            </div>
        </div>
        <div style={{ height: "1.375rem" }} />
        <h3 className="header">Is it secure?</h3>
        <div style={{ height: "1.375rem" }} />
        <p>
            One may assume that TLSNotary requires a “man-in-the-middle” setup where the Notary snoops on the connection with the webserver.
            Fortunately, this is not true! Data is kept private even from the Notary.
            <br/>
            <br/>
            See <a href="#How">below</a> for more details on how it works.
        </p>
        <div style={{ height: "1.375rem" }} />
        <h3 className="header">What's the catch?</h3>
        <div style={{ height: "1.375rem" }} />
        <p>
            TLSNotary does require a trust assumption.
            A Verifier of a proof must trust that the Notary did not collude with the Prover to forge it.
            This trust can be minimized by requiring multiple proofs each signed by different Notaries.
            <br/>
            <br/>
            In some applications the Verifier can act as the Notary themselves, which allows for fully trustless proofs!
        </p>
        </div>
    </div>
  );
}
