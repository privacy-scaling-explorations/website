import { useState } from "react";
import Modal from "react-modal";
import "./ProjectDescription.css";

Modal.setAppElement('#root');

function ProjectDescription(props:any) {
  // For more descriptions modal
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  return (
    <>
      <button className="btn btn-ext" onClick={() => setmodalIsOpen(true)}>
        More Details
      </button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setmodalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
        }}
      >
        <div className="column">
          <div>
            <h3>{props.title}</h3>
            <button className="btn btn-close" onClick={() => setmodalIsOpen(false)}>

            </button>
          </div>
        </div>
        <div>
          <p className="modal-description">{props.description}</p>
        </div>
      </Modal>
    </>
  );
}

export default ProjectDescription;
