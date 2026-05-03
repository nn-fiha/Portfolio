import React from 'react'

const projects = [
  {
    title: 'OBE Based Result Management System',
    image: 'OBE.png',
    github: 'https://github.com/whomping-willow/OBE',
  },
  {
    title: 'Konta Niben?',
    image: 'kontaNiben.png',
    github: 'https://github.com/SQA-PROJECT-1/Konta-Niben',
  },
  {
    title: 'Cyber Bullying Detection using Machine Learning',
    image: 'cyber.jpg',
    github: 'https://github.com/SM2142/Cyber-Bullying-Detection-on-Scocial-Media-Plaform-Using-Machine-Learning',
  },
  {
    title: 'BoiPoka',
    image: 'boipoka.png',
    demo: 'https://boi-poka.vercel.app/',
  },
  {
    title: 'Cineflix',
    image: 'cineflix1.png',
    demo: 'https://cineflix-fiha.netlify.app/',
  },
  {
    title: 'JU CSE Routinery',
    image: 'routinery.png',
    github: 'https://github.com/nn-fiha/JU-CSE-ROUTINARY',
  },
]

const Projects = () => {
  return (
    <section id='projects' className='p-8 mb-10 md:mb-20'>
      <h2 className='text-2xl font-bold text-center dark:text-white'>Projects</h2>
      <span className='block text-xs text-gray-500 dark:text-slate-400 text-center mb-12'>My existing projects</span>

      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map((p) => (
          <div
            key={p.title}
            className='group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col'
          >
            <div className='relative overflow-hidden bg-slate-50 dark:bg-slate-800 h-44'>
              <img
                src={process.env.PUBLIC_URL + '/images/' + p.image}
                alt={p.title}
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
              />
            </div>

            <div className='p-5 flex flex-col flex-1'>
              <h3 className='text-base font-semibold text-left text-slate-800 dark:text-white leading-snug'>
                {p.title}
              </h3>

              <div className='flex gap-2 mt-auto pt-4'>
                {p.github && (
                  <a
                    href={p.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-1.5 border border-slate-700 text-slate-700 dark:border-slate-300 dark:text-slate-300 px-3 py-1.5 text-xs font-medium rounded-md hover:bg-slate-700 hover:text-white dark:hover:bg-slate-200 dark:hover:text-slate-900 transition-colors'
                  >
                    <i className='bx bxl-github text-base'></i> Code
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-1.5 border border-blue-700 text-blue-700 dark:border-blue-400 dark:text-blue-400 px-3 py-1.5 text-xs font-medium rounded-md hover:bg-blue-700 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors'
                  >
                    <i className='bx bx-link-external text-base'></i> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
