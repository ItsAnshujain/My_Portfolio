import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
  } from 'react-icons/fa';
  import { FiFileText , FiExternalLink } from 'react-icons/fi';
  
  import Work1 from './assets/project-1.png';
  import Work2 from './assets/project-2.png';
  import Work3 from './assets/project-3.png';
  import Work4 from './assets/project-4.png';
  import Work5 from './assets/project-5.png';
  import Work6 from './assets/project-6.png';
  
  export const links = [
    {
      id: 1,
      name: 'Home',
      icon: <FaHome className='nav_icon' />,
      path: '/',
    },
  
    {
      id: 2,
      name: 'About',
      icon: <FaUser className='nav_icon' />,
      path: '/about',
    },
  
    {
      id: 3,
      name: 'Portfolio',
      icon: <FaFolderOpen className='nav_icon' />,
      path: '/portfolio',
    },
  
    {
      id: 4,
      name: 'Contact',
      icon: <FaEnvelopeOpen className='nav_icon' />,
      path: '/contact',
    },
  ];
  
  export const personalInfo = [
    {
      id: 1,
      title: 'First Name : ',
      description: 'Anshu',
    },
  
    {
      id: 2,
      title: 'Last Name : ',
      description: 'Jain',
    },
  
    {
      id: 3,
      title: 'Age : ',
      description: '20 Years',
    },
  
    {
      id: 4,
      title: 'Nationality : ',
      description: 'Indian',
    },
  
    {
      id: 5,
      title: 'Freelance : ',
      description: 'Available',
    },
  
    {
      id: 6,
      title: 'Address : ',
      description: 'Ajmer, Rajasthan',
    },
  
    {
      id: 7,
      title: 'Phone : ',
      description: '+6377130289',
    },
  
    {
      id: 8,
      title: 'Email : ',
      description: 'anshujain8844@gmail.com',
    },
  
    {
      id: 9,
      title: 'Langages : ',
      description: 'English, Hindi',
    },
  ];
  
  export const stats = [
    {
      id: 1,
      no: '2+',
      title: 'Years of Personal Experience',
    },
  
    {
      id: 2,
      no: '15+',
      title: 'Completed Projects',
    },
  
  ];
  
  export const resume = [
    {
      id: 1,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2023',
      title: 'Industrial training in <span> Advance Java </span>',
      desc: 'During my training, I got the knowledge of JSP, Servlets, Hibernate Framework, Spring Boot framework, HTML, CSS, Javascript, Jquery, Ajax, Bootstrap With MySQL.',
    },
  
    {
      id: 2,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2023',
      title: 'Bharat techXperience <span> Hackathon </span>',
      desc: 'I participated in the Bharat TechXperience hackathon with my team members. The hackathon experience was excellent, and our team developed a project focused on unused medicine donation.',
    },
  
    {
      id: 3,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2018-2020',
      title: 'Girls Senior Secondary School <span>Kishangarh</span>',
      desc: 'During my high school education, I developed a strong interest in subjects such as Math, Physics and Chemistry and I got 92% in 12th Board.',
    },
  
    {
      id: 4,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2021-2025',
      title: 'Bachlor Degree <span> Punjab Technical University </span>',
      desc: 'I am pursuing my Bachelor’s degree in Computer Science. During my studies, I gained a strong foundation in computer science concepts such as algorithms, data structures, and computer organization.',
    }
  ];
  
  export const skills = [
    {
      id: 1,
      title: 'Html',
      percentage: '95',
    },
  
    {
      id: 2,
      title: 'Javascript',
      percentage: '89',
    },
  
    {
      id: 3,
      title: 'Css',
      percentage: '90',
    },
  
    {
      id: 4,
      title: 'Jquery',
      percentage: '80',
    },
  
    {
      id: 5,
      title: 'React',
      percentage: '70',
    },
  
    {
      id: 6,
      title: 'Jsp',
      percentage: '90',
    },
  
    {
      id: 7,
      title: 'Spring Boot',
      percentage: '70',
    },
  
    {
      id: 8,
      title: 'Advance java',
      percentage: '60',
    },
  ];
  
  export const portfolio = [
    {
      id: 1,
      img: Work1,
      title: 'Unused medicine donation website',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Website',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'HTML, CSS, Jsp, mySQL',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://github.com/ItsAnshujain/Unused-medicine-donation-website',
        },
      ],
    },
    {
      id: 2,
      img: Work2,
      title: 'Travel management system website',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Website',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'HTML, CSS, Jsp, ajax, mySQL',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://github.com/ItsAnshujain/Travelling_management_system',
        },
      ],
    },
    {
      id: 3,
      img: Work3,
      title: 'Smart Contact Manager Website',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Website',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Spring Boot, html, css and javascript',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://github.com/ItsAnshujain/Smart-contact-manager-website',
        },
      ],
    },
    {
      id: 4,
      img: Work4,
      title: 'Portfolio Website',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Website',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React JS',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://github.com/ItsAnshujain/My_Portfolio',
        },
      ],
    },
  
    {
      id: 5,
      img: Work5,
      title: 'Google clone',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Clone',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React JS',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://github.com/ItsAnshujain/Google_search_app',
        },
      ],
    },
  
    {
      id: 6,
      img: Work6,
      title: 'Banking website',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Website',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'HTML, Tailwind CSS, Javascript',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://github.com/ItsAnshujain/Banking_website',
        },
      ],
    },
    
  ];
  