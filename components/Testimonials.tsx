// import Image from "next/image";

// type TestimonialProps = {
//   quote: string;
//   name: string;
//   title: string;
// }

// const TestimonialCard = ({ quote, name, title }: TestimonialProps) => {
//   return (
//     <div className="bg-white rounded-xl p-8 shadow-sm flex flex-col h-full">
//       <div className="text-3xl mb-2">"</div>
//       <p className="text-lg text-rewind-dark mb-6 flex-grow">{quote}</p>
//       <div className="flex items-center">
//         <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
//         <div>
//           <p className="font-semibold text-rewind-dark">{name}</p>
//           <p className="text-sm text-rewind-gray">{title}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Testimonials = () => {
//   return (
//     <section className="py-16 px-4 bg-gray-50">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//           {/* Integration logos */}
//           <div className="flex justify-center space-x-2 items-center">
//             <button className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm font-medium">Intercom</button>
//             <span className="text-gray-400">+</span>
//             <button className="bg-green-400 text-white px-3 py-1 rounded-lg text-sm font-medium">Zendesk</button>
//             <span className="text-gray-400">+</span>
//             <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm font-medium">Discord</button>
//           </div>
          
//           <div className="col-span-2 md:col-span-1 text-center md:text-left">
//             <h3 className="text-2xl font-bold mb-2">Show them what's new and guide them through it</h3>
//           </div>
          
//           <div className="md:col-span-1 text-gray-600">
//             <p>Help your users discover new features and teach them how to use your product effectively.</p>
//           </div>
//         </div>
        
//         {/* Testimonials grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//           {/* Testimonial 1 */}
//           <div className="bg-white rounded-xl p-8 shadow-sm">
//             <div className="flex items-start mb-6">
//               <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
//               <div>
//                 <h4 className="font-semibold">Jane Smith</h4>
//                 <p className="text-gray-500 text-sm">Product Manager at Acme Inc.</p>
//               </div>
//             </div>
//             <p className="text-gray-700 mb-4">
//               "Percy has transformed how we support our customers. Our response times are down 70% and customer satisfaction is at an all-time high. The AI understands our product so well."
//             </p>
//             <div className="flex items-center">
//               <div className="flex">
//                 {[...Array(5)].map((_, i) => (
//                   <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                   </svg>
//                 ))}
//               </div>
//             </div>
//           </div>
          
//           {/* Testimonial 2 */}
//           <div className="bg-white rounded-xl p-8 shadow-sm">
//             <div className="flex items-start mb-6">
//               <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
//               <div>
//                 <h4 className="font-semibold">Mark Johnson</h4>
//                 <p className="text-gray-500 text-sm">CTO at TechStart</p>
//               </div>
//             </div>
//             <p className="text-gray-700 mb-4">
//               "Our support team used to be overwhelmed with repetitive questions. Now Percy handles over 80% of all inquiries automatically, allowing our team to focus on complex issues that require human touch."
//             </p>
//             <div className="flex items-center">
//               <div className="flex">
//                 {[...Array(5)].map((_, i) => (
//                   <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                   </svg>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Additional Feature Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           <div className="bg-white rounded-xl overflow-hidden shadow-sm">
//             <div className="px-8 py-6">
//               <h3 className="text-xl font-bold mb-2">A search bar which understands your users</h3>
//               <p className="text-gray-600 mb-4">Our smart search can understand natural language and context, delivering the most relevant results.</p>
//             </div>
//             <div className="h-48 bg-gray-100 flex items-center justify-center">
//               <div className="w-full max-w-md mx-auto px-8">
//                 <div className="relative">
//                   <input 
//                     type="text" 
//                     placeholder="Search for help..." 
//                     className="w-full py-3 px-4 bg-white border border-gray-300 rounded-lg focus:outline-none"
//                   />
//                   <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="flex flex-col justify-center">
//             <div className="mb-10">
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
//                 <div>
//                   <p className="text-gray-800 font-medium">
//                     "Our support ticket volume dropped by 60% after implementing Percy's smart search."
//                   </p>
//                   <p className="text-gray-500 text-sm mt-2">Product Manager, Enterprise SaaS</p>
//                 </div>
//               </div>
//             </div>
            
//             <div>
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
//                 <div>
//                   <p className="text-gray-800 font-medium">
//                     "The implementation was seamless and our users love how quickly they can find answers."
//                   </p>
//                   <p className="text-gray-500 text-sm mt-2">CTO, B2B Software Company</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials; 