// import Image from "next/image";

// type StepProps = {
//   number: number;
//   title: string;
//   description: string;
//   icon: React.ReactNode;
// }

// const Step = ({ number, title, description, icon }: StepProps) => {
//   return (
//     <div className="flex flex-col items-center">
//       <div className="relative mb-4">
//         <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
//           {icon}
//         </div>
//         <div className="absolute -top-1 -right-1 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">
//           {number}
//         </div>
//       </div>
//       <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
//       <p className="text-rewind-gray text-center max-w-xs">{description}</p>
//     </div>
//   );
// };

// const Installation = () => {
//   return (
//     <section className="px-4 py-16">
//       <div className="max-w-6xl mx-auto">
//         {/* Installation Section */}
//         <div className="text-center mb-24">
//           <div className="inline-flex items-center bg-orange-100 text-orange-600 rounded-full px-4 py-2 mb-6">
//             <p className="text-sm font-medium">INSTALL IN MINUTES</p>
//           </div>
          
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Easy on the resources,<br />deploy it in 5 minutes
//           </h2>
          
//           <p className="text-gray-600 max-w-2xl mx-auto mb-8">
//             No complex integrations or painful setup. Just add a snippet to your website 
//             or app and Percy is ready to help your customers.
//           </p>
          
//           <div className="flex justify-center mb-12">
//             <button className="bg-black text-white px-6 py-3 rounded-full font-medium">
//               Get started for free
//             </button>
//           </div>
          
//           <div className="bg-gray-100 rounded-xl p-6 inline-block shadow-sm">
//             <pre className="text-left text-sm text-gray-700 font-mono">
//               {'<script>\n  (function() {\n    const percy = document.createElement("script");\n    percy.src = "https://cdn.percyapp.com/widget.js";\n    document.head.appendChild(percy);\n  })();\n</script>'}
//             </pre>
//           </div>
//         </div>
        
//         {/* Customer Story Section */}
//         <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-white mb-20">
//           <div className="flex flex-col md:flex-row">
//             <div className="md:w-1/2 p-8">
//               <div className="mb-6">
//                 <img src="https://via.placeholder.com/80" alt="Happy customer" className="rounded-full" />
//               </div>
//               <p className="text-gray-700 mb-4">
//                 "Percy has been a game-changer for our product. Our users find answers instantly, and our support team focus on what matters most."
//               </p>
//               <p className="font-semibold">Alex Chen</p>
//               <p className="text-gray-500 text-sm">Head of Customer Support, CloudTech</p>
//             </div>
//             <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-4">
//               <div className="h-48 w-full bg-gray-200 rounded-lg"></div>
//             </div>
//           </div>
//         </div>
        
//         {/* Footer */}
//         <footer className="bg-purple-900 text-white rounded-xl p-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
//             <div>
//               <h3 className="text-xl font-bold mb-4 flex items-center">
//                 Percy
//               </h3>
//               <p className="text-purple-200 mb-4">
//                 Live, in-product AI for guidance & support
//               </p>
//               <p className="text-purple-300">
//                 hello@percyapp.com
//               </p>
//             </div>
            
//             <div>
//               <h4 className="font-semibold mb-4">Product</h4>
//               <ul className="space-y-2 text-purple-200">
//                 <li><a href="#" className="hover:text-white">Features</a></li>
//                 <li><a href="#" className="hover:text-white">Integrations</a></li>
//                 <li><a href="#" className="hover:text-white">Pricing</a></li>
//                 <li><a href="#" className="hover:text-white">Roadmap</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="font-semibold mb-4">Resources</h4>
//               <ul className="space-y-2 text-purple-200">
//                 <li><a href="#" className="hover:text-white">Documentation</a></li>
//                 <li><a href="#" className="hover:text-white">API Reference</a></li>
//                 <li><a href="#" className="hover:text-white">Guides</a></li>
//                 <li><a href="#" className="hover:text-white">Support</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="font-semibold mb-4">Company</h4>
//               <ul className="space-y-2 text-purple-200">
//                 <li><a href="#" className="hover:text-white">About</a></li>
//                 <li><a href="#" className="hover:text-white">Blog</a></li>
//                 <li><a href="#" className="hover:text-white">Careers</a></li>
//                 <li><a href="#" className="hover:text-white">Contact</a></li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="border-t border-purple-800 pt-8 flex flex-col md:flex-row justify-between items-center">
//             <div className="text-purple-300 text-sm mb-4 md:mb-0">
//               © 2023 Percy Inc. All rights reserved.
//             </div>
//             <div className="flex space-x-4">
//               <a href="#" className="text-purple-300 hover:text-white">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
//                 </svg>
//               </a>
//               <a href="#" className="text-purple-300 hover:text-white">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
//                 </svg>
//               </a>
//               <a href="#" className="text-purple-300 hover:text-white">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </section>
//   );
// };

// export default Installation; 