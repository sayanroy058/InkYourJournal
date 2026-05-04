import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, GraduationCap, BookOpen, Award, Users, ArrowRight } from "lucide-react";
import figImg from "@/assets/fig.jpeg";

const editorInChief = {
  name: "Dr. Sarah Mitchell, PhD",
  role: "Editor-in-Chief",
  department: "Department of Biological Sciences",
  institution: "Global Research Institute",
  achievement: "Excellence in Innovation Research, 2020-2025",
  image: figImg,
  bio: "Dr. Sarah Mitchell brings over 20 years of experience in molecular biology and pharmaceutical research. She has published more than 150 peer-reviewed articles and has been instrumental in advancing drug discovery methodologies. Under her editorial leadership, the journal has grown to become a leading publication in biological sciences.",
  specializations: ["Molecular Biology", "Drug Discovery", "Pharmaceutical Research", "Biomedical Sciences"],
};

const assistantEditors = [
  {
    name: "Dr. Lisa Anderson, PhD",
    role: "Assistant Editor",
    department: "Department of Immunology",
    institution: "Harvard Medical School",
    image: figImg,
    bio: "Dr. Anderson specializes in immunotherapy and vaccine development. She has co-authored over 80 peer-reviewed publications and serves as an expert in emerging infectious diseases.",
    specializations: ["Immunology", "Vaccine Development", "Immunotherapy"],
  },
  {
    name: "Prof. David Kumar, PhD",
    role: "Assistant Editor",
    department: "Department of Microbiology",
    institution: "University of Singapore",
    image: figImg,
    bio: "Prof. Kumar is a leading expert in microbial genomics and bioinformatics. His work has contributed to understanding pathogenic mechanisms in various microorganisms.",
    specializations: ["Microbiology", "Genomics", "Bioinformatics"],
  },
];

const reviewers = [
  {
    name: "Dr. Elena Rodriguez, PhD",
    role: "Senior Reviewer",
    department: "Department of Oncology",
    institution: "Memorial Sloan Kettering Institute",
    image: figImg,
    bio: "Dr. Rodriguez is an expert in cancer biology and therapeutic research. She has published extensively on tumor immunology and precision medicine approaches.",
    specializations: ["Oncology", "Cancer Biology", "Precision Medicine"],
  },
  {
    name: "Prof. Yuki Tanaka, PhD",
    role: "Senior Reviewer",
    department: "Department of Genetics",
    institution: "University of Tokyo",
    image: figImg,
    bio: "Prof. Tanaka specializes in epigenetics and gene regulation. Her research has illuminated the role of chromatin remodeling in disease development.",
    specializations: ["Genetics", "Epigenetics", "Gene Regulation"],
  },
  {
    name: "Dr. Marcus Olsen, PhD",
    role: "Peer Reviewer",
    department: "Department of Physiology",
    institution: "Karolinska Institute",
    image: figImg,
    bio: "Dr. Olsen focuses on cardiovascular physiology and molecular mechanisms of heart disease. His contributions have advanced understanding of cardiac dysfunction.",
    specializations: ["Physiology", "Cardiovascular Biology", "Molecular Medicine"],
  },
];

const editorialMembers = [
  {
    name: "Prof. James Chen, PhD",
    role: "Associate Editor",
    department: "Department of Neuroscience",
    institution: "MIT Department of Biology",
    image: figImg,
    bio: "Prof. Chen is a renowned neuroscientist with expertise in neural plasticity and cognitive neuroscience. He has contributed significantly to understanding brain mechanisms underlying learning and memory.",
    specializations: ["Neuroscience", "Cognitive Biology", "Neural Plasticity"],
  },
  {
    name: "Dr. Maria Gonzalez, PhD",
    role: "Associate Editor",
    department: "Department of Biotechnology",
    institution: "Stanford University",
    image: figImg,
    bio: "Dr. Gonzalez specializes in genetic engineering and CRISPR technologies. Her groundbreaking work in gene therapy has opened new avenues for treating genetic disorders.",
    specializations: ["Biotechnology", "Genetic Engineering", "Gene Therapy"],
  },
  {
    name: "Dr. Robert Taylor, PhD",
    role: "Section Editor – Biochemistry",
    department: "Department of Biochemistry",
    institution: "Oxford University",
    image: figImg,
    bio: "Dr. Taylor's research focuses on protein structure and enzyme kinetics. He has been pivotal in developing new biochemical assays used in diagnostics worldwide.",
    specializations: ["Biochemistry", "Protein Engineering", "Enzyme Kinetics"],
  },
  {
    name: "Prof. Aisha Patel, PhD",
    role: "Section Editor – Pharmacy",
    department: "School of Pharmacy",
    institution: "University College London",
    image: figImg,
    bio: "Prof. Patel is an expert in pharmacology and drug delivery systems. Her research has led to innovations in targeted drug delivery for cancer treatment.",
    specializations: ["Pharmacology", "Drug Delivery", "Cancer Therapeutics"],
  },
  {
    name: "Dr. Michael Okafor, PhD",
    role: "Section Editor – Environmental Biology",
    department: "Department of Environmental Sciences",
    institution: "University of Melbourne",
    image: figImg,
    bio: "Dr. Okafor researches the impact of climate change on biodiversity and ecosystem health. He advocates for sustainable practices through evidence-based scientific research.",
    specializations: ["Environmental Biology", "Ecology", "Conservation Science"],
  },
];

const EditorialBoard = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(220,55%,10%)] via-[hsl(220,48%,13%)] to-[hsl(168,55%,14%)] pt-32 pb-20 px-4">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="absolute right-0 top-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto relative z-10 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <Users size={12} /> Our Team
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
              Editorial{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Board
              </span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Meet the distinguished scholars and researchers who ensure the highest standards of research integrity and academic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Editor-in-Chief */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="text-xs font-semibold tracking-wider uppercase text-primary mb-3 block">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Editor-in-Chief
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-100 card-shadow overflow-hidden"
          >
            <div className="grid md:grid-cols-3 gap-0">
              <div className="md:col-span-1 bg-gradient-to-br from-slate-800 to-[hsl(168,45%,12%)] p-8 flex flex-col items-center justify-center text-center">
                <img
                  src={editorInChief.image}
                  alt={editorInChief.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-emerald-500/30 mb-4"
                />
                <h3 className="text-lg font-bold text-white">{editorInChief.name}</h3>
                <p className="text-sm font-medium text-emerald-400 mt-1">{editorInChief.role}</p>
                <p className="text-xs text-white/50 mt-1">{editorInChief.department}</p>
                <p className="text-xs text-white/50">{editorInChief.institution}</p>
                <div className="flex items-center gap-1 mt-3 text-xs text-amber-400">
                  <Award size={14} />
                  <span>{editorInChief.achievement}</span>
                </div>
              </div>
              <div className="md:col-span-2 p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">{editorInChief.bio}</p>
                <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                  <GraduationCap size={16} className="text-primary" /> Areas of Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {editorInChief.specializations.map((spec) => (
                    <span key={spec} className="bg-secondary text-secondary-foreground text-xs px-3 py-1.5 rounded-full font-medium">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Assistant Editors */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="text-xs font-semibold tracking-wider uppercase text-primary mb-3 block">
              Editorial Team
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Assistant Editors
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {assistantEditors.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card rounded-xl border border-border card-shadow hover:elevated-shadow transition-shadow overflow-hidden"
              >
                <div className="p-6 text-center border-b border-border">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-secondary"
                  />
                  <h3 className="text-base font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm font-medium text-primary mt-1">{member.role}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{member.institution}</p>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.specializations.map((spec) => (
                      <span key={spec} className="bg-secondary text-secondary-foreground text-[11px] px-2.5 py-1 rounded-full font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviewers */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="text-xs font-semibold tracking-wider uppercase text-primary mb-3 block">
              Review Experts
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Reviewers
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviewers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card rounded-xl border border-border card-shadow hover:elevated-shadow transition-shadow overflow-hidden"
              >
                <div className="p-6 text-center border-b border-border">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-secondary"
                  />
                  <h3 className="text-base font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm font-medium text-primary mt-1">{member.role}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{member.institution}</p>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.specializations.map((spec) => (
                      <span key={spec} className="bg-secondary text-secondary-foreground text-[11px] px-2.5 py-1 rounded-full font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Members */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="text-xs font-semibold tracking-wider uppercase text-primary mb-3 block">
              Our Experts
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Editorial Board Members
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {editorialMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card rounded-xl border border-border card-shadow hover:elevated-shadow transition-shadow overflow-hidden"
              >
                <div className="p-6 text-center border-b border-border">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-secondary"
                  />
                  <h3 className="text-base font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm font-medium text-primary mt-1">{member.role}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{member.institution}</p>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.specializations.map((spec) => (
                      <span key={spec} className="bg-secondary text-secondary-foreground text-[11px] px-2.5 py-1 rounded-full font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Peer Review Standards */}
      <section className="py-12 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Peer Review Standards
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our rigorous peer-review process ensures only the highest quality research is published.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: "Double-Blind Review", desc: "Identities of authors and reviewers are concealed throughout the review process." },
              { icon: Award, title: "Expert Reviewers", desc: "Manuscripts are reviewed by 2-3 subject-matter experts in the relevant field." },
              { icon: Mail, title: "Rapid Turnaround", desc: "Average review time of 4-6 weeks from submission to first decision." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-card p-6 rounded-xl border border-border card-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-secondary flex items-center justify-center">
                  <item.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-primary to-emerald-500">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-extrabold text-white mb-4">Interested in Joining the Editorial Board?</h2>
          <p className="text-white/80 mb-8">We welcome applications from leading researchers worldwide. Reach out to discuss how you can contribute.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-bold hover:shadow-xl transition-all">
              Contact Us <ArrowRight size={18} />
            </Link>
            <Link to="/submit" className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-colors">
              Submit Your Research
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EditorialBoard;
