import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const blogPosts = [
  {
    id: 1,
    title: "Precision CNC Machining: The Future of Manufacturing",
    excerpt: "Explore how CNC technology is revolutionizing the manufacturing industry with unprecedented accuracy and efficiency.",
    content: "Computer Numerical Control (CNC) machining has moved from being a luxury to an absolute necessity in modern manufacturing. Unlike traditional manual machining, where the skill of the operator's hands determined the final result, CNC machining relies on precise digital instructions. This shift has allowed companies like Shri Laxmi Enterprise to produce components with a level of repeatability and accuracy that was previously unimaginable.\n\nAt the heart of our facility, machines like the Daewoo Puma 300 C translate complex CAD designs into physical reality. This process involves sophisticated software that controls every movement of the cutting tools with micron-level precision. Whether we are working on a 104mm spindle bore or fine-tuning a valve liner, the digital brain of the machine ensures that the first part produced is identical to the thousandth. This consistency is vital for industries like automotive and oil & gas, where a deviation of even a few microns can lead to system failure.\n\nFurthermore, CNC technology has significantly reduced production lead times. By automating complex tool paths and multi-axis movements, we can complete in minutes what used to take hours of manual labor. This efficiency doesn't just lower costs; it allows for rapid prototyping and faster response to market demands. As we look to the future, the integration of AI and real-time monitoring will only further enhance the capabilities of our CNC fleet, keeping SLE at the forefront of precision engineering.",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbmMlMjBtYWNoaW5pbmclMjBmYWN0b3J5fGVufDF8fHx8MTc3NzM3NjE5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "2024-04-15",
    tags: ["CNC", "Manufacturing", "Precision"],
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Pillars of Quality: Beyond ISO Certification",
    excerpt: "Understanding the importance of rigorous quality control in manufacturing high-performance industrial parts.",
    content: "Quality assurance in manufacturing is often misunderstood as a simple final check at the end of a production line. However, at Shri Laxmi Enterprise, we view quality as a continuous thread that runs through the entire manufacturing lifecycle. It starts with the meticulous selection of raw materials. We only source metals that meet strict chemical and physical specifications, ensuring that the foundation of every 'Auto Part' or '1502 Cross' we produce is fundamentally sound.\n\nDuring the production phase, our operators conduct frequent in-process inspections (PQC). This proactive approach allows us to detect and correct any deviations before they become defects. We utilize a range of high-precision measuring instruments—from digital micrometers to advanced coordinate measuring machines (CMM)—to verify that every dimension stays within our tight tolerances, often as low as ±0.005mm. This level of scrutiny is what allows us to confidently serve critical sectors like Defense and Aerospace.\n\nOur commitment to quality is further validated by our ISO 9001:2015 certification, which provides a framework for continuous improvement. But for us, quality goes beyond certificates; it's about the safety and reliability of the end product. When a valve liner or a forged shaft leaves our facility, it carries the SLE promise of 'Zero Defect' manufacturing, providing our clients with the peace of mind they need for their high-stress industrial applications.",
    image: "https://images.unsplash.com/photo-1772351721310-0aa6b2d5ee49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwY29udHJvbCUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzc3Mzc1MjU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "2024-04-10",
    tags: ["Quality", "Inspection", "Standards"],
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Sustainability: The Green Future of Machining",
    excerpt: "How we're implementing eco-friendly practices in our production processes.",
    content: "In the past, heavy manufacturing was rarely associated with environmental sustainability. However, the modern industrial landscape is changing, and Shri Laxmi Enterprise is proud to lead this transition. Sustainable manufacturing is no longer just a 'nice to have'; it is a core business strategy that enhances efficiency, reduces waste, and protects our planet for future generations.\n\nOne of our primary focuses is the closed-loop recycling of industrial fluids and metal chips. During the CNC turning process, large volumes of coolant are used to prevent tool wear and ensure surface finish. By implementing advanced filtration systems, we can recycle and reuse these coolants multiple times, significantly reducing our chemical footprint. Similarly, all metal chips and scraps generated during machining are collected, compacted, and sent back for smelting, ensuring that almost 100% of our raw material waste is recovered.\n\nEnergy efficiency is another major pillar of our green initiative. Our modern CNC machines are equipped with regenerative braking and power-saving modes that reduce electricity consumption during idle times. By optimizing our shop floor layout and streamlining production workflows using Lean Manufacturing principles, we minimize unnecessary movements and energy expenditure. Sustainability at SLE isn't just about optics; it's about building a leaner, cleaner, and more resilient manufacturing powerhouse.",
    image: "https://images.unsplash.com/photo-1545262722-9e0d80a0bc01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGZhY3RvcnklMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc3NzM3NjE5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "2024-04-05",
    tags: ["Sustainability", "Environment", "Efficiency"],
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Bridging Craftsmanship and Tech in Fabrication",
    excerpt: "Exploring cutting-edge techniques in metal working and fabrication.",
    content: "Metal fabrication is often seen as a traditional craft, but the integration of modern technology has turned it into a high-tech science. At Shri Laxmi Enterprise, we bridge the gap between traditional engineering wisdom and cutting-edge digital tools. This synergy allows us to tackle complex fabrication projects that were previously considered impossible or too costly for mid-scale production.\n\nThe key to our innovation lies in our integrated CAD/CAM workflow. Before a single piece of metal is cut, our engineers create detailed 3D models of the component. We use simulation software to test tool paths and identify potential collision points or material stress areas. This virtual testing phase drastically reduces errors and material waste, ensuring that when the real 'Takisawa CNC' starts spinning, the process is already optimized for the best possible outcome.\n\nBeyond just machining, our fabrication expertise includes precision assembly and finish work. We understand that a component like a 'Valve Liner' or a 'Sleeve' is only as good as its final fit. By combining advanced CNC techniques with skilled manual finishing where necessary, we produce parts that are not only dimensionally perfect but also aesthetically superior. This commitment to innovation ensures that SLE remains the preferred partner for companies looking for sophisticated engineering solutions in a rapidly evolving market.",
    image: "https://images.unsplash.com/photo-1711418235199-171c8ecb9d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZhYnJpY2F0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzczNzYxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "2024-03-28",
    tags: ["Fabrication", "Innovation", "Technology"],
    readTime: "7 min read"
  }
];

export function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-brand-100 to-brand-400 bg-clip-text text-transparent mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-brand-200 max-w-3xl mx-auto">
            Insights, innovations, and industry updates from Shri Laxmi Enterprise
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-brand-800/50 border-brand-700 hover:bg-brand-800/70 transition-all duration-300 h-full">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 to-transparent" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs bg-brand-700 text-brand-100 border-none">
                      {post.readTime}
                    </Badge>
                    <span className="text-sm text-brand-400">{post.date}</span>
                  </div>
                  <CardTitle className="text-brand-100 group-hover:text-brand-400 transition-colors leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-300 text-sm mb-6 whitespace-pre-wrap leading-relaxed">
                    {post.content}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[10px] uppercase tracking-wider border-brand-700 text-brand-400">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}