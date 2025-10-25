"use client";
import Image from "next/image";
import { siteConfig } from "./config/site";
import { cn } from "./lib/utils";
import { useState } from "react";
import {
  Clipboard,
  ClipboardCheck,
  Contact,
  Document,
  Laptop,
  MailOpen,
  MapPin,
  Verified,
} from "./components/icons";
import { implementations, services, technologies } from "./config/constants";
import { ThemeSwitcher } from "./components/theme/theme-switcher";
import Link from "next/link";
import { FollowerPointerCard, FollowPointer } from "@/components/ui/following-pointer";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function Home() {

  const [isCopied, setIsCopied] = useState(false);
  const [showAllTechnologies, setShowAllTechnologies] = useState(false);

  const handleEmailClick = (email: string) => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
  };

  const buttonClasses =
    "ring-offset-background focus-visible:ring-ring border-input bg-background hover:text-accent-foreground inline-flex items-center justify-center rounded-md border text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  return (
    <div
      className=" max-w-xl border bg-background text-foreground shadow-xl backdrop-blur-sm sm:my-6 rounded-xl min-h-screen mx-3 md:mx-auto my-3"
      style={{ backgroundImage: "url('/images/noise.png')" }}

    >


      <header className="container flex justify-end pt-4">
        <ThemeSwitcher className="flex size-10 items-center justify-center rounded-full border border-border bg-background p-1 transition-transform duration-300 text-brand-green " />
      </header>

      <div className="mx-auto mb-2 space-y-6 px-6 font-sans duration-500 animate-in slide-in-from-top-1/2">
        {/* hero */}
        <header className="flex flex-col items-center justify-center gap-6 duration-1000 animate-in slide-in-from-bottom-full">
          <div className="w-28 overflow-hidden rounded-full border-2 bg-background shadow-inner animate-in zoom-in-0 [animation-duration:1000ms] md:w-36">
            <Image
              src={siteConfig.author.avatar}
              alt={siteConfig.author.name}
              className="w-28 h-28 md:w-36 md:h-36 scale-105  object-cover lg:hover:scale-110 transition-transform duration-300 p-0"
              width={80}
              height={80}
            />
          </div>

          <div className="flex flex-col items-center justify-center space-y-3">
            <h1 className="text-2xl font-medium font-clash">
              {siteConfig.author.name}
              <Verified size={20} className="ml-2 inline-flex" />
            </h1>

            <div className="text-sm text-muted-foreground brightness-110 flex items-center gap-">
              <MapPin size={14} className="mr-[0.5px] inline-flex" />
              {siteConfig.author.location}{" "}
              <div className="flex items-center gap-1 ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-speech-icon lucide-speech"><path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" /><path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" /><path d="M17 15a3.5 3.5 0 0 0-.025-4.975" /></svg>
                {siteConfig.author.pronouns}
              </div>
            </div>

            <p className="mx-1 text-center leading-relaxed text-muted-foreground">
              {siteConfig.author.description}
            </p>
          </div>

          {/* socials */}
          <div className="flex items-center gap-2 px-3">

            <a
              title="Resume & Cirriculum Vitae"
              href={"https://wa.me/5219141226647"}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonClasses,
                "relative h-11 px-4 group gap-x-1 rounded-xl transition-all duration-300 hover:gap-x-2",
                "bg-background text-foreground",
                "before:absolute before:inset-0 before:rounded-xl before:p-[2px] before:bg-gradient-to-r before:from-brand-green before:to-brand-green-hover before:opacity-100 before:transition-all before:duration-300",
                "before:content-[''] before:-z-10 before:blur-[1px]",
                "hover:before:blur-[3px] hover:shadow-[0_0_15px_rgba(185,237,53,0.4)]",
                "dark:hover:shadow-[0_0_20px_rgba(185,237,53,0.6)]"
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-circle-icon transition-transform duration-700"
              >
                <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
              </svg>
              <span className="truncate transition-transform duration-700 ">
                WhatsApp
              </span>
            </a>


            <div className="flex justify-center gap-x-3">
              {Object.values(siteConfig.links).map(
                ({ title, href, icon: Icon }) => {
                  return (
                    <a
                      key={title}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={title}
                      className={cn(
                        buttonClasses,
                        "h-10 px-4 py-2",
                        "h-12 w-12 rounded-full p-3 transition-all duration-300 hover:scale-105 hover:shadow-md"
                      )}
                    >
                      <Icon />
                    </a>
                  );
                }
              )}
            </div>
          </div>




          {/* portfolio website link */}
          <div className="flex  items-center justify-center gap-3 py-3 md:flex-row">


            <a
              title="Resume & Cirriculum Vitae"
              href={siteConfig.author.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonClasses,
                "h-11 px-4",
                "group gap-x-1 rounded-xl transition-all duration-300 hover:gap-x-2 hover:shadow-md"
              )}
            >
              <Document className="h-4 md:h-5 transition-transform duration-700 " />

              <span className="truncate transition-transform duration-700 ">
                Ver Curriculum
              </span>
            </a>

            <a
              title="Resume & Cirriculum Vitae"
              href={siteConfig.author.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonClasses,
                "h-11 px-3 md:w-1/2",
                " rounded-xl hover:shadow-md"
              )}
            >

              <span className="truncate transition-transform duration-700 group-hover:-translate-x-7">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download h-5 w-5 text-brand-green" aria-label="Download Resume"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
              </span>
            </a>
          </div>
        </header>



        <div className="h-px w-full bg-border" />

        {/* Experiencia */}
        <div className="space-y-5">
          <div className="flex items-center gap-2 px-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase-icon lucide-briefcase"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /><rect width="20" height="14" x="2" y="6" rx="2" /></svg>
            <h2 className="text-lg font-medium md:text-xl font-clash">Experiencia laboral</h2>
          </div>
          <div className="grid grid-cols-1 gap-x-12 gap-y-2 ">
            <div className="relative flex max-w-2xl items-start gap-x-4 before:absolute before:bottom-0 before:left-9 before:top-[5rem] before:h-[calc(100%-70px)] before:w-[1px] before:bg-muted lg:gap-x-6">
              <Link
                href="#"
                rel="noreferrer noopener"
                target="_blank"
                className="relative grid min-h-[80px] min-w-[80px] place-items-center text-clip rounded-md border border-border bg-secondary/50 p-1"
              >
                <Image
                  alt="logo"
                  src="/images/codifin_logo.jpeg"
                  width={90}
                  height={90}
                  className="object-cover duration-300 rounded-md"
                />


              </Link>

              <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold">Codifin</h3>
                <p className="font-medium">Desarrollador Web FullStack</p>

                <time className="mt-2 text-sm uppercase tracking-widest text-foreground/70">
                  <span>
                    Mayo 2022 - <span className="text-brand-green dark:text-brand-green">Presente</span>
                  </span>
                </time>

                <ul className="my-4 list-disc space-y-2 pl-5 tracking-tight text-foreground/60 hover:text-foreground/75">
                  <li>
                    Inicié impartiendo <span className="font-medium">clases de programación</span> para capacitar a recién egresados en tecnologías web modernas.
                  </li>
                  <li>
                    Formé parte del equipo de desarrollo de un <span className="font-medium">dashboard corporativo</span> para una empresa de reclutamiento, construido con <span className="font-medium">Next.js</span> y <span className="font-medium">Firebase</span>.
                  </li>
                  <li>
                    Implementé funcionalidades con <span className="font-medium">Firebase Realtime Database</span>, <span className="font-medium">Authentication</span> y <span className="font-medium">Cloud Functions</span>.
                  </li>
                  <li>
                    Integré <span className="font-medium">OpenAI</span> para desarrollar un sistema de lectura automática y análisis de <span className="font-medium">CVs de candidatos</span>.
                  </li>
                  <li>
                    Integré <span className="font-medium">endpoints en Next.js</span> para validación de documentos oficiales (<span className="italic">IMSS, INE, CURP, RFC</span>, entre otros).
                  </li>
                  <li>
                    Implementé un sistema de <span className="font-medium">rastreo de equipos de empleados</span> mediante un servicio externo y <span className="font-medium">Google Maps API</span> para visualización en tiempo real.
                  </li>
                  <li>
                    Optimizé el rendimiento del dashboard con <span className="font-medium">lazy loading</span> para tablas, <span className="font-medium">paginación dinámica</span> y <span className="font-medium">búsqueda en tiempo real</span> de candidatos.
                  </li>
                </ul>
              </div>


            </div>
            <div className="relative flex max-w-2xl items-start gap-x-4 lg:gap-x-6">
              <Link
                href="#"
                rel="noreferrer noopener"
                target="_blank"
                className="relative grid min-h-[80px] min-w-[80px] place-items-center text-clip rounded-md border border-border bg-secondary/50 p-2"
              >
                <Image
                  alt="logo"
                  src="/images/universidad-tecmilenio-seeklogo.svg"
                  width={90}
                  height={90}
                  className="object-cover duration-300"
                />

              </Link>

              <div className="flex flex-col items-start"> <h3 className="text-xl font-bold"> Universidad Tecmilenio <span className="text-sm text-foreground/40"> (Campus MTY)</span></h3>
                <p>Desarrollador Frontend</p>

                <time className="mt-2 text-sm uppercase tracking-widest text-foreground/60">

                  <span >Enero 2022 - Agosto 2022</span>
                </time>

                <ul className="my-4 list-disc space-y-2 pl-5 tracking-tight text-foreground/60 hover:text-foreground/75">
                  <li>
                    Participé en un equipo ágil bajo la metodología <span className="font-medium">Scrum</span> para el desarrollo de una plataforma de cursos en línea.
                  </li>
                  <li>
                    Desarrollé el <span className="font-medium">frontend</span> utilizando <span className="font-medium">React</span> y <span className="font-medium">Material UI</span>, asegurando una interfaz moderna y responsiva.
                  </li>
                  <li>
                    Implementé componentes reutilizables y optimicé la carga de datos mediante <span className="font-medium">React Hooks</span> y manejo de estado eficiente.
                  </li>
                  <li>
                    Colaboré con el equipo de backend para integrar servicios mediante <span className="font-medium">APIs REST</span> desarrolladas en <span className="font-medium">Express.js</span>.
                  </li>
                  <li>
                    Contribuí al despliegue y mantenimiento de la aplicación en entornos de prueba y producción.
                  </li>
                </ul>
              </div></div>
          </div>
        </div>

        <div className="h-px w-full bg-border" />

        {/* services */}
        {/* <div className="space-y-5">
          <div className="flex items-center gap-2 px-3">
            <Laptop size={24} />
            <h2 className="text-lg font-medium md:text-xl font-clash">Portafolio</h2>
          </div>

          <div className="space-y-3 duration-1000 animate-in slide-in-from-bottom-full">
            {services.map(({ title, description, icon }, i) => (
              <div
                key={i}
                style={{ backgroundImage: "url('/images/bg-gradient-1.svg')" }}
                className="overflow-hidden rounded-xl border bg-background bg-contain bg-right bg-no-repeat shadow-sm transition-shadow duration-300 hover:shadow dark:bg-secondary"
              >
                <div className="grid grid-flow-col items-center justify-between gap-x-6 px-3 py-5 dark:backdrop-blur-[2px] md:px-6">
                  <img
                    src={icon}
                    alt={title}
                    width={40}
                    height={40}
                    className="dark:invert"
                  />

                  <div className="space-y-1 duration-1000 animate-in slide-in-from-bottom-full">
                    <h3 className="font-medium md:text-lg font-clash">{title}</h3>

                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-border" /> */}

        {/* Tecnologías */}
        <div className="space-y-5">
          <div className="flex items-center gap-2 px-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-icon lucide-code"><path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" /></svg>
            <h2 className="text-lg font-medium md:text-xl font-clash">Tecnologías</h2>
          </div>

          <div className="space-y-2">
            {/* Show first 6 technologies */}
            {technologies.slice(0, 6).map(({ name, description, href, icon: Icon }, i) => (
              <li key={i} className="flex items-center gap-x-2 p-2">
                <Icon />
                <a href={href} rel="noreferrer noopener" target="_blank" aria-label={name} className="my-auto min-w-fit leading-3  underline underline-offset-4 duration-500 animate-in zoom-in-50 hover:underline hover:text-brand-green dark:hover:text-brand-green">
                  {name}</a>-<span className="truncate text-foreground/60 duration-500 animate-in zoom-in-50">{description}</span>
              </li>
            ))}

            {/* Show additional technologies with animation */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showAllTechnologies ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
              {technologies.slice(6).map(({ name, description, href, icon: Icon }, i) => (
                <li key={i + 6} className="flex items-center gap-x-2 p-2">
                  <Icon />
                  <a href={href} rel="noreferrer noopener" target="_blank" aria-label={name} className="my-auto min-w-fit leading-3  underline underline-offset-4 duration-500 animate-in zoom-in-50 hover:underline hover:text-brand-green dark:hover:text-brand-green">
                    {name}</a>-<span className="truncate text-foreground/60 duration-500 animate-in zoom-in-50">{description}</span>
                </li>
              ))}
            </div>

            {/* Show/Hide button */}
            {technologies.length > 6 && (
              <div className="flex justify-center">
                <button
                  onClick={() => setShowAllTechnologies(!showAllTechnologies)}
                  className="px-4 py-2 text-sm font-medium text-brand-green hover:text-brand-green-hover dark:text-brand-green dark:hover:text-brand-green-hover transition-colors duration-200 underline underline-offset-4 hover:underline"
                >
                  {showAllTechnologies ? 'Ver menos' : 'Ver todas'}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Implementaciones */}
        <div className="space-y-5 pt-4">
          <div className="flex items-center gap-2 px-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-toy-brick-icon lucide-toy-brick"><rect width="18" height="12" x="3" y="8" rx="1" /><path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" /><path d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" /></svg>
            <h2 className="text-lg font-medium md:text-xl font-clash">Integraciones</h2>
          </div>

          {implementations.map(({ name, description, href, icon: Icon }, i) => (
            <li key={i} className="flex items-center gap-x-2 p-2">
              <Icon />
              <a href={href} rel="noreferrer noopener" target="_blank" aria-label={name} className="my-auto min-w-fit leading-3  underline underline-offset-4 duration-500 animate-in zoom-in-50 hover:underline hover:text-brand-green dark:hover:text-brand-green">
                {name}</a>-<span className="truncate text-foreground/60 duration-500 animate-in zoom-in-50">{description}</span></li>
          ))}
        </div>

        <div className="h-px w-full bg-border" />

        {/* contact */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 px-3">
            <Contact size={24} />

            <h2 className="text-lg font-medium md:text-xl font-clash">Contactame</h2>
          </div>

          <div
            className="group cursor-pointer rounded-2xl border bg-brand-green/90 bg-right bg-no-repeat p-2 text-black shadow-sm transition-shadow animate-in slide-in-from-bottom-full [animation-duration:1000ms] [transition-duration:300ms] hover:shadow-md"
            style={{ backgroundImage: "url('/images/bg-gradient-2.svg')" }}
            onClick={() => handleEmailClick(siteConfig.author.mail)}
          >
            <div className="flex flex-col space-y-3 p-3 md:p-6">
              <div className="flex justify-between">
                <MailOpen />

                {isCopied ?
                  <ClipboardCheck className="-my-3 -mr-2 size-6" />
                  : <Clipboard className="-my-3 -mr-2 size-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                }
              </div>

              <div className="text-lg font-medium md:text-xl">Envíame un correo</div>
            </div>

            <div className="space-y-3 p-3 pt-0 md:p-6">
              <div className="flex flex-col text-lg md:flex-row md:items-center md:gap-2">
                <span className="underline-offset-8 group-hover:underline">
                  {siteConfig.author.mail}
                </span>

                {isCopied && (
                  <span className="duration-500 animate-in slide-in-from-right-full">
                    (Copiado)
                  </span>
                )}
              </div>

              <p className="text-sm leading-relaxed md:text-base">
                Disponible para conversar sobre proyectos, ideas o simplemente para saludar.
              </p>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-border" />
      </div>

      <footer className="flex w-full justify-center py-6 text-sm text-foreground/60">
        &copy;{new Date().getFullYear()} by&nbsp;
        <a
          href={siteConfig.links.github.href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-4 duration-300 hover:text-foreground hover:underline"
        >
          {siteConfig.author.name}
        </a>
      </footer>


    </div>
  );
}
