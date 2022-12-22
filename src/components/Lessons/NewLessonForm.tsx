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
import { AiOutlineClose } from "react-icons/ai";

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

  const openModal = (): void => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = (): void => {
    setIsOpen(false);
    document.body.style.overflow = "scroll";
  };

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
        className="new-lesson-modal animate__animated animate__fadeInUpBig animate__faster"
        overlayClassName="new-lesson-modal-overlay "
      >
        <button className="close-button" onClick={closeModal}>
          <AiOutlineClose />
        </button>
        <h2 className="new-lesson">New Lesson</h2>
        <form onSubmit={handleSubmit}>
          <div className="lesson-name">
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
          </div>
          <ul className="acs-list">
            {acs.map((item) => (
              <AcsOutlineItem
                key={item.id}
                acsOutline={item}
                taskIds={taskIds}
                setTaskIds={setTaskIds}
              />
            ))}
          </ul>
          <div className="button-container">
            <button className="create-lesson-button">Create Lesson</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default NewLessonForm;
