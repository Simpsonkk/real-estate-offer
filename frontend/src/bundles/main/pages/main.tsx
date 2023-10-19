import { Header } from '~/bundles/common/components/components.js';
import { Introduction } from '~/bundles/main/components/components.js';

const Main: React.FC = () => {
  return (
    <main>
      <Header />
      <Introduction />
    </main>
  );
};

export { Main };
