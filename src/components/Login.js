import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { selectUserName, setUserLoginDetails } from "../features/user/userSlice";
import { auth, provider } from "../firebase";

const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Container>
      <Content>
        <CTA>
          <LogoWrapper>
            <CTALogoOne src="/images/cta-logo-one.png" alt="" />
          </LogoWrapper>
          <SignUp onClick={handleAuth}>GET STARTED</SignUp>
          <Description>
            Signup / Login to get started with all the available resources on the CNMS' Official Ted Website, from Latest Updates to The Video Recordings!
          </Description>
        </CTA>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  margin-bottom: 0px;
  max-width: 300px;
  min-height: 1px;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #E50914;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #D11D27;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;
