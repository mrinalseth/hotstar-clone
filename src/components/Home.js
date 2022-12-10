import styled from 'styled-components'
import ImageSlider from './ImageSlider';

const Home = () => {
    return (
        <Container>
            <ImageSlider/>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px)
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 clac(3.5uw + 5px);
    &:after {
        background: url('/images/home-background.png') center center / 
        cover np-repeat fixed;
        content: "";
        position: absolute;
        insert: 0px;
        opacity: 1;
        z-intex: -1;
    }
`;

export default Home