import {
  BrickWall,
  Cable,
  CircleCheck,
  DraftingCompass,
  HardHat,
  PaintRoller,
  ShowerHead,
  ClipboardList,
  TrendingUp,
  Handshake,
  UserRound,
} from "lucide-react";

import slider1 from "../assets/slider/slider1.webp";
import slider2 from "../assets/slider/slider2.webp";
import slider3 from "../assets/slider/slider3.webp";


import perfil1 from "../assets/testimonial/perfil1.webp";
import perfil2 from "../assets/testimonial/perfil2.webp";
import perfil3 from "../assets/testimonial/perfil3.webp";
import perfil4 from "../assets/testimonial/perfil4.webp";
import perfil5 from "../assets/testimonial/perfil5.webp";



export const navItems = [
  {
    menu: "about",
    link: "#",
  },
  {
    menu: "carrers",
    link: "#",
  },
  {
    menu: "history",
    link: "#",
  },
  {
    menu: "services",
    link: "#",
  },
  {
    menu: "proyects",
    link: "#",
  },
  {
    menu: "blog",
    link: "#",
  },
];
export const banner = [
  {
    icon: <CircleCheck />,
    text: "Mayor Seguridad",
  },
  {
    icon: <CircleCheck />,
    text: "Profesionalismo",
  },
  {
    icon: <CircleCheck />,
    text: "Sustentabilidad",
  },
  {
    icon: <CircleCheck />,
    text: "Desarrollo",
  },
  {
    icon: <CircleCheck />,
    text: "Eficiencia",
  },
  {
    icon: <CircleCheck />,
    text: "Cumplimiento",
  },
];

export const features = [
  {
    title: "Electricidad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?",
    icon: <Cable />,
  },
  {
    title: "Construccion",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?",
    icon: <HardHat />,
  },
  {
    title: "Arquitectura",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?",
    icon: <DraftingCompass />,
  },
  {
    title: "Plomeria",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?",
    icon: <ShowerHead />,
  },
  {
    title: "Remodelacion",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?",
    icon: <BrickWall />,
  },
  {
    title: "Pintura",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?",
    icon: <PaintRoller />,
  },
];

export const slider = [
  {
    image: slider1,
    text: "Texto Ejemplo",
  },
  {
    image: slider2,
    text: "Texto Ejemplo",
  },
  {
    image: slider3,
    text: "Texto Ejemplo",
  },
];


export const testimonial = [
  {
    index: 1,
    image: perfil1,
    title: "Construcción de Vivienda Unifamiliar",
    text: "Estamos encantados con nuestra nueva casa. La atención al detalle y la calidad de los materiales utilizados fueron excepcionales. El equipo de construcción fue profesional y cumplió con los plazos establecidos. Sin duda, recomendaríamos sus servicios a cualquiera que busque una constructora confiable.",
    name: "Maria Lopez",
  },
  {
    index: 2,
    image: perfil2,
    title: "Renovación de Oficinas",
    text: "La renovación de nuestras oficinas fue un éxito total gracias a esta empresa. Su equipo no solo entendió nuestras necesidades, sino que también aportó ideas innovadoras que mejoraron el diseño final. El resultado ha sido un espacio de trabajo moderno y funcional que ha incrementado la productividad de nuestro equipo.",
    name: "Carlos Fernandez",
  },
  {
    index: 3,
    image: perfil3,
    title: "Construcción de Edificio de Apartamentos",
    text: "Desde el principio, la comunicación fue excelente y nos mantuvieron informados en cada etapa del proyecto. La calidad de la construcción es evidente en cada detalle, y los apartamentos se vendieron rápidamente debido a la alta demanda por su diseño y acabados. No podríamos estar más satisfechos con el trabajo realizado.",
    name: "Ana Gomez",
  },
  {
    index: 4,
    image: perfil4,
    title: "Remodelación de Cocina",
    text: "La remodelación de nuestra cocina superó todas nuestras expectativas. El equipo fue muy cuidadoso al trabajar en nuestra casa y siempre mantuvo el área limpia y organizada. Nos encantó el resultado final; la cocina es ahora el corazón de nuestro hogar y un lugar donde disfrutamos pasar tiempo en familia.",
    name: "Luis Martinez",
  },
  {
    index: 5,
    image: perfil5,
    title: "Construcción de Centro Comercial",
    text: "Elegir esta empresa para la construcción de nuestro centro comercial fue una decisión acertada. Cumplieron con los plazos establecidos y manejaron todo el proyecto de manera eficiente. La atención al detalle y la calidad del trabajo han sido impresionantes, y nuestros inquilinos están muy contentos con sus nuevos espacios comerciales.",
    name: "Elena Rodriguez",
  },
]

export const stats = [
  {
    title: "Proyectos",
    number: "+600",
    icon: <ClipboardList/>,
  },
  {
    title: "Años de Trayectoria",
    number: "+55",
    icon:<TrendingUp/>
  },
  {
    title: "Colaboradores",
    number: "+1000",
    icon:<Handshake/>
  },
  {
    title: "Tecnicos Certificados",
    number: "+150",
    icon:<UserRound />
  },
]