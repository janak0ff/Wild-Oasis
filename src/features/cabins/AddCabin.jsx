import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

const AddCabin = () => {
  const [isOpenModel, setIsOpenModel] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModel((show) => !show)}>
        {isOpenModel ? "Close" : "Add cabin"}
      </Button>

      {isOpenModel && (
        <Modal onClose={() => setIsOpenModel(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModel(false)} />
        </Modal>
      )}
    </div>
  );
};

export default AddCabin;
