import Typewriter from 'typewriter-effect';
import { Layout, HomePageText } from '../NotFound/NotFound.styled';

const NotFound = () => {
  return (
    <>
      <Layout>
        <HomePageText>
          <Typewriter
            options={{
              strings: ["The page doesn't exist!"],
              autoStart: true,
              loop: true,
            }}
          />
        </HomePageText>
      </Layout>
    </>
  );
};

export default NotFound;
