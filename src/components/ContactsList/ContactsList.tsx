import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const contactsList: Array<Contacts> = [
    {
      _id: 1,
      icon: 'phone',
      label: t('Phone'),
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
      label: 'Linked In',
      url: 'https://www.linkedin.com/in/ruslan-mirasov/',
      text: 'in/ruslan-mirasov',
    },
    {
      _id: 4,
      icon: 'telegram',
      label: 'Telegram',
      url: 'https://t.me/mirasovdev',
      text: '@mirasovdev',
    },
  ];
  return (
    <ul className={css.ContactsList}>
      {contactsList.map(({ _id, icon, label, url, text }) => (
        <li key={_id}>
          <a href={url} className={css.Icon} target="_blank" rel="noreferrer">
            <Icon name={icon} />
          </a>

          <p className={css.Text}>
            <span>{label}</span>
            <a href={url} target="_blank" rel="noreferrer">
              {text}
            </a>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
