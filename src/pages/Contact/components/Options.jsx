import Avatar from "./Avatar";

// const image = "https://dummyimage.com/80x80";
import avatar from "../../../assets/team/2.png";
import logo from "../../../assets/logo_azul.png";

const Options = () => {
  return (
    <>
      <div className="flex max-w-6xl flex-col lg:flex-row m-auto my-8">
        <div className="lg:w-1/2 h-full ">
          <div className="">
            <h2 className="text-2xl text-center text-black underline decoration-azul">
              Nuestras Redes Sociales
            </h2>
          </div>
          <div className="mt-8">
            <Avatar
              name=""
              number="264 415-0563"
              image={avatar}
              link="https://wa.me/2644150563"
            />
            <Avatar
              name=""
              number="264 570-8166"
              image={avatar}
              link="https://wa.me/2645708166"
            />
            <Avatar
              name="Whatsapp BN Construcciones"
              number="264 563-3714"
              image={logo}
              link="https://wa.me/2645633714"
            />
            {/* <Avatar
              name="Facebook"
              number="BN construcciones"
              image={image}
              link="#"
            />
            <Avatar
              name="Instagram"
              number="@bn_construcciones"
              image={image}
              link="#"
            /> */}
          </div>
        </div>

        <div className="divider divider-neutral lg:divider-horizontal text-gray-900 font-bold">
          O
        </div>

        <div className="lg:w-1/2 h-full">
          <div className="h-full ">
            <h2 className="text-2xl text-center text-black underline decoration-azul">
              Formulario
            </h2>
            <p className="mt-8 px-4 text-pretty text-stone-800">
              En <strong>BN Construcciones</strong>, nos enorgullecemos de ofrecer la mejor
              atención personalizada a cada uno de nuestros clientes. Sabemos lo
              importante que es tu proyecto, por eso garantizamos una cotización
              detallada en solo <strong>2 días hábiles</strong>. Nuestro equipo de expertos está
              dedicado a cumplir y superar tus expectativas, asegurando que
              quedes encantado con el resultado final.
              <br /> <br />
              No esperes más, accede a nuestro formulario y descubre cómo
              podemos ayudarte a construir el futuro que deseas. <br /> <br />
              <strong>¡Estamos listos para convertir tus ideas en obras maestras!</strong>
            </p>
            <div className="flex justify-center my-8">
              <a
                className="inline-block rounded bg-azul px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-azul/75"
                href="https://forms.gle/Z4tEN1uUDprAgiX46"
              >
                Formulario
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Options;
