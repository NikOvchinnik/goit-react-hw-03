import style from "./Contact.module.css";
import { LiaAddressBook } from "react-icons/lia";
import { LiaPhoneSolid } from "react-icons/lia";

const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <li className={style.contactItem}>
      <div className={style.contactContainer}>
        <div className={style.contactTextContainer}>
          <LiaAddressBook />
          <p>{name}</p>
        </div>
        <div className={style.contactTextContainer}>
          <LiaPhoneSolid />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={style.contactBtnDelete}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
