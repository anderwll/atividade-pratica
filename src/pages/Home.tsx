import * as React from 'react';
import Banner from '../components/Banner/Banner';
import SecaoContent from '../components/SecaoContent/SecaoContent';
import SecaoIcons from '../components/SecaoIcons/SecaoIcons';
import Footer from '../components/Footer/Footer';

import Img1 from '../assets/image/smartphone.jpg'
import Img2 from '../assets/image/developer.jpg'
import Img3 from '../assets/image/kid.jpg'

const TextLorem = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quam cumque est magni quibusdam
cupiditate tenetur deleniti? Provident, ducimus necessitatibus laborum atque aliquid tempora ratione
aliquam sint voluptas neque mollitia.
Nesciunt mollitia nobis libero? Autem, dicta praesentium rem voluptas totam quo ipsa deserunt facilis
aliquid provident laboriosam error atque ea? Provident quibusdam non, exercitationem sunt qui quia
veritatis excepturi repellat?Provident, ducimus necessitatibus laborum atque aliquid tempora ratione
aliquam sint voluptas neque mollitia.
`

const Home: React.FC = () => {
    return (
        <>
          <Banner titulo='Minha primeira página ReactJS.'/> 
          <SecaoIcons />
          <SecaoContent titulo='Lorem Ipsum' texto={TextLorem} imagem={Img1} />
          <SecaoContent titulo='Lorem Ipsum' texto={TextLorem} imagem={Img2} reverse/>
          <SecaoContent titulo='Lorem Ipsum' texto={TextLorem} imagem={Img3} />
          <Banner titulo='Contato' footer /> 
          <Footer />  
        </>
    );
};

export default Home;