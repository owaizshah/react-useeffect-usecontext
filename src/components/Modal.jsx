import Button from "./Button";
import ReactDOM from "react-dom";

function Modal({ onClose }) {
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="h-screen	bg-gray-500 w-full absolute inset-0 opacity-10 "
      ></div>
      <div className="absolute left-80 top-48 w-6/12 bg-white h-44 p-3 space-y-7 z-10">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, optio
          at. Accusantium adipisci, quibusdam sunt obcaecati pariatur explicabo
          vel quae cupiditate soluta officiis voluptas quaerat, ad laborum
          consequuntur quis mollitia!
        </p>
        <Button danger onClick={onClose}>
          Close Modal
        </Button>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
