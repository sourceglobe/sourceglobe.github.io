import {AppBar, styled, Toolbar} from "@mui/material";
import heroImage from './static/hero-image.jpg';
import logo from './static/sourceglobe-logo-white-on-transparent-128x128.png';

const HeroSection = styled('div')`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${heroImage});
  background-size: cover;
  font-family: 'Archivo Black', sans-serif;
  font-size: 5rem;
  color: white;
  text-align: center;
`;

const Page = styled('div')`
  background-color: rgb(14, 17, 22);
`;

function App() {
    return (
        <Page>
            <AppBar position="fixed" style={{background: 'none'}} elevation={0}>
                <Toolbar style={{minHeight: '80px'}}>
                    <img src={logo} alt="Sourceglobe logo" height={48}/>
                </Toolbar>
            </AppBar>
            <HeroSection>
                Join the Sourceglobe<br/>code repository
            </HeroSection>
            <div>
                Photo by <a
                href="https://unsplash.com/@jkozoski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Juliana
                Kozoski</a> on <a
                href="https://unsplash.com/s/photos/globe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
        </Page>


    );
}

export default App;
