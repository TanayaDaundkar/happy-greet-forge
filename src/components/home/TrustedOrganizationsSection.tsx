
// import { motion } from "framer-motion";

// const organizations = [
//   {
//     name: "Microsoft",
//     logo: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg",
//   },
//   {
//     name: "Google",
//     logo: "https://cdn.worldvectorlogo.com/logos/google-2015.svg",
//   },
//   {
//     name: "Amazon",
//     logo: "https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg",
//   },
//   {
//     name: "IBM",
//     logo: "https://cdn.worldvectorlogo.com/logos/ibm.svg",
//   },
//   {
//     name: "Apple",
//     logo: "https://cdn.worldvectorlogo.com/logos/apple-13.svg",
//   },
//   {
//     name: "Meta",
//     logo: "https://cdn.worldvectorlogo.com/logos/meta-1.svg",
//   }
// ];

// export function TrustedOrganizationsSection() {
//   return (
//     <section className="py-12 md:py-16 bg-muted/30">
//       <div className="container mx-auto px-4 md:px-6">
//         <motion.div 
//           className="text-center mb-10"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-xl md:text-2xl font-medium text-foreground/80 mb-2">
//             Trusted By Leading Organizations
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Our graduates are hired by top companies worldwide, demonstrating the quality and relevance of our educational approach.
//           </p>
//         </motion.div>
        
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
//           {organizations.map((org, index) => (
//             <motion.div
//               key={org.name}
//               className="w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 0.7, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <img 
//                 src={org.logo} 
//                 alt={`${org.name} logo`} 
//                 className="max-w-full max-h-full object-contain" 
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
