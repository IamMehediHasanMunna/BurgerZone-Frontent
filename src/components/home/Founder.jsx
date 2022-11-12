import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founder.webp";

const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />

        <h3>Mehedi Hasan Munna</h3>
        <p>Hello Everyone, I am Munna, the founder of BurgerZone</p>
      </motion.div>
    </section>
  );
};

export default Founder;
