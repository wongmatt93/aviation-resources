import "./NewLessonForm.css";
import Modal from "react-modal";
import { FormEvent, useEffect, useState } from "react";
import { GET_ACS, GET_LESSONS } from "../../GraphQL/Queries";
import { useMutation, useQuery } from "@apollo/client";
import ACSOutline from "../../Models/AirmanCertificationStandard.ts";
import AppUser from "../../Models/AppUser";
import AcsOutlineItem from "./AcsOutlineItem";
import { INSERT_LESSON } from "../../GraphQL/Mutations";
import NewTask from "../../Models/NewTask";

Modal.setAppElement("#root");

interface Props {
  user: AppUser | null;
}

const NewLessonForm = ({ user }: Props) => {
  //controlled component for lesson name
  const [name, setName] = useState("");

  //controlled component for array of task ID's
  const [taskIds, setTaskIds] = useState<NewTask[]>([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [acs, setAcs] = useState<ACSOutline[]>([]);
  const resACS = useQuery(GET_ACS);

  // graphQL mutation to add lesson to database
  const [addLesson, { loading, error }] = useMutation(INSERT_LESSON, {
    refetchQueries: [
      { query: GET_LESSONS, variables: { id: user && user.id } },
    ],
  });

  useEffect(() => {
    resACS.data && setAcs(resACS.data.airman_certification_standards);
  }, [resACS.data]);

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    addLesson({ variables: { name, id: user && user.id, data: taskIds } });
    closeModal();
  };

  if (loading) return <p>"Submitting..."</p>;
  if (error) return <p>`Submission error! ${error.message}`</p>;

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
        <button className="close-button" onClick={closeModal}>
          x
        </button>
        <div className="new-lesson">New Lesson</div>
        <form onSubmit={handleSubmit}>
          <label className="lesson-name-label" htmlFor="name">
            Lesson Name
          </label>
          <input
            className="lesson-input"
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
          <button className="create-lesson-button">Create Lesson</button>
        </form>
      </Modal>
    </div>
  );
};

export default NewLessonForm;
