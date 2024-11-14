import { Fragment } from "react";
import { Libre_Bodoni, Rye } from "next/font/google";
import Image from "next/image";

const rrye = Rye({
  subsets: ['latin'],
  weight: "400",
  display: "auto"
})

const libreBodoni = Libre_Bodoni({
  subsets: ['latin'],
  weight: "700"
})

const libreBodoni2 = Libre_Bodoni({
  subsets: ['latin'],
  weight: "500"
})

function Home(){
  return(
    <Fragment>
      <header className="flex absolute bg-[#A29875] text-[#FFFFFF] h-[134px] w-[1920px] font-[75px]">
        <h1 className={`${rrye.className} absolute text-[75px] top-[12px] left-[36px]`}>MANZZARI</h1>
      </header>
      <main className="flex h-screen w-screen">
        <h2 className={`${libreBodoni.className} absolute text-[40px] top-[316px] left-[176px] leading-[65px] tracking-wide`}>IMPECCABLE <br /> CRAFTSMANSHIP AND <br /> FINESSE</h2>
        <p className={`${libreBodoni2.className} absolute text-[30px] top-[533px] left-[176px] text-[#787054] leading-[49px] tracking-wide`}>An example of intricate workmanship and detail, elegant <br /> necklaces and long and short chains form a part of our <br /> desirable collection.</p>
        <Image src={"/lady.svg"} alt="my img" width={490} height={667} className="absolute top-[198px] left-[1164px]"/>
        <button className={`${libreBodoni2.className} absolute top-[730px] left-[176px] h-[59px] w-[288px] bg-[#A29875] text-[#FFFFFF] rounded-[10px] text-[30px]`}>Explore Now</button>

      </main>
    </Fragment>
  )
}

export default Home