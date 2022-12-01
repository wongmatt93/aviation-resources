import "./NewLessonForm.css";
import Modal from "react-modal";
import { FormEvent, useEffect, useState } from "react";
import { GET_ACS } from "../../GraphQL/Queries";
import { useQuery } from "@apollo/client";
import ACSOutline from "../../Models/ACSModels/ACSOutline";
import AppUser from "../../Models/AppUser";
import AcsOutlineItem from "./AcsOutlineItem";
import NewTask from "../../Models/LessonsModels/NewTask";

Modal.setAppElement("#root");

interface Props {
  user: AppUser | null;
  addLesson: ({}) => {};
}

const NewLessonForm = ({ user, addLesson }: Props) => {
  const [name, setName] = useState("");
  const [taskIds, setTaskIds] = useState<NewTask[]>([
    { task_id: "0ab18b15-855e-4e0b-9e5c-455c794b6eda" },
  ]);
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
    addLesson({ variables: { name, id: user && user.id, data: taskIds } });
    closeModal();
  };

  return (
    <div className="NewLessonForm">
      <button onClick={openModal}>+</button>
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
          <label htmlFor="name">Lesson Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <ul>
            {acs.map((item) => (
              <AcsOutlineItem
                key={item.id}
                acsOutline={item}
                taskIds={taskIds}
                setTaskIds={setTaskIds}
              />
            ))}
          </ul>
          <button>Create Lesson</button>
        </form>
      </Modal>
    </div>
  );
};

export default NewLessonForm;
