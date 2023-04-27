import CSS from './Contacts.module.css';

const Contacts = ({ filteredContacts, onDeleteContact }) => {
  return (
    <>
      <ul className={CSS.contacts}>
        {filteredContacts.map(({ name, id, number }) => {
          return (
            <li className={CSS.contacts__item} key={id} id={id}>
              <p>{name}:</p>
              <p>
                {number}
                <button
                  type="button"
                  className={CSS.contacts__btn}
                  onClick={() => onDeleteContact(id)}
                >
                  Delete
                </button>
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Contacts;
