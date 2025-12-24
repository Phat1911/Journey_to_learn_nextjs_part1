import Image from 'next/image';
import NatureImage from '../../public/florian-van-duyn.jpg';
import { Bebas_Neue } from 'next/font/google';

const bebasFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const Home = () => {
  
  return (
    <div> 
      Home <br />
      {/* internal image */}
      {/* <Image src={NatureImage} alt=""/> */}

      {/* external image */}
      {/* <Image src="https://preview.redd.it/im-trying-to-get-inspired-to-be-a-better-person-by-superman-v0-b0upf0zx05f91.jpg?width=1080&crop=smart&auto=webp&s=f5026fa96b25cc21d6ae83a3cad1c5969afcc795"
        width={200} height={200}
      /> */}
      <h1>Bebas Neue</h1>
      <p className={`${bebasFont.className}`}>Lorem ipsum dolor sit amet consectetur.</p>
    </div> 
  )
}

export default Home