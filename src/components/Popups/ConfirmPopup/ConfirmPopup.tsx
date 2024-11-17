import { useTranslation } from 'react-i18next';
import { TitleBox, Title, Text, ButtonsList, Button, Icon, ButtonClose } from 'components';
import { useModal } from 'hooks/useModal';
import css from './ConfirmPopup.module.scss';
import { useEffect, useState } from 'react';

const ConfirmPopup: React.FC = () => {
  const { t } = useTranslation();
  const { closeModal } = useModal();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsVisible(true));
    });
  }, []);

  return (
    <div className={`${css.ConfirmPopup} ${isVisible ? css.Visible : ''}`}>
      <ButtonClose size={30} />
      <TitleBox>
        <Icon name="confirm" size={100} color="var(--color)" fill="currentColor" />
        <Title tag="h3" size="h3">
          {t('confirm_popup_title')}
        </Title>
        <Text>{t('confirm_popup_text')}</Text>
      </TitleBox>
      <ButtonsList align="center">
        <Button onClick={closeModal}>{t('close')}</Button>
      </ButtonsList>
    </div>
  );
};

export default ConfirmPopup;
