import "./NewLessonForm.css";
import Modal from "react-modal";
import { FormEvent, useEffect, useState } from "react";
import { GET_ACS } from "../../GraphQL/Queries";
import { useQuery } from "@apollo/client";
import ACSOutline from "../../Models/ACSModels/ACSOutline";
import AcsOutlineItem from "./AcsOutlineItem";

Modal.setAppElement("#root");

interface Props {
  mutateFunction: () => {};
}

const NewLessonForm = ({ mutateFunction }: Props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [acs, setAcs] = useState<ACSOutline[]>([]);
  const { error, loading, data } = useQuery(GET_ACS);

  useEffect(() => {
    data && setAcs(data.airman_certification_standards);
  }, [data]);

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    mutateFunction();
    closeModal();
  };

  return (
    <div className="NewLessonForm">
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="new-lesson-modal"
        overlayClassName="new-lesson-modal-overlay"
      >
        <button onClick={closeModal}>close</button>
        <div className="new-lesson">New Lesson</div>
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="name">Lesson Name</label>
          <input type="text" name="name" id="name" />
          <ul>
            {acs.map((item) => (
              <AcsOutlineItem key={item.id} acsOutline={item} />
            ))}
          </ul> */}
          <button>Create Lesson</button>
        </form>
      </Modal>
    </div>
  );
};

export default NewLessonForm;
