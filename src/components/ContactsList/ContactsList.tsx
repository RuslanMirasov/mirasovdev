import { Icon } from 'components';
import css from './ContactsList.module.scss';

interface Contacts {
  _id: number;
  icon: string;
  label: string;
  url: string;
  text: string;
}

const ContactsList: React.FC = () => {
  const contactsList: Array<Contacts> = [
    {
      _id: 1,
      icon: 'phone',
      label: 'Phone',
      url: 'tel:+7490000000',
      text: '+49 (000) 000-00-00',
    },
    {
      _id: 2,
      icon: 'email',
      label: 'Email',
      url: 'mailto:info@mirasov.dev',
      text: 'info@mirasov.dev',
    },
    {
      _id: 3,
      icon: 'linkedin',
      label: 'LinkedIn',
      url: 'mailto:info@mirasov.dev',
      text: '@mirasovdev',
    },
    {
      _id: 4,
      icon: 'telegram',
      label: 'Telegram',
      url: '#',
      text: '@mirasovdev',
    },
  ];
  return (
    <ul className={css.ContactsList}>
      {contactsList.map(({ _id, icon, label, url, text }) => (
        <li key={_id}>
          <a href={url} className={css.Icon}>
            <Icon name={icon} />
          </a>
          <p className={css.Text}>
            <span>{label}</span>
            <a href={url}>{text}</a>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
