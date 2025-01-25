import React from "react";
import { useSelector } from "react-redux";
import { Typewriter } from "react-simple-typewriter";

function Home() {
const botbroValues = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNPC4spRwBRNmag0d9_oQOkJDqB0mYu_d_g&s',
        title: 'Integration Ready',
        desc: 'Botbro works flawlessly with the tools and platforms you already use, ensuring smooth collaboration across your workflow.'

    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNPC4spRwBRNmag0d9_oQOkJDqB0mYu_d_g&s',
        title: 'Automation at Its Best',
        desc: 'Botbro takes repetitive tasks off your hands, allowing you to focus on what matters most—growing your business.'

    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNPC4spRwBRNmag0d9_oQOkJDqB0mYu_d_g&s',
        title: 'Easy-to-Use Interface',
        desc: 'With an intuitive design, Botbro ensures a seamless experience for users of any skill level.'

    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNPC4spRwBRNmag0d9_oQOkJDqB0mYu_d_g&s',
        title: 'Real-Time Insights',
        desc: 'Gain actionable insights into your business processes to make data-driven decisions with confidence.'

    },
]



  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-6xl sm:min-h-52 lg:min-h-5 ">
        <Typewriter
          words={[
            "Welcome to Botbro!",
            "Automate Your Workflows.",
            "Simplify Your Business.",
            "Scale with Ease!",
            "Your Success, Our Goal.",
          ]}
          loop={Infinity} // Keep looping infinitely for continuous engagement
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={60}
          delaySpeed={1200}
        />
      </div>
      <section className="py-2 font-[Pacifico ]">
        <p>
        Welcome to <b>Botbro</b>, your ultimate business assistant designed to simplify operations and maximize productivity!
        </p>
        <p>Botbro is an innovative platform tailored for businesses of all sizes. Whether you're a budding entrepreneur or an established enterprise, Botbro empowers you to streamline processes, enhance collaboration, and achieve your goals faster.</p>
      </section>
      <section>
        <div className="flex flex-col gap-2  lg:grid lg:grid-cols-4 ">
            {
                botbroValues.map((el, i)=>(
                    <div key={i} className="p-2 flex flex-col justify-center items-center gap-2  bg-secondaryBgColor  rounded-md dark:bg-darkModeSecondaryBgColor">
                        <b >{el.title}</b>
                        <img src={el.image} alt="" />
                        <data>{el.desc}</data>
                    </div>
                ))
            }
        </div>
      </section>
    </div>
  );
}

export default Home;
