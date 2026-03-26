import { motion } from "framer-motion";
import logo from "../../assets/SAtronix_logo.png";

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-base"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.55 } }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.24),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(139,92,246,0.16),_transparent_26%),linear-gradient(180deg,_#243244_0%,_#1a2330_52%,_#141b26_100%)]" />

      <div className="relative flex flex-col items-center">
        <motion.div
          className="absolute h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl"
          animate={{ scale: [0.95, 1.08, 0.95], opacity: [0.45, 0.8, 0.45] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />

        <motion.div
          className="relative flex h-44 w-44 items-center justify-center rounded-full border border-cyan-200/25 bg-[radial-gradient(circle_at_30%_30%,_rgba(103,232,249,0.88),_rgba(14,165,233,0.4)_35%,_rgba(30,41,59,0.9)_72%)] shadow-[0_0_55px_rgba(34,211,238,0.26)]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        >
          <motion.div
            className="absolute inset-[18%] rounded-full border border-white/10"
            animate={{ opacity: [0.25, 0.45, 0.25] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -inset-5 rounded-full border border-violet-300/20"
            animate={{ rotate: 360, scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
          />
          <motion.div
            className="absolute -left-6 top-1/2 h-[2px] w-56 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-white/35 to-transparent"
            animate={{ rotate: [0, 10, 0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
          <img
            src={logo}
            alt="SAtronix Technology logo"
            className="relative z-10 h-12 w-auto object-contain drop-shadow-[0_0_18px_rgba(255,255,255,0.22)]"
          />
        </motion.div>

        <motion.div
          className="absolute left-1/2 top-1/2 h-4 w-4 rounded-full bg-gradient-to-r from-cyan-200 to-violet-400 shadow-[0_0_18px_rgba(103,232,249,0.7)]"
          animate={{ rotate: 360 }}
          style={{ transformOrigin: "0 0" }}
          transition={{ repeat: Infinity, duration: 4.8, ease: "linear" }}
        />

        <motion.p
          className="mt-10 font-display text-lg tracking-[0.35em] text-white/85 sm:text-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          SATRONIX TECHNOLOGY
        </motion.p>
        <motion.p
          className="mt-2 text-sm uppercase tracking-[0.3em] text-cyan-100/55"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.45, 1, 0.45] }}
          transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
        >
          Launching Experience
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Loader;


