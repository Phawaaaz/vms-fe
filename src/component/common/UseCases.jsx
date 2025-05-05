import React from "react";

const UseCases = () => {
   const useCases = [
     {
       id: 1,
       title: "Education",
       subtitle: "Safer campus access",
       description: "Control access to campus facilities while maintaining detailed visitor logs for safety and security compliance.",
       icon: (
         <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path d="M12 14l9-5-9-5-9 5 9 5z" />
           <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
         </svg>
       )
     },
     {
       id: 2,
       title: "Corporate",
       subtitle: "Professional guest flow",
       description: "Streamline visitor management with automatic notifications to hosts when their guests arrive.",
       icon: (
         <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
         </svg>
       )
     },
     {
       id: 3,
       title: "Healthcare",
       subtitle: "Contactless clinic entry",
       description: "Reduce wait times and infection risk with touchless check-ins and automated health screening.",
       icon: (
         <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
         </svg>
       )
     }
   ]
 
   return (
     <section id="use-cases" className="py-20 bg-white">
       <div className="container mx-auto px-4 md:px-6 lg:px-8">
         <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
             Trusted Across Industries
           </h2>
           <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
           <p className="text-xl text-gray-700 max-w-2xl mx-auto">
             See how different sectors are leveraging our visitor management system to enhance security and efficiency.
           </p>
         </div>
 
         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
           {useCases.map(useCase => (
             <div 
               key={useCase.id}
               className="bg-gray-50 rounded-2xl shadow-md overflow-hidden transition-standard group hover:shadow-lg"
             >
               <div className="p-6">
                 <div className="mb-6 flex justify-center">
                   {useCase.icon}
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                 <p className="text-blue-400 font-medium mb-4">{useCase.subtitle}</p>
                 <p className="text-gray-700">{useCase.description}</p>
               </div>
               <div className="bg-gray-100 p-4 flex justify-end">
                 <a 
                   href="#learn-more" 
                   className="text-primary-600 font-medium group-hover:text-primary-700 transition-standard flex items-center"
                 >
                   Learn more
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-standard" viewBox="0 0 20 20" fill="currentColor">
                     <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                   </svg>
                 </a>
               </div>
             </div>
           ))}
         </div>
       </div>
     </section>
   )
 }
 
 export default UseCases