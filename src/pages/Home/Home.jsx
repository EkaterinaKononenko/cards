import { Container } from "components/Container/Container";
import { HomeImg, HomeWrapper } from "./Home.styled";
import zone from "../../zone.jpg"

const Home = () => {
    return (
      <>
        <Container>
          <HomeWrapper>
            <HomeImg src={zone} alt="zone" />
          </HomeWrapper>
        </Container>
      </>
    );
}

export default Home;