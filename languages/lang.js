const translations = {
    es: {
      portfolio: "Mi portafolio", 
      page_title: "Portafolio de Desarrollador Web",
      job_title: "Ingeniera de Software",
      see_projects: "Ver Proyectos",
      about_me: "Sobre Mí",
      about_me_text: `Soy Ingeniera Informática, especializada en Ingeniería del Software, y recientemente he finalizado el Máster en Desarrollo de Aplicaciones y Servicios Web (Full Stack). Me encanta el desarrollo de software y todo lo que implique aprender, mejorar y construir soluciones que realmente funcionen y aporten valor.<br><br>
      Durante mis prácticas en empresa, trabajé en dos empresas: una centrada en el frontend de aplicaciones web, donde me enfoqué en mejorar la interfaz y experiencia del usuario, y otra en el desarrollo de un proyecto de escritorio en Java, donde profundicé en el diseño y desarrollo de aplicaciones standalone.<br><br>
      Actualmente formo parte del equipo de Getronics como Software Engineer, donde me encargo de resolver incidencias, mejorar sistemas existentes y desarrollar nuevas funcionalidades para distintas aplicaciones web.<br><br>    
      Además, he creado diversas aplicaciones tanto en equipo como de forma autónoma durante mis estudios de universidad y máster. <strong>¡Te invito a ver alguno de estos proyectos en este portfolio!</strong>`,
      contact: "Contacto",
      contact_me: "¿Quieres ponerte en contacto conmigo? Rellena el formulario:", 
      name: "Nombre", 
      email: "Correo electrónico", 
      message: "Mensaje", 
      send: "Enviar", 
      get_to_know_me: "¡Conóceme!",
      my_skills: "Mis habilidades", 
      projects: "Proyectos", 
      web_applications: "Aplicaciones web", 
      mobile_applications: "Aplicaciones móviles", 
      homemate_description: "Aplicación web para facilitar la búsqueda de habitaciones en alquiler y de compañeros de piso en España.", 
      biblioconnect_description: "Aplicación web para mejorar el acceso y gestión de libros en formato físico en las bibliotecas públicas de la Comunidad Valenciana.", 
      sportpower_description: "Aplicación web de una tienda que permite la compra de artículos deportivos y suplementos",
      spendtogether_description: "Aplicación móvil para gestionar gastos compartidos de un grupo de personas de forma equitativa.", 
      rhythmmad_description: "Aplicación móvil que permite buscar eventos programados en Madrid.", 
      getpet_description: "Aplicación móvil para facilitar la adopción de animales", 
      all_rights_reserved: "Todos los derechos reservados.", 
      demo_project: "Demo proyecto",
      play_demo_button: "Reproducir Demo", 
      description: "Descripción", 
      technologies: "Tecnologías Utilizadas",
      project_documentation: "Documentación del proyecto", 
      project_documentation_info: "En esta sección podrás descargar los documentos relevantes del proyecto, como la memoria técnica en formato PDF y las diapositivas de la presentación en formato PPTX. Haz clic en los enlaces para obtener los archivos correspondientes.", 
      download_documentation: "Descargar documentación (PDF)", 
      download_slides: "Descargar diapositivas (PDF)", 
      find_me_at: "Puedes encontrarme en:", 

      //HOMEMATE
      play_demo_info: "En esta sección puedes ver una demostración de cómo funciona la aplicación HomeMate. Haz clic en el botón 'Reproducir Demo' para ver una presentación en vivo del funcionamiento de la plataforma y sus principales características.", 
      description_app_homemate: `Aplicación web que facilita el proceso de encontrar alojamiento compartido y compañeros de piso en
      España. La creciente demanda de este tipo de soluciones, debido a los elevados precios
      del alquiler y la necesidad de compartir gastos, ha mostrado que los métodos tradicionales,
      como las redes sociales o los tablones de anuncios, no siempre son suficientes.<br></br>
      HomeMate se concibe como una alternativa innovadora, que centraliza las ofertas de habitaciones 
      y los perfiles de posibles compañeros de piso en una única plataforma. La aplicación
      se ha desarrollado utilizando tecnologías modernas como React para el frontend, NodeJS
      para el backend y Firebase como base de datos. Además, integra herramientas como Cloudinary 
      para la gestión de imágenes, OpenStreetMap y Leaflet para la visualización de mapas
      y la sincronización con Google Calendar para la gestión de visitas.<br></br> 
      El desarrollo del proyecto se ha basado en metodologías ágiles, organizando el trabajo en
      sprints y utilizando Trello para la gestión de tareas. Los resultados obtenidos incluyen funcionalidades
      clave como la publicación y gestión de anuncios de habitaciones, la consulta de
      perfiles de compañeros de piso, un sistema de chat para la comunicación entre usuarios, y
      la programación de visitas con integración en Google.`,

      //BIBLIOCONNECT
      play_demo_info_biblioconnect: "En esta sección puedes ver una demostración de cómo funciona la aplicación BiblioConnect. Haz clic en el botón 'Reproducir Demo' para ver una presentación en vivo del funcionamiento de la plataforma y sus principales características.",
      description_app_biblioconnect: `Aplicación web que mejora el acceso a los libros en formato físico disponibles en bibliotecas públicas de la Comunidad Valenciana. La plataforma permite la búsqueda y consulta de libros, además de ofrecer herramientas para gestionar las reservas de estos libros en tiempo real.<br><br>
      El proyecto se ha desarrollado utilizando tecnologías como React para el frontend, NodeJS para el backend y una base de datos NoSQL para gestionar la información de los libros y usuarios. Además, incluye un sistema de notificaciones que avisa a los usuarios cuando los libros reservados están disponibles para su recogida.<br><br>
      Se utilizó una metodología ágil para su desarrollo, implementando mejoras progresivas y realizando pruebas periódicas con los usuarios para garantizar una experiencia fluida y útil.`,  

      //SPORTPOWER
      play_demo_info_sportpower: "En esta sección puedes ver una demostración de cómo funciona la aplicación SportPower. Haz clic en el botón 'Reproducir Demo' para ver una presentación en vivo del funcionamiento de la plataforma y sus principales características.",
      description_app_sportpower: `Aplicación web desarrollada con Angular, diseñada para la compra online de artículos deportivos y suplementos. Los usuarios pueden autenticarse mediante correo electrónico y contraseña, gestionar pedidos, agregar productos a la lista de favoritos y realizar un seguimiento del inventario en tiempo real. Los administradores pueden actualizar y gestionar el catálogo de productos de manera eficiente. Además, se incluye una funcionalidad de foro donde los usuarios pueden interactuar y compartir opiniones sobre los productos.<br><br>
      La aplicación está diseñada para ofrecer una experiencia de usuario fluida y sencilla, con una interfaz moderna y herramientas interactivas para gestionar compras y productos de forma rápida y eficiente.`,
    
      // SPENDTOGETHER
      play_demo_info_spendtogether: "En esta sección puedes ver una demostración de cómo funciona la aplicación SpendTogether. Haz clic en el botón 'Reproducir Demo' para ver una presentación en vivo del funcionamiento de la plataforma y sus principales características.",
      description_app_spendtogether: `SpendTogether es una aplicación móvil nativa para Android diseñada para facilitar la gestión de gastos compartidos en diversas situaciones cotidianas, como viajes, cenas, regalos colectivos y eventos sociales. La aplicación permite a los usuarios registrar, categorizar y compartir los gastos de manera sencilla, automatizando el cálculo de las contribuciones individuales para garantizar una distribución justa de los costos. Además, proporciona un registro claro y detallado de los gastos y las contribuciones de cada usuario, asegurando visibilidad total sobre las transacciones. La solución permite evitar malentendidos y reducir la carga administrativa al gestionar los gastos de manera transparente y justa.`,

      // RHYTHMMAD
      play_demo_info_rhythmad: "En esta sección puedes ver una demostración de cómo funciona la aplicación RhythmMad. Haz clic en el botón 'Reproducir Demo' para ver una presentación en vivo del funcionamiento de la plataforma y sus principales características.",
      description_app_rhythmad: `RhythmMad es una aplicación móvil desarrollada con React Native que proporciona información actualizada sobre eventos en la ciudad de Madrid, como conciertos, exposiciones, conferencias y actividades culturales. El objetivo es facilitar la búsqueda y visualización de estos eventos, brindando una experiencia fluida e intuitiva. Además de las funcionalidades básicas de navegación y visualización, los usuarios pueden agregar nuevos eventos a la base de datos Firebase y acceder a detalles completos de cada uno.`, 

      // GETPET
      play_demo_info_getpet: "En esta sección puedes ver una demostración de cómo funciona la aplicación GetPet. Haz clic en el botón 'Reproducir Demo' para ver una presentación en vivo del funcionamiento de la plataforma y sus principales características.",
      description_app_getpet: `GetPet es una aplicación móvil desarrollada para la adopción de animales. Su objetivo es ayudar a las protectoras y adoptantes, pero sobre todo, ayudar a los verdaderos protagonistas, los animales. Las protectoras reciben solicitudes de adopción unificadas con detalles completos de los adoptantes, facilitando la selección. Además, se notifican rápidamente los animales en la calle. Los adoptantes tienen acceso a una lista unificada de animales en adopción de la zona, evitando tener que visitar múltiples sitios web de protectoras que no tienen opciones de búsqueda eficientes. Nuestra meta es proporcionar un hogar a todos los animales de compañía que lo necesiten.`,
  
    },
    en: {
      portfolio: "My portfolio", 
      page_title: "Web Developer Portfolio",
      job_title: "Software Engineer",
      see_projects: "View Projects",
      about_me: "About Me",
      about_me_text: `I am a Computer Engineer specialized in Software Engineering, and I recently completed a Master’s Degree in Web Applications and Services Development (Full Stack). I’m passionate about software development and everything that involves learning, improving, and building solutions that truly work and provide value.<br><br>
      During my internships, I worked at two different companies: one focused on the frontend of web applications, where I specialized in enhancing the interface and user experience, and another dedicated to developing a desktop project in Java, where I deepened my skills in designing and building standalone applications.<br><br>
      I am currently part of the Getronics team as a Software Engineer, where I handle incident resolution, improve existing systems, and develop new functionalities for various web applications.<br><br>
      Additionally, I have created several applications both in teams and independently throughout my university and master’s studies. <strong>I invite you to check out some of these projects in this portfolio!</strong>`,
      contact: "Contact",
      contact_me: "Want to get in touch? Fill out the form:", 
      name: "Name", 
      email: "Email", 
      message: "Message", 
      send: "Send", 
      get_to_know_me: "Get to know me!",
      my_skills: "My skills", 
      projects: "Projects", 
      web_applications: "Web applications", 
      mobile_applications: "Mobile applications", 
      homemate_description: "Web application to facilitate the search for rental rooms and roommates in Spain.",
      biblioconnect_description: "Web application to improve access to and management of physical books in public libraries in the Valencian Community.",
      sportpower_description: "Web application for a store that allows the purchase of sports equipment and supplements.",
      spendtogether_description: "Mobile application to manage shared expenses among a group of people in a fair way.",
      rhythmmad_description: "Mobile application that allows users to find scheduled events in Madrid.",
      getpet_description: "Mobile application to facilitate animal adoption.", 
      all_rights_reserved: "All rights reserved.", 
      demo_project: "Demo Project",
      play_demo_button: "Play Demo",
      description: "Description",
      technologies: "Technologies Used",
      project_documentation: "Project Documentation",
      project_documentation_info: "In this section, you can download the relevant project documents, such as the technical report in PDF format and the presentation slides in PPTX format. Click the links to download the corresponding files.",
      download_documentation: "Download documentation (PDF)",
      download_slides: "Download slides (PDF)", 
      find_me_at: "You can find me at:", 

      //HOMEMATE
      play_demo_info: "In this section, you can watch a demonstration of how the HomeMate application works. Click the 'Play Demo' button to see a live presentation of the platform's functionality and main features.",
      description_app_homemate: `Web application that facilitates the process of finding shared accommodation and roommates in Spain.
      The growing demand for this type of solution, due to high rental prices and the need to share expenses,
      has shown that traditional methods such as social networks or bulletin boards are not always sufficient.<br></br>
      HomeMate is conceived as an innovative alternative that centralizes room listings and potential roommate profiles 
      on a single platform. The application has been developed using modern technologies such as React for the frontend, 
      NodeJS for the backend, and Firebase as the database. It also integrates tools like Cloudinary for image management, 
      OpenStreetMap and Leaflet for map visualization, and synchronization with Google Calendar for visit scheduling.<br></br>
      The project development was based on agile methodologies, organizing the work in sprints and using Trello for task management. 
      The results include key features such as posting and managing room ads, browsing roommate profiles, a chat system for user communication, 
      and visit scheduling with Google integration.`,

      // BIBLIOCONNECT
      play_demo_info_biblioconnect: "In this section, you can watch a demonstration of how the BiblioConnect application works. Click the 'Play Demo' button to see a live presentation of the platform's functionality and main features.",
      description_app_biblioconnect: `Web application that improves access to and management of physical books available in public libraries in the Valencian Community. The platform allows the search and browsing of books, as well as providing tools for managing book reservations in real-time.<br><br>
      The project has been developed using technologies such as React for the frontend, NodeJS for the backend, and a NoSQL database for managing book and user information. It also includes a notification system that alerts users when the reserved books are available for pickup.<br><br>
      An agile methodology was used for its development, implementing progressive improvements and conducting periodic user tests to ensure a smooth and useful experience.`,

      //SPORTPOWER
      play_demo_info_sportpower: "In this section, you can watch a demonstration of how the SportPower application works. Click the 'Play Demo' button to see a live presentation of the platform's functionality and main features.",
      description_app_sportpower: `Web application developed with Angular, designed for online purchase of sports equipment and supplements. Users can log in via email and password, manage orders, add products to a favorites list, and track inventory in real time. Administrators can update and manage the product catalog efficiently. Additionally, a forum feature allows users to interact and share opinions on products.<br><br>
      The application is designed to offer a smooth and simple user experience, with a modern interface and interactive tools for managing purchases and products quickly and efficiently.`,

      // SPENDTOGETHER
      play_demo_info_spendtogether: "In this section, you can watch a demonstration of how the SpendTogether app works. Click the 'Play Demo' button to see a live presentation of the platform's functionality and main features.",
      description_app_spendtogether: `SpendTogether is a native Android mobile app designed to facilitate the management of shared expenses in various everyday situations, such as trips, dinners, group gifts, and social events. The app allows users to record, categorize, and share expenses easily, automating the calculation of individual contributions to ensure a fair distribution of costs. Additionally, it provides a clear and detailed record of expenses and contributions from each user, ensuring full visibility of transactions. This solution helps avoid misunderstandings and reduces administrative overhead by managing expenses transparently and fairly.`,

      // RHYTHMMAD
      play_demo_info_rhythmad: "In this section, you can watch a demonstration of how the RhythmMad app works. Click the 'Play Demo' button to see a live presentation of the platform's functionality and main features.",
      description_app_rhythmad: `RhythmMad is a mobile app developed with React Native that provides up-to-date information on events in Madrid, such as concerts, exhibitions, conferences, and cultural activities. The goal is to make it easy to search and view these events, providing a smooth and intuitive experience. In addition to basic navigation and viewing features, users can add new events to the Firebase database and access detailed information for each event.`,

      // GETPET
      play_demo_info_getpet: "In this section, you can watch a demonstration of how the GetPet app works. Click the 'Play Demo' button to see a live presentation of the platform's functionality and main features.",
      description_app_getpet: `GetPet is a mobile app developed for pet adoption. Its goal is to help shelters and adopters, but most importantly, to help the real protagonists, the animals. Shelters receive adoption requests in a unified manner, along with detailed information about the adopters, making the process faster and more efficient. They also receive quick notifications about animals or litters found on the street with precise data to act accordingly. Adopters have access to a unified list of animals available for adoption in their area, avoiding the need to navigate multiple shelter websites that often lack comprehensive search options. Our goal is to ensure that every pet finds the loving home they deserve.`,
       
    }
  };
  
  function translatePage(lang) {
    // Traduce texto plano (textContent)
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  
    // Traduce contenido HTML (innerHTML)
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
  }