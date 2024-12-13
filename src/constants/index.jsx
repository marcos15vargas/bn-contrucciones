import {
  BrickWall,
  Cable,
  CircleCheck,
// DraftingCompass,
  HardHat,
  PaintRoller,
  // ShowerHead,
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

//imagenes para seccion servicios
import construccion from "../assets/services/construccion.webp";
import electricidad from "../assets/services/electricidad.webp";
import pintura from "../assets/services/pintura.webp";
import remodelacion from "../assets/services/remodelacion.webp";
// import plomeria from "../assets/services/plomeria.webp";
// import arquitectura from "../assets/services/arquitectura.webp";

//avatares
// import avatar1 from "../assets/team/1.png";
import avatar2 from "../assets/team/2.png";
import avatar3 from "../assets/team/3.png";
import avatar4 from "../assets/team/4.png";

export const navItems = [
  {
    menu: "Inicio",
    href: "/",
  },
  {
    menu: "Trabajos",
    href: "/jobs",
  },
  {
    menu: "Servicios",
    href: "/services",
  },
  {
    menu: "Nosotros",
    href: "/aboutus",
  },
  {
    menu: "Contacto",
    href: "/contact",
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
    text: "Nuestro equipo de electricistas cuenta con amplia experiencia y formación continua en las últimas tecnologías y normativas del sector, garantizando soluciones seguras y modernas. Utilizamos materiales de primera calidad y nos aseguramos de que cada proyecto cumpla con los más altos estándares de seguridad y durabilidad. Diseñamos soluciones eléctricas a medida para cada cliente.",
    icon: <Cable />,
  },
  {
    title: "Construccion",
    text: "Nuestro equipo combina años de experiencia con una dedicación inigualable, garantizando resultados excepcionales en cada proyecto. Cada proyecto se realiza con materiales de primera calidad y una atención meticulosa al detalle, asegurando estructuras duraderas y estéticamente impresionantes. Trabajamos estrechamente con nuestros clientes para ofrecer soluciones personalizadas que se adapten a sus necesidades y superen sus expectativas.",
    icon: <HardHat />,
  },
  {
    title: "Remodelacion",
    text: "Nuestro equipo de renovaciones combina experiencia y versatilidad para abordar proyectos variados, desde cocinas y baños hasta espacios exteriores. Nos comprometemos a emplear materiales de alta calidad y técnicas precisas, garantizando estándares de durabilidad y estética. Colaboramos estrechamente con los clientes para crear soluciones personalizadas que reflejen sus necesidades y gustos, asegurando resultados que superen sus expectativas.",
    icon: <BrickWall />,
  },
  {
    title: "Pintura",
    text: " Nuestros pintores aportan experiencia y habilidad en cada proyecto. Usamos materiales de primera calidad para garantizar acabados duraderos y estéticamente impecables. Brindamos servicios de pintura personalizados, diseñados para adaptarse a las necesidades y preferencias de nuestros clientes, creando espacios únicos y acogedores que destacan por su calidad y estilo.",
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
    title: "Años de Trayectoria",
    number: "+15",
    icon:<TrendingUp/>
  },
  {
    title: "Proyectos",
    number: "+100",
    icon: <ClipboardList/>,
  },
  {
    title: "Colaboradores",
    number: "+10",
    icon:<Handshake/>
  },
  {
    title: "Clientes Satisfechos",
    number: "99%",
    icon:<UserRound />
  },
]

//seccion NOSOTROS
export const team = [
  {
    name: "Norberto Reinoso",
    role: "Presidente - Jefe de Obra",
    image: avatar2,
  },
  {
    name: "Gabriel Castro",
    role: "Jefe de Obra",
    image: avatar2,
  },
  {
    name: "Claudio Reinoso",
    role: "Especialista en Pintura",
    image: avatar4,
  },
  {
    name: "Roberto Cortez",
    role: "Electricista Matriculado",
    image: avatar3,
  },
]

//seccion Jobs

import imageModal from "../assets/slider/slider1.webp";

export const jobs = [
  {
    title: "Residencial Las Flores",
    image: imageModal,
    description: "Construcción de un complejo de viviendas unifamiliares con diseño moderno y acabados de alta calidad.",
    mt2: "3,500m2",
    location: "San Jose, Costa Rica",
    duration: "12 meses",
    date: "Marzo 2023",
    nameModal: "my_modal_1",
    imageModal1: imageModal,
    imageModal2: imageModal,
    imageModal3: imageModal,
    imageModal4: imageModal,
  },
  {
    title: "Centro Comercial El Dorado",
    image: imageModal,
    description: "Desarrollo de un centro comercial con más de 100 tiendas, áreas de entretenimiento y restaurantes.",
    mt2: "25,000m2",
    location: "Ciudad de Panamá, Panamá",
    duration: "24 meses",
    date: "Noviembre 2022",
    nameModal: "my_modal_2",
    imageModal1: imageModal,
    imageModal2: imageModal,
    imageModal3: imageModal,
    imageModal4: imageModal,
  },
  {
    title: "Torre Empresarial Central",
    image: imageModal,
    description: "Edificio de oficinas de última generación con espacios flexibles y tecnología avanzada.",
    mt2: "18,000m2",
    location: "Bogotá, Colombia",
    duration: "18 meses",
    date: "Junio 2021",
    nameModal: "my_modal_3",
    imageModal1: imageModal,
    imageModal2: imageModal,
    imageModal3: imageModal,
    imageModal4: imageModal,
  },
  {
    title: "Hospital San Rafael",
    image: imageModal,
    description: "Ampliación y modernización de instalaciones hospitalarias, incluyendo nuevas salas de emergencia y cuidados intensivos.",
    mt2: "12,000m2",
    location: "Lima, Perú",
    duration: "20 meses",
    date: "Agosto 2023",
    nameModal: "my_modal_4",
    imageModal1: imageModal,
    imageModal2: imageModal,
    imageModal3: imageModal,
    imageModal4: imageModal,
  },
  {
    title: "Hotel Playa Azul",
    image: imageModal,
    description: "Construcción de un hotel de lujo con 200 habitaciones, piscinas y áreas recreativas.",
    mt2: "15,000m2",
    location: "Cancún, México",
    duration: "16 meses",
    date: "Enero 2022",
    nameModal: "my_modal_5",
    imageModal1: imageModal,
    imageModal2: imageModal,
    imageModal3: imageModal,
    imageModal4: imageModal,
  },
  {
    title: "Parque Industrial Norte",
    image: imageModal,
    description: "Desarrollo de un parque industrial con naves industriales, áreas de carga y oficinas administrativas.",
    mt2: "30,000m2",
    location: "Monterrey, México",
    duration: "22 meses",
    date: "Abril 2023",
    nameModal: "my_modal_6",
    imageModal1: imageModal,
    imageModal2: imageModal,
    imageModal3: imageModal,
    imageModal4: imageModal,
  },
]


// Seccion Services 
export const services = [
  {
    title: "Electricidad",
    image: electricidad,
    description: "Proveemos servicios completos de instalación eléctrica, mantenimiento y reparación para proyectos residenciales, comerciales e industriales. Nuestro equipo de electricistas certificados garantiza seguridad y eficiencia en cada trabajo, cumpliendo con las normativas vigentes y utilizando materiales de alta calidad.",
  },
  {
    title: "Construcción",
    image: construccion,
    description: "Ofrecemos soluciones integrales de construcción, abarcando desde la planificación y diseño hasta la ejecución y entrega del proyecto. Nos especializamos en la construcción de viviendas, edificios comerciales e industriales, garantizando plazos de entrega y estándares de calidad superiores.",
  },
  // {
  //   title: "Arquitectura",
  //   image: arquitectura,
  //   description: "Nuestro equipo de arquitectos crea diseños innovadores y funcionales, adaptados a las necesidades y preferencias de cada cliente. Desde proyectos residenciales hasta complejos comerciales, transformamos tus ideas en espacios únicos y sostenibles, cuidando cada detalle del proceso.",
  // },
  // {
  //   title: "Plomería",
  //   image: plomeria,
  //   description: "Brindamos servicios de plomería profesional para instalaciones nuevas, reparaciones y mantenimiento. Nos aseguramos de que los sistemas de agua y desagüe funcionen de manera óptima, utilizando tecnología avanzada y prácticas seguras para un rendimiento duradero.",
  // },
  {
    title: "Remodelación",
    image: remodelacion,
    description: "Especialistas en remodelaciones, renovamos y transformamos tus espacios existentes para que se adapten a tus necesidades y estilo de vida. Ya sea una cocina, baño o un espacio comercial, nuestro equipo trabaja con precisión y creatividad para revitalizar tus ambientes.",
  },
  {
    title: "Pintura",
    image: pintura,
    description: "Ofrecemos servicios de pintura interior y exterior, aplicando técnicas profesionales y productos de alta calidad para lograr acabados impecables. Nuestro equipo se encarga de todo el proceso, desde la preparación de superficies hasta la aplicación final, asegurando resultados duraderos y estéticamente agradables.",
  },
]