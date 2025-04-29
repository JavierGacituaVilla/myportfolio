import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <h2>Sobre mí</h2>
        <p>
          Soy un desarrollador apasionado por crear soluciones tecnológicas innovadoras.
          Combino creatividad, lógica y pasión para construir experiencias digitales únicas.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
