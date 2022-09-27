import "./How.css";
import diagram from "../images/overview-pretty.png";

export default function How() {
  return (
    <div id="How">
        <div className="body">
            <div className="diagram-container">
                <img className="diagram" src={diagram}></img>
            </div>
            <div>
                <h2>How it works</h2>
                <div style={{ height: "1.375rem" }} />
                <p>
                TLSNotary leverages the ubiquitous TLS (Transport Layer Security) protocol to securely and privately prove a transcript of communications took place with a webserver.
                <br/>
                <br/>
                At the core of the TLSNotary protocol is dividing TLS session keys between two parties (Client and Notary) and then using secure two-party computation (2PC) to encrypt and authenticate requests from the Client to a TLS-enabled webserver.
                <br/>
                <br/>
                During the protocol neither the Client nor Notary are in posession of the full TLS session keys, they only know their shares of those keys. This preserves the security assumptions of TLS while at the same time allowing the Client to prove to the Notary the authenticity of the transcript.
                <br/>
                <br/>
                This is all achieved with full privacy. The Notary is never aware of which webserver is being queried, nor do they ever see the unencrypted communications.
                <br/>
                <br/>
                Furthermore, our protocol is transparent to the webserver.
                In fact, the webserver is never aware that this process took place.
                </p>
            </div>
        </div>
    </div>
  );
}
