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

const Github: React.FC<SvgProps> = ({ color }) => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <rect clipRule="evenodd" fill="none" fillRule="evenodd" height="128" width="128" />
    <path
      clipRule="evenodd"
      d="M63.996,1.333C28.656,1.333,0,30.099,0,65.591    c0,28.384,18.336,52.467,43.772,60.965c3.2,0.59,4.368-1.394,4.368-3.096c0-1.526-0.056-5.566-0.088-10.927    c-17.804,3.883-21.56-8.614-21.56-8.614c-2.908-7.421-7.104-9.397-7.104-9.397c-5.812-3.988,0.44-3.907,0.44-3.907    c6.42,0.454,9.8,6.622,9.8,6.622c5.712,9.819,14.98,6.984,18.628,5.337c0.58-4.152,2.236-6.984,4.064-8.59    c-14.212-1.622-29.152-7.132-29.152-31.753c0-7.016,2.492-12.75,6.588-17.244c-0.66-1.626-2.856-8.156,0.624-17.003    c0,0,5.376-1.727,17.6,6.586c5.108-1.426,10.58-2.136,16.024-2.165c5.436,0.028,10.912,0.739,16.024,2.165    c12.216-8.313,17.58-6.586,17.58-6.586c3.492,8.847,1.296,15.377,0.636,17.003c4.104,4.494,6.58,10.228,6.58,17.244    c0,24.681-14.964,30.115-29.22,31.705c2.296,1.984,4.344,5.903,4.344,11.899c0,8.59-0.08,15.517-0.08,17.626    c0,1.719,1.152,3.719,4.4,3.088C109.68,118.034,128,93.967,128,65.591C128,30.099,99.344,1.333,63.996,1.333"
      fill={color}
      fillRule="evenodd"
      id="Github"
    />
  </svg>
);

const Website: React.FC<SvgProps> = ({ color }) => (
  <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="25" fill="none" r="24" stroke={color} strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
    <ellipse cx="25" cy="25" fill="none" rx="12" ry="24" stroke={color} strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
    <path
      d="M6.365,40.438C10.766,37.729,17.479,36,25,36  c7.418,0,14.049,1.682,18.451,4.325"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="2"
    />
    <path
      d="M43.635,9.563C39.234,12.271,32.521,14,25,14  c-7.417,0-14.049-1.682-18.451-4.325"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="2"
    />
    <line fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="2" x1="1" x2="49" y1="25" y2="25" />
    <line fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="2" x1="25" x2="25" y1="1" y2="49" />
  </svg>
);

const Confirm: React.FC<SvgProps> = ({ size, color, fill }) => (
  <svg width={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path
      fill={color}
      d="M21,16.6a3,3,0,0,1-1.66-.51l-4.89-3.26a1,1,0,0,1,1.1-1.66l4.9,3.26a1,1,0,0,0,1.1,0l4.9-3.26a1,1,0,0,1,1.1,1.66l-4.89,3.26A3,3,0,0,1,21,16.6Z"
    />
    <path
      fill={color}
      d="M29,25H13a3,3,0,0,1-3-3V10a3,3,0,0,1,3-3H29a3,3,0,0,1,3,3V22A3,3,0,0,1,29,25ZM13,9a1,1,0,0,0-1,1V22a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V10a1,1,0,0,0-1-1Z"
    />
    <path fill={fill} d="M7,19H5a1,1,0,0,1,0-2H7a1,1,0,0,1,0,2Z" />
    <path fill={fill} d="M7,15H3a1,1,0,0,1,0-2H7a1,1,0,0,1,0,2Z" />
    <path fill={fill} d="M7,11H1A1,1,0,0,1,1,9H7a1,1,0,0,1,0,2Z" />
  </svg>
);

const Icon: React.FC<IconProps> = ({ name = 'logo', size, color = 'currentColor', fill }) => {
  return (
    <>
      {name === 'logo' && <Logo size={size} color={color} fill={fill} />}
      {name === 'website' && <Website size={size} color={color} fill={fill} />}
      {name === 'github' && <Github size={size} color={color} fill={fill} />}
      {name === 'confirm' && <Confirm size={size} color={color} fill={fill} />}
      {name === 'scrolldown' && <Scrolldown size={size} color={color} fill={fill} />}
    </>
  );
};

export default Icon;
