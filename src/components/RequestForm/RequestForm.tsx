import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { useTranslation } from 'react-i18next';
import { TitleBox, Title, Text, Button, InputError, ConfirmPopup } from 'components';
import css from './RequestForm.module.scss';
import { useModal } from 'hooks/useModal';

interface IFeedbackForm {
  access_key: string;
  subject: string;
  from_name: string;
  name?: string;
  email: string;
  design?: string;
  comment?: string;
  agree: boolean;
}

const RequestForm: React.FC = () => {
  const WEB3FORM_API_KEY: string = '286ef5be-5204-45df-8865-178dc6642dc8';
  const { t } = useTranslation();
  const { openModal } = useModal();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    access_key: Yup.string().required(),
    subject: Yup.string().required(),
    from_name: Yup.string().required(),
    name: Yup.string(),
    email: Yup.string().email(t('Invalid_email_format')).required(t('required_field')),
    design: Yup.string().url(t('Invalid_URL_format')),
    comment: Yup.string(),
    agree: Yup.boolean().oneOf([true], t('important_field')).required(t('important_field')),
  });

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm<IFeedbackForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<IFeedbackForm> = async data => {
    setIsLoading(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send form');
      }

      const result = await response.json();
      console.log('Form submitted successfully', result);

      openModal(<ConfirmPopup />);
    } catch (error) {
      console.error('Send form error: ', error);
      // Логика обработки ошибки
    } finally {
      setIsLoading(false);
      reset();
      setTimeout(() => setFocus('name'), 0);
    }
  };

  return (
    <div className={css.RequestForm}>
      <TitleBox>
        <Title tag="h3" size="h4">
          {t('contacts_title')}
        </Title>
        <Text>{t('contacts_subtitle')}</Text>
      </TitleBox>

      <form className={css.Form} onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" value={WEB3FORM_API_KEY} {...register('access_key')} />
        <input type="hidden" value="MIRASOV.DEV" {...register('from_name')} />
        <input type="hidden" value="New Request" {...register('subject')} />
        <div className={css.InputWrapper} data-col="2">
          <input
            id="name"
            {...register('name')}
            type="text"
            placeholder={t('your_name')}
            style={errors.name && { border: '1px solid var(--invalid)' }}
          />
        </div>

        <div className={css.InputWrapper} data-col="2">
          <input
            id="email"
            {...register('email')}
            type="email"
            placeholder={t('your_email')}
            style={errors.email && { border: '1px solid var(--invalid)' }}
          />
          <InputError text={errors.email && errors.email.message} />
        </div>

        <div className={css.InputWrapper}>
          <input
            id="design"
            {...register('design')}
            type="url"
            placeholder={t('Figma_link')}
            style={errors.design && { border: '1px solid var(--invalid)' }}
          />
          <InputError text={errors.design && errors.design.message} />
        </div>

        <div className={css.InputWrapper}>
          <textarea
            id="comment"
            {...register('comment')}
            placeholder={t('your_comment')}
            rows={4}
            style={errors.comment && { border: '1px solid var(--invalid)' }}
          />
        </div>

        <div className={css.InputWrapper}>
          <input id="agree" type="checkbox" {...register('agree')} />
          <label htmlFor="agree" className={`${css.RadioLabel} ${errors.agree ? 'invalid' : ''}`}>
            <span>
              {t('agree')}&nbsp;{' '}
              <a href="/privacy-policy" target="_blank">
                {t('privacy_policy')}
              </a>
            </span>
          </label>
          <InputError text={errors.agree && errors.agree.message} />
        </div>

        <Button type="submit" isLoading={isLoading}>
          {t('form_button_text')}
        </Button>
      </form>
    </div>
  );
};

export default RequestForm;
