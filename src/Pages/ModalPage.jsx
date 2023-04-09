import { useState, useEffect } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
  const [showModal, setshowModal] = useState(false);

  const handler = () => {
    setshowModal(!showModal);
  };

  return (
    <div className=" w-full relative">
      <Button primary onClick={handler}>
        click me
      </Button>
      {showModal && <Modal onClose={handler} />}
    </div>
  );
}

export default ModalPage;
