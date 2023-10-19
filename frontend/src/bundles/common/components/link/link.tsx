import { Link as RouterLink } from 'react-router-dom';

type Properties = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

const Link: React.FC<Properties> = ({ children, to, className }) => (
  <RouterLink to={to} className={className}>
    {children}
  </RouterLink>
);

export { Link };
