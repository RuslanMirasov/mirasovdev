import IconLanding from 'components/IconLanding/IconLanding';
import { throttle } from 'assets/utils/throttle';
import css from './LandingEffect.module.scss';
import { useEffect } from 'react';

const LandingEffect: React.FC = () => {
  useEffect(() => {
    const handleEffect = () => {
      if (window.innerWidth >= 1280) {
        const landingPage = document.querySelector<HTMLElement>(`[data-name="landingPage"]`);
        const landingPage2 = document.querySelector<HTMLElement>(`[data-name="landingPage2"]`);
        const landingPage3 = document.querySelector<HTMLElement>(`[data-name="landingPage3"]`);

        const handleMove = (event: MouseEvent) => {
          const target = event.target as Element | null;
          if (!target) return;

          const currentSection = target.closest('section') as HTMLElement | null;
          if (!currentSection) return;
          if (!currentSection.classList.contains('section-hero')) return;

          const mouseX = event.clientX - window.innerWidth + window.innerWidth / 2;
          const mouseY = window.innerHeight / 2 - event.clientY;
          const hasScrolled = window.scrollY - window.innerHeight;

          if (landingPage && landingPage2 && landingPage3 && hasScrolled < 0) {
            landingPage.style.transform = `rotateY(${mouseX / 20}deg) rotateX(${mouseY / 50}deg)`;
            landingPage2.style.transform = `translateZ(${Math.abs(mouseX) / 16}px)`;
            landingPage3.style.transform = `translateZ(${Math.abs(mouseX) / 6}px)`;
          }
        };

        const throttledHandleMove = throttle(handleMove, 20);

        window.addEventListener('mousemove', throttledHandleMove);

        return () => {
          window.removeEventListener('mousemove', throttledHandleMove);
        };
      }
    };

    handleEffect();

    const handleResize = () => {
      handleEffect();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={css.LandingEffect}>
      <div className={css.SvgList} data-name="landingPage">
        <div className={`${css.SvgList_item} ${css.Svg_1}`} data-name="landingPage1">
          <IconLanding name="landing1" />
        </div>
        <div className={`${css.SvgList_item} ${css.Svg_2}`} data-name="landingPage2">
          <IconLanding name="landing2" />
        </div>
        <div className={`${css.SvgList_item} ${css.Svg_3}`} data-name="landingPage3">
          <IconLanding name="landing3" />
        </div>
      </div>
    </div>
  );
};

export default LandingEffect;
