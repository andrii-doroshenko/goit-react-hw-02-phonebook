import CSS from './Contacts.module.css';
import PropTypes from 'prop-types';

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

Contacts.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
