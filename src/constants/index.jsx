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

//seccion NOSOTROS
export const team = [
  {
    name: "Martin Reinoso",
    role: "Socio Fundador",
    image: "https://cdn.pixabay.com/photo/2015/06/11/11/39/businessman-805769_1280.jpg",
  },
  {
    name: "Lucas Reinoso",
    role: "Socio Fundador",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Lisandro Robledo",
    role: "Arquitecto",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    name: "Ezequiel Riveros",
    role: "Electricista Certificado",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
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
    image: imageModal,
    description: "Proveemos servicios completos de instalación eléctrica, mantenimiento y reparación para proyectos residenciales, comerciales e industriales. Nuestro equipo de electricistas certificados garantiza seguridad y eficiencia en cada trabajo, cumpliendo con las normativas vigentes y utilizando materiales de alta calidad.",
  },
  {
    title: "Construcción",
    image: imageModal,
    description: "Ofrecemos soluciones integrales de construcción, abarcando desde la planificación y diseño hasta la ejecución y entrega del proyecto. Nos especializamos en la construcción de viviendas, edificios comerciales e industriales, garantizando plazos de entrega y estándares de calidad superiores.",
  },
  {
    title: "Arquitectura",
    image: imageModal,
    description: "Nuestro equipo de arquitectos crea diseños innovadores y funcionales, adaptados a las necesidades y preferencias de cada cliente. Desde proyectos residenciales hasta complejos comerciales, transformamos tus ideas en espacios únicos y sostenibles, cuidando cada detalle del proceso.",
  },
  {
    title: "Plomería",
    image: imageModal,
    description: "Brindamos servicios de plomería profesional para instalaciones nuevas, reparaciones y mantenimiento. Nos aseguramos de que los sistemas de agua y desagüe funcionen de manera óptima, utilizando tecnología avanzada y prácticas seguras para un rendimiento duradero.",
  },
  {
    title: "Electricidad",
    image: imageModal,
    description: "Especialistas en remodelaciones, renovamos y transformamos tus espacios existentes para que se adapten a tus necesidades y estilo de vida. Ya sea una cocina, baño o un espacio comercial, nuestro equipo trabaja con precisión y creatividad para revitalizar tus ambientes.",
  },
  {
    title: "Pintura",
    image: imageModal,
    description: "Ofrecemos servicios de pintura interior y exterior, aplicando técnicas profesionales y productos de alta calidad para lograr acabados impecables. Nuestro equipo se encarga de todo el proceso, desde la preparación de superficies hasta la aplicación final, asegurando resultados duraderos y estéticamente agradables.",
  },
]