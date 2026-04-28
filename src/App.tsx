import React, { useState, useEffect} from 'react';
import { Menu, X, MapPin, Phone, Mail,
  //  Facebook, Instagram, Twitter,
    Users, MapPinned, SmilePlus } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './assets/logo_landing.svg'
import DoctorImage from './assets/doctor_landing.png'

// Imágenes de reemplazo (Unsplash) para que funcione en el Canvas
// const DoctorImage = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800";
const AgendaImg = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const OrtodonciaImg = "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const OdontopediatriaImg = "https://plus.unsplash.com/premium_photo-1661764132679-a5a0a88fe232?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const CirugiaImg = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400";
const PeriodonciaImg = "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=400";
const ProtesisImg = "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&q=80&w=400";

const services = [
    {
        name: 'Agenda en línea',
        description: 'Reserva tu cita de forma rápida y sencilla a través de nuestro sistema en línea',
        icon: AgendaImg
    },
    {
        name: 'Ortodoncia',
        description: 'Corrección de problemas de alineación dental y mandibular mediante brackets o alineadores, para lograr una sonrisa funcional y estética.',
        icon: OrtodonciaImg
    },
    {
        name: 'Odontopediatría',
        description: 'Atención dental especializada para niños, enfocada en el cuidado, prevención y tratamiento de problemas bucales desde temprana edad.',
        icon: OdontopediatriaImg
    },
    {
        name: 'Cirugía Maxilofacial',
        description: 'Procedimientos quirúrgicos avanzados para tratar problemas en los huesos de la cara, mandíbula y tejidos relacionados.',
        icon: CirugiaImg
    },
    {
        name: 'Periodoncia',
        description: 'Prevención, diagnóstico y tratamiento de enfermedades de las encías y tejidos de soporte de los dientes.',
        icon: PeriodonciaImg
    },
    {
        name: 'Prótesis Dental',
        description: 'Restauración de dientes perdidos mediante coronas, puentes o prótesis removibles, devolviendo funcionalidad y estética a tu sonrisa.',
        icon: ProtesisImg
    },
];

const team = [
    { name: 'Dra. Martha Patricia Vasquez Macinas', role: 'Cirujano Dentista' },
];

const missionVision = [
    { name: 'Misión', description: 'Ser una clínica dental de vanguardia integrada por profesionales especialistas en odontología de primer nivel, comprometidos en la solución de los problemas buco-dentales de sus pacientes, la promoción de la actualización constante que permita desarrollar nuevas técnicas y materiales utilizados en la solución de los problemas dentales.' },
    { name: 'Visión', description: 'Ser una clínica líder con profesionales odontólogos actualizados que reúnan las máximas exigencias de sus pacientes e ir más allá de sus expectativas con calidad humana tecnológica y científica.' },
];

const locations = [
    { name: 'CIO Clínica Dental', address: 'Calle Paloma #500 Zona Centro, 34000, Durango, Dgo.' },
];

export default function App() {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [visibleDescription, setVisibleDescription] = useState<number | null>(null);

    // Configuración de WhatsApp
    const phoneNumber = "526778716480";
    const whatsappMessage = "¡Hola! Me gustaría agendar una cita en CIO Clínica Dental.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

useEffect(() => {
    const handleScroll = () => {
        console.log('scroll Y:', window.scrollY); // ← ¿se dispara?
        setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
}, []);

    const navItems = [
        { name: 'Inicio', href: '#hero' },
        { name: 'Servicios', href: '#services' },
        { name: 'Equipo', href: '#team' },
        { name: 'Misión y Visión', href: '#mission-vision' },
        { name: 'Ubicación', href: '#location' },
    ];

    const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        event.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsMenuOpen(false);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
            },
        },
    };

    const toggleDescription = (index: number) => {
        setVisibleDescription(visibleDescription === index ? null : index);
    };

    return (
        // <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
        //     <header className={`fixed w-full z-50 transition-all duration-300 ${isSticky ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        //         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        //             <motion.div
        //                 className="flex items-center justify-between h-16"
        //                 initial={{ opacity: 0, y: -50 }}
        //                 animate={{ opacity: 1, y: 0 }}
        //                 transition={{ duration: 0.8 }}
        //             >
        //                 <div className="flex items-center">
        //                     {/* Logo Placeholder */}
        //                     <div className={`p-2 rounded-full mr-3 ${isSticky ? 'bg-blue-100 text-blue-600' : 'bg-white/20 text-white backdrop-blur-sm'}`}>
        //                         <SmilePlus size={28} />
        //                     </div>
        //                     <span className={` ${isSticky ? "text-blue-700" : "text-white"} text-2xl font-bold tracking-tight`}>CIO Clínica Dental</span>
        //                 </div>
        //                 <nav className="hidden md:flex items-center space-x-8">
        //                     {navItems.map((item) => (
        //                         <a key={item.name} href={item.href} className={`${isSticky ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'} font-medium text-sm uppercase tracking-wider transition duration-300`} onClick={(e) => handleNavClick(e, item.href)}>{item.name}</a>
        //                     ))}
        //                 </nav>
        //                 <button onClick={() => setIsMenuOpen(true)} className={`${isSticky ? 'text-gray-900' : 'text-white'} md:hidden focus:outline-none p-2`}>
        //                     <Menu size={28} />
        //                 </button>
        //             </motion.div>
        //         </div>
        //     </header>

        //     {isMenuOpen && (
        //         <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center animate-in fade-in duration-200">
        //             <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-gray-500 hover:text-gray-900 p-2 bg-gray-100 rounded-full">
        //                 <X size={28} />
        //             </button>
        //             <nav className="flex flex-col items-center space-y-8 w-full px-6">
        //                 {navItems.map((item) => (
        //                     <a key={item.name} href={item.href} className="text-gray-800 text-3xl font-bold hover:text-blue-600 transition-colors" onClick={(e) => handleNavClick(e, item.href)}>{item.name}</a>
        //                 ))}
        //             </nav>
        //         </div>
        //     )}
        <div className="min-h-screen bg-white">
            <header className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${isSticky ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="flex items-center justify-between h-20"
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex items-center">
                            <img src={Logo} alt="Cio Dental Logo" width={40} height={40} className="mr-2" />
                            <span className={` ${isSticky ? "text-blue-600 md:text-blue-600" : "text-white md:text-blue-600"} text-2xl font-bold`}>CIO Clínica Dental</span>
                        </div>
                        <nav className="hidden md:flex items-center space-x-4">
                            {navItems.map((item) => (
                                <a key={item.name} href={item.href} className={`${isSticky ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-300'}`} onClick={(e) => handleNavClick(e, item.href)}>{item.name}</a>
                            ))}
                        </nav>
                        <button onClick={() => setIsMenuOpen(true)} className={`${isSticky ? 'text-gray-900' : 'text-white'} md:hidden`}>
                            <Menu size={24} />
                        </button>
                    </motion.div>
                </div>
            </header>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
                    <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-4 text-gray-700">
                        <X size={24} />
                    </button>
                    <nav className="flex flex-col items-center space-y-4">
                        {navItems.map((item) => (
                            <a key={item.name} href={item.href} className="text-gray-700 text-2xl" onClick={(e) => { handleNavClick(e, item.href); setIsMenuOpen(false); }}>{item.name}</a>
                        ))}
                    </nav>
                </div>
            )}

            <main>
                <section id="hero" className={`relative min-h-[100vh] flex items-center pt-20 pb-16 md:pt-0 md:pb-0`}>
                    <motion.div
                        className="absolute inset-0 z-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
                            <div className="bg-gray-50 relative hidden md:block"></div>
                            <div className="bg-blue-600 relative overflow-hidden flex items-end justify-center">
                                {/* Formas decorativas */}
                                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
                                <div className="absolute -bottom-8 left-20 w-[30rem] h-[30rem] bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" style={{ animationDelay: "2s" }}></div>
                                
                                <img src={DoctorImage} alt="Doctor en CIO Dental" className="relative z-10 w-full h-[85%] object-cover object-top opacity-90 md:opacity-100 hidden md:block" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Mobile Background Fallback */}
                    <div className="absolute inset-0 z-0 bg-blue-600 md:hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-800 opacity-90"></div>
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
                            <motion.div
                                className="text-center md:text-left py-12 md:py-0"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wider mb-6 md:mb-4 md:bg-blue-100/80">CUIDADO DENTAL DE CALIDAD</span>
                                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white md:text-gray-900 mb-6 leading-tight">
                                    Haz brillar<br />
                                    <span className="text-blue-200 md:text-blue-600">tu sonrisa</span>
                                </h1>
                                <p className="text-lg md:text-xl text-blue-50 md:text-gray-600 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
                                    En CIO Clínica Dental, nos dedicamos a crear sonrisas hermosas y saludables. Nuestro equipo de expertos utiliza la última tecnología para brindarte la mejor atención.
                                </p>
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center bg-white text-blue-600 md:bg-blue-600 md:text-white hover:bg-blue-50 md:hover:bg-blue-700 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                                >
                                    !AGENDA TU CITA HOY!
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section id="services" className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={containerVariants}
                            className="text-center mb-16"
                        >
                            <motion.h3 variants={itemVariants} className="text-blue-600 uppercase tracking-widest font-semibold mb-3">
                                Especialidades
                            </motion.h3>
                            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                                Servicios Generales
                            </motion.h2>
                            <motion.div variants={itemVariants} className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></motion.div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={containerVariants}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {services.map((service, index) => (
                                <motion.div key={index} variants={itemVariants} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="h-56 overflow-hidden">
                                        <img src={service.icon} alt={service.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent flex flex-col justify-end p-6">
                                        <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                                        
                                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${visibleDescription === index ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                                            <p className="text-gray-200 text-sm leading-relaxed">{service.description}</p>
                                        </div>

                                        <button
                                            className={`self-start mt-2 text-sm font-semibold flex items-center transition-colors ${visibleDescription === index ? 'text-blue-300' : 'text-white group-hover:text-blue-300'}`}
                                            onClick={() => toggleDescription(index)}
                                        >
                                            {visibleDescription === index ? 'Menos info' : 'Más info'}
                                            <svg className={`ml-2 w-4 h-4 transition-transform duration-300 ${visibleDescription === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <section id="team" className="py-24 bg-white relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
                    
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={containerVariants}
                            className="text-center mb-16"
                        >
                            <motion.h3 variants={itemVariants} className="text-blue-600 uppercase tracking-widest font-semibold mb-3">
                                Nuestro Equipo
                            </motion.h3>
                            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                                Profesionales a tu servicio
                            </motion.h2>
                            <motion.div variants={itemVariants} className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></motion.div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={containerVariants}
                            className="flex flex-wrap justify-center"
                        >
                            {team.map((member, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center w-full max-w-sm relative z-10 group hover:-translate-y-2 transition-transform duration-300"
                                    variants={itemVariants}
                                >
                                    <div className="absolute top-0 left-0 w-full h-2 bg-blue-500 rounded-t-2xl"></div>
                                    <div className="w-32 h-32 bg-blue-50 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                                        <Users size={48} className="text-blue-500 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                    <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                                    <div className="w-12 h-1 bg-gray-200 mx-auto rounded-full mb-4 group-hover:w-24 transition-all duration-300"></div>
                                    <p className="text-gray-500 text-sm">Comprometida con la excelencia y el bienestar de cada uno de sus pacientes.</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <section id="mission-vision" className="py-24 bg-gray-900 text-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={containerVariants}
                            className="text-center mb-16"
                        >
                            <motion.h3 variants={itemVariants} className="text-blue-400 uppercase tracking-widest font-semibold mb-3">
                                Filosofía
                            </motion.h3>
                            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold mb-6">
                                Comprometidos contigo
                            </motion.h2>
                            <motion.div variants={itemVariants} className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></motion.div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={containerVariants}
                            className="grid grid-cols-1 md:grid-cols-2 gap-10"
                        >
                            {missionVision.map((item, index) => (
                                <motion.div key={index} variants={itemVariants} className="bg-gray-800 rounded-2xl p-10 border border-gray-700 hover:border-blue-500 transition-colors duration-300 relative overflow-hidden">
                                    <div className="absolute -right-6 -top-6 text-gray-700 opacity-20">
                                        <SmilePlus size={150} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-6 relative z-10 flex items-center">
                                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-4"></div>
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed text-lg relative z-10">{item.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <section id="location" className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={containerVariants}
                            className="text-center mb-16"
                        >
                            <motion.h3 variants={itemVariants} className="text-blue-600 uppercase tracking-widest font-semibold mb-3">
                                Ubicación
                            </motion.h3>
                            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                                Encuéntranos en Durango
                            </motion.h2>
                            <motion.div variants={itemVariants} className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></motion.div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={containerVariants}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
                        >
                            <div className="lg:col-span-4 flex flex-col space-y-6">
                                {locations.map((location, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white rounded-2xl p-8 shadow-lg flex flex-col h-full justify-center"
                                        variants={itemVariants}
                                    >
                                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                                            <MapPinned size={32} className="text-blue-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{location.name}</h3>
                                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">{location.address}</p>
                                        
                                        <div className="space-y-4 pt-6 border-t border-gray-100">
                                            <div className="flex items-center text-gray-600">
                                                <Phone size={20} className="text-blue-500 mr-4" />
                                                <span className="font-medium">+52 677 871 6480</span>
                                            </div>
                                            <div className="flex items-center text-gray-600">
                                                <Mail size={20} className="text-blue-500 mr-4" />
                                                <span className="font-medium">info@ciodental.com</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <motion.div variants={itemVariants} className="lg:col-span-8 bg-white rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-auto">
                                <iframe
                                    title="Mapa de ubicación CIO Clínica Dental"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1821.9989119093732!2d-104.66063342945807!3d24.031141898484005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bc8274b9423b5%3A0x8c9e94a98469b712!2sPaloma%20500%2C%20Zona%20Centro%2C%2034000%20Durango%2C%20Dgo.!5e0!3m2!1ses-419!2smx!4v1732827814930!5m2!1ses-419!2smx"
                                    className="w-full h-full"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                <section id="cta" className="py-24 bg-blue-600 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
                    
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
                    >
                        <motion.h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight" variants={itemVariants}>
                            ¿Listo para recuperar tu <br className="hidden md:block" />confianza al sonreír?
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-blue-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                            Escríbenos ahora mismo y uno de nuestros especialistas te atenderá con gusto.
                        </motion.p>
                        <motion.a 
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariants} 
                            className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-50 px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-xl transform hover:-translate-y-1"
                        >
                            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                            Agendar por WhatsApp
                        </motion.a>
                    </motion.div>
                </section>
            </main>

            <footer className="bg-gray-900 text-white pt-20 pb-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
                        <div className="md:col-span-4">
                            <div className="flex items-center mb-6">
                                <SmilePlus size={36} className="text-blue-500 mr-3" />
                                <h3 className="text-2xl font-bold tracking-tight">CIO Clínica Dental</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed mb-6">Tu sonrisa, nuestra pasión. Especialistas en odontología integral de primer nivel en Durango.</p>
                            <div className="flex space-x-4">
                                {/* <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300"><Facebook size={18} /></a> */}
                                {/* <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors duration-300"><Instagram size={18} /></a> */}
                                {/* <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors duration-300"><Twitter size={18} /></a> */}
                            </div>
                        </div>
                        <div className="md:col-span-4">
                            <h3 className="text-xl font-semibold mb-6 border-b border-gray-800 pb-3">Enlaces Rápidos</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li><a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="hover:text-blue-400 transition-colors">Inicio</a></li>
                                <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-blue-400 transition-colors">Especialidades</a></li>
                                <li><a href="#team" onClick={(e) => handleNavClick(e, '#team')} className="hover:text-blue-400 transition-colors">Nuestro Equipo</a></li>
                                <li><a href="#location" onClick={(e) => handleNavClick(e, '#location')} className="hover:text-blue-400 transition-colors">Ubicación</a></li>
                            </ul>
                        </div>
                        <div className="md:col-span-4">
                            <h3 className="text-xl font-semibold mb-6 border-b border-gray-800 pb-3">Contacto</h3>
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center mb-4 text-gray-400 hover:text-blue-400 transition-colors group">
                                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-900 transition-colors">
                                    <Phone size={18} />
                                </div>
                                +52 677 871 6480
                            </a>
                            <a href="mailto:info@ciodental.com" className="flex items-center mb-4 text-gray-400 hover:text-blue-400 transition-colors group">
                                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-900 transition-colors">
                                    <Mail size={18} />
                                </div>
                                info@ciodental.com
                            </a>
                            <div className="flex items-start text-gray-400 group">
                                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-900 transition-colors mt-1">
                                    <MapPin size={18} />
                                </div>
                                <span>Calle Paloma #500 Zona Centro,<br/>34000, Durango, Dgo.</span>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                        <p className="mb-4 md:mb-0">© {new Date().getFullYear()} CIO Clínica Dental. Todos los derechos reservados.</p>
                        {/* <p>Diseñado con dedicación.</p> */}
                    </div>
                </div>
            </footer>
        </div>
    );
}