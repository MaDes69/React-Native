import { Download, Features, SectionWrapper, SectionWrapper2 } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
   
  
    <SectionWrapper 
    //placer en props dans le composants SectionWrapper 
    title="FAITES VOUS UNE PLACE DANS LA BLOCKCHAIN AVEC VOS NFT."
    description="Les NFT peuvent être achetés et échangés comme n’importe quelle autre cryptomonnaie basée sur Ethereum."
    
    showBtn 
    mockupImg={assets.anime}
    banner= "banner"
    reverse
    />

    <SectionWrapper2 
    //placer en props dans le composants SectionWrapper 
    title="Smart User Interface Marketplace."
    description="Experience a buttery UI of Suvorm NFT Marketplace. Smooth constant colors of a fluent UI design."
    
    mockupImg={assets.phone1}
    reverse
    />

    <Features />
    <Download 
      // mockupImg={assets.decolle}
    />


    </>
    
  );
}

export default App;
