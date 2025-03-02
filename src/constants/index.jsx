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


// Familia Pandiella ampliación y construcción de departamento:
// Proyectamos junto con el equipo todo lo que nosotros queríamos y sobre la marcha se iban haciendo cambios según nuestros gustos y necesidades cada uno cumplió con su parte fueron eficientes responsables destacamos el respeto los buenos modales el orden la limpieza al finalizar cada tarea cumplieron con los tiempos y con Los presupuestos acordados ampliamente recomendados por su eficiencia calidad de persona y calidad de trabajo siempre abiertos a escuchar y entre ambas partes encontrar soluciones convenientes para todos un grupo alegre que siempre fue a trabajar con ganas y sin dejar un solo día su responsabilidad muy agradecidos hoy disfrutamos de nuestro propio espacio

export const testimonial = [
  {
    index: 1,
    image: perfil1,
    title: "Construcción de Vivienda",
    text: "Estamos felices !!!! hace más de un año vivimos en nuestro hogar tal cual lo soñamos, supieron entender cada pedido y dieron respuesta a nuestras necesidades tanto material como económica..gracias por ayudarnos a cumplir nuestro sueño, pasaron a ser parte de nuestra familia... recomendable al 100%",
    name: "Familia Mariangeles Alamino - Franco Nechi",
  },
  {
    index: 2,
    image: perfil2,
    title: "Ampliación y construcción de departamento",
    text: "Proyectamos junto con el equipo todo lo que nosotros queríamos y sobre la marcha se iban haciendo cambios según nuestros gustos y necesidades cada uno cumplió con su parte fueron eficientes responsables destacamos el respeto los buenos modales el orden la limpieza al finalizar cada tarea cumplieron con los tiempos y con Los presupuestos acordados ampliamente recomendados por su eficiencia calidad de persona y calidad de trabajo siempre abiertos a escuchar y entre ambas partes encontrar soluciones convenientes para todos un grupo alegre que siempre fue a trabajar con ganas y sin dejar un solo día su responsabilidad muy agradecidos hoy disfrutamos de nuestro propio espacio.",
    name: "Familia Pandiella",
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


//obra de zonda
import imageObraZonda1 from "../assets/jobs/obra-zonda/1.webp";
import imageObraZonda2 from "../assets/jobs/obra-zonda/2.webp";
import imageObraZonda3 from "../assets/jobs/obra-zonda/3.webp";
import imageObraZonda4 from "../assets/jobs/obra-zonda/4.webp";
// import imageObraZonda5 from "../assets/jobs/obra-zonda/5.webp";
import imageObraZonda6 from "../assets/jobs/obra-zonda/6.webp";
//obra de zonda


//piscina en ullum
import imagePiscinaUllum1 from "../assets/jobs/piscina-ullum/1.webp";
import imagePiscinaUllum2 from "../assets/jobs/piscina-ullum/2.webp";
import imagePiscinaUllum3 from "../assets/jobs/piscina-ullum/3.webp";
// import imagePiscinaUllum4 from "../assets/jobs/piscina-ullum/4.webp";
import imagePiscinaUllum5 from "../assets/jobs/piscina-ullum/5.webp";
// import imagePiscinaUllum6 from "../assets/jobs/piscina-ullum/6.webp";
import imagePiscinaUllum7 from "../assets/jobs/piscina-ullum/7.webp";
//piscina en ullum


//pintura capital 1
import pinturaCapital1_1 from "../assets/jobs/pintura-capital-1/1.webp";
// import pinturaCapital1_2 from "../assets/jobs/pintura-capital-1/2.webp";
import pinturaCapital1_3 from "../assets/jobs/pintura-capital-1/3.webp";
import pinturaCapital1_4 from "../assets/jobs/pintura-capital-1/4.webp";
// import pinturaCapital1_5 from "../assets/jobs/pintura-capital-1/5.webp";
import pinturaCapital1_6 from "../assets/jobs/pintura-capital-1/6.webp";
//pintura capital 1


//renovacion capital 1
import renovacionCapital1_1 from "../assets/jobs/renovacion-capital-1/1.webp";
// import renovacionCapital1_2 from "../assets/jobs/renovacion-capital-1/2.webp";
import renovacionCapital1_3 from "../assets/jobs/renovacion-capital-1/3.webp";
// import renovacionCapital1_4 from "../assets/jobs/renovacion-capital-1/4.webp";
import renovacionCapital1_5 from "../assets/jobs/renovacion-capital-1/5.webp";
import renovacionCapital1_6 from "../assets/jobs/renovacion-capital-1/6.webp";
// import renovacionCapital1_7 from "../assets/jobs/renovacion-capital-1/7.webp";
import renovacionCapital1_8 from "../assets/jobs/renovacion-capital-1/8.webp";
//renovacion capital 1



//renovacion capital 2
import renovacionCapital2_1 from "../assets/jobs/renovacion-capital-2/1.webp";
// import renovacionCapital2_2 from "../assets/jobs/renovacion-capital-2/2.webp";
import renovacionCapital2_3 from "../assets/jobs/renovacion-capital-2/3.webp";
import renovacionCapital2_4 from "../assets/jobs/renovacion-capital-2/4.webp";
import renovacionCapital2_5 from "../assets/jobs/renovacion-capital-2/5.webp";
import renovacionCapital2_6 from "../assets/jobs/renovacion-capital-2/6.webp";
//renovacion capital 2


//pintura capital 2
import pinturaCapital2_1 from "../assets/jobs/pintura-capital-2/1.webp";
import pinturaCapital2_2 from "../assets/jobs/pintura-capital-2/2.webp";
import pinturaCapital2_3 from "../assets/jobs/pintura-capital-2/3.webp";
import pinturaCapital2_4 from "../assets/jobs/pintura-capital-2/4.webp";
import pinturaCapital2_5 from "../assets/jobs/pintura-capital-2/5.webp";
//pintura capital 2

export const jobs = [
  {
    title: "Obra de Vivienda en Zonda",
    image: imageObraZonda2,
    description: "Construcción de un complejo de vivienda en el corazon de Zonda, totalmente equipada, piscina con sala de maquinas, baños y parrillero.",
    mt2: "-",
    location: "Zonda, San Juan",
    duration: "3 meses",
    date: "Enero 2025",
    nameModal: "my_modal_1",
    imageModal1: imageObraZonda1,
    imageModal2: imageObraZonda3,
    imageModal3: imageObraZonda4,
    imageModal4: imageObraZonda6,
  },
  {
    title: "Piscina en Ullum",
    image: imagePiscinaUllum5,
    description: "Instalación de piscina con parrillero en Ullum, con todo lo necesario para disfrutar de un ambiente relajante.",
    mt2: "-",
    location: "Ullum, San Juan",
    duration: "3 meses",
    date: "Enero 2024",
    nameModal: "my_modal_2",
    imageModal1: imagePiscinaUllum1,
    imageModal2: imagePiscinaUllum2,
    imageModal3: imagePiscinaUllum3,
    imageModal4: imagePiscinaUllum7,
  },
  {
    title: "Trabajo de pintura en Capital",
    image: pinturaCapital1_3,
    description: "Trabajo de pintura en Capital, realizado con profesionalismo y calidad.",
    mt2: "-",
    location: "Capital, San Juan",
    duration: "2 semanas",
    date: "Septiembre 2024",
    nameModal: "my_modal_3",
    imageModal1: pinturaCapital1_1,
    imageModal2: pinturaCapital1_6,
    imageModal3: pinturaCapital1_3,
    imageModal4: pinturaCapital1_4,
  },
  {
    title: "Renovación de vivienda en Capital",
    image: renovacionCapital1_8,
    description: "Renovación de vivienda, especialmente en interior y exterior.",
    mt2: "-",
    location: "Capital, San Juan",
    duration: "6 meses",
    date: "Noviembre 2024",
    nameModal: "my_modal_4",
    imageModal1: renovacionCapital1_1,
    imageModal2: renovacionCapital1_3,
    imageModal3: renovacionCapital1_5,
    imageModal4: renovacionCapital1_6,
  },
  {
    title: "Renovación del interior de vivienda en Capital",
    image: renovacionCapital2_4,
    description: "Renovación del interior de vivienda.",
    mt2: "-",
    location: "Capital, San Juan",
    duration: "2 meses",
    date: "Octubre 2023",
    nameModal: "my_modal_5",
    imageModal1: renovacionCapital2_1,
    imageModal2: renovacionCapital2_3,
    imageModal3: renovacionCapital2_5,
    imageModal4: renovacionCapital2_6,
  },
  {
    title: "Trabajo de pintura en Capital",
    image: pinturaCapital2_5,
    description: "Trabajo de pintura en Capital, realizado con profesionalismo y calidad.",
    mt2: "-",
    location: "Capital, San Juan",
    duration: "3 Semanas",
    date: "Diciembre 2023",
    nameModal: "my_modal_6",
    imageModal1: pinturaCapital2_1,
    imageModal2: pinturaCapital2_2,
    imageModal3: pinturaCapital2_3,
    imageModal4: pinturaCapital2_4,
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