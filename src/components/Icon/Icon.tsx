interface SvgProps {
  size?: number;
  color?: string;
  fill?: string;
}

interface IconProps extends SvgProps {
  name?: string;
}

const Logo: React.FC<SvgProps> = ({ size = 40, color, fill }) => (
  <svg width={size} viewBox="0 0 40 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.224 0H1.30066L8.26263 13.4184L15.224 0Z" fill={color} />
    <path d="M8.94958 27H16.5049V17.8656L8.94958 27Z" fill={color} />
    <path
      d="M33.0739 17.4966C37.5384 15.4849 38.6531 12.6554 38.6531 9.32885C38.6531 4.45442 35.1146 0 28.3416 0H23.4951V6.35308H28.3416C30.3095 6.35308 31.2552 7.94365 31.2552 9.64558C31.2552 11.3475 30.3849 12.7059 28.4172 12.7059H23.4951V18.0661H25.5039L31.6714 27H40V26.6259L33.0736 17.4966H33.0739Z"
      fill={fill}
    />
    <path d="M0 17.9091V27H7.38122L0 17.9091Z" fill={color} />
  </svg>
);

const Scrolldown: React.FC<SvgProps> = ({ color }) => (
  <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 11L50 43L98 11" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Icon: React.FC<IconProps> = ({ name = 'logo', size, color = 'currentColor', fill }) => {
  return (
    <>
      {name === 'logo' && <Logo size={size} color={color} fill={fill} />}
      {name === 'scrolldown' && <Scrolldown size={size} color={color} fill={fill} />}
    </>
  );
};

export default Icon;
