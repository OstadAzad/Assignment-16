import './globals.css'
import NextTopLoader from 'nextjs-toploader';
import MenuBar from '@/components/MenuBar';
import Footer from '@/components/Footer';
import Subscribe from '@/components/Subscribe';

export async function generateMetadata(){
  const res=await fetch(process.env.BASE_URL+"api/SiteMeta/home");
  const JSON=await res.json();
  return{
      title:JSON[0]['title'],
      description:JSON[0]['description'],
      keywords:JSON[0]['keywords'],
      openGraph: {
          images: JSON[0]['image'],
      },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#269669"
  initialPosition={0.08}
  crawlSpeed={200}
  height={3}
  crawl={true}
  showSpinner={true}
  easing="ease"
  shadow="0 0 10px #2299DD,0 0 5px #2299DD"
  speed={200}/>
        <MenuBar/>
        {children}
        <Subscribe/>
        <Footer/>
        </body>
    </html>
  )
}
