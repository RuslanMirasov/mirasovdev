import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { useTranslation } from 'react-i18next';
import { TitleBox, Title, Text, Button, InputError } from 'components';
import css from './RequestForm.module.scss';

interface IFeedbackForm {
  name?: string;
  email: string;
  design?: string;
  comment?: string;
  agree: boolean;
}

const RequestForm: React.FC = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
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
      console.log('Form submitted successfully');
    } catch (error) {
      console.error('Send form error: ', error);
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
