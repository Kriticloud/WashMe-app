import { motion } from 'motion/react';

interface OnboardingProps {
  step: 1 | 2 | 3;
  onNext: () => void;
  onSkip: () => void;
}

export default function Onboarding({ step, onNext, onSkip }: OnboardingProps) {
  const content = {
    1: {
      title: "Book Laundry in Seconds",
      description: "Select your services and schedule a pickup at your convenience.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAgqmTw1cv6pY56EskKvyJQl9XUa1AJbLwgGC6unNqLyy86m-CY-docd3Je9AfhLGZuYJ7LxJa5yJom964mPmChZJUOkaEoMQ9vv9VenJiSDP8PJDaaLH3rYqtNqfCGSG1AhV002opJnrJBpaHv3gwz-PJHsCJnGZfMdE8va878fV1xLva4y5ZJW8mV6hAD_WrY4MatZ6mPHZC6xruPZN61spmwh5EjTrJN66LgimOTH8lGlUfcjbLFIs1i-qbMhVVPAF_AN13i1k",
      stepLabel: "Step One",
      progress: [true, false, false],
      buttonText: "Next",
      overlayIcon: "local_laundry_service",
      overlayTitle: "Service Ready",
      overlaySub: "Premium Wash & Fold"
    },
    2: {
      title: "We Pick, Wash & Deliver",
      description: "Professional cleaning and doorstep delivery, so you can focus on what matters.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEa5adR5mR-P-MN38is7nK0ShFYKu--jTAxu8OM49f208tWvIGnABv50Q2BmVpMAVn3kmpxVUdudPI0DqVyNcnPcPk_hmkeKw3LpT2K3igJ5tQGN9ghJF4_3_kkGZuSxiyrD1GFyVEatsYWmYU1yabEvhln6TOLpSdXkO3mkUDJRex_vkdyzRJH55LzNkWUcoJj1H-Bp_CLsiphkINIs9WrViqUzhewAHAw3KVAH71ybtALvUH9Wwkvsda19CMLenBBNpYINn_aQU",
      stepLabel: "Step Two",
      progress: [false, true, false],
      buttonText: "Continue Journey",
      overlayIcon: "local_shipping",
      overlayTitle: "On Its Way",
      overlaySub: "Doorstep Delivery"
    },
    3: {
      title: "Track Everything in Real Time",
      description: "Stay updated at every step from pickup to delivery.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCSWE96gQ4byDlIebwSluDBCG_pavL3cK5FsVzPrbncKfmKFO4pDJCuKcazhoaumxoi54kiaeARXUrYqBk4LcsDXlah8wwRg8iJdjZG7h2MrVgxuBxX5eLkt9nq1jmqGkv-E7xMqNimu1yye1mjSj_qrrb7YNevsqcSmp5JtGhBpLzHJ2H63-DuJz9yZseGqvS2A2R7DYU_dlNy3CSRHOwggYIqRnvnmv5MtLnBCwPxn0joE57HjA0B0u_9ey_WZeqxS-98qGAGYU",
      stepLabel: "Step Three",
      progress: [false, false, true],
      buttonText: "Get Started",
      overlayIcon: "track_changes",
      overlayTitle: "Live Tracking",
      overlaySub: "Real-time Updates"
    }
  }[step];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex-grow flex flex-col items-center justify-center px-6 pt-24 pb-12 w-full max-w-md mx-auto"
    >
      <div className="relative w-full aspect-[4/5] mb-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[90%] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="relative h-full w-full bg-surface rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,97,164,0.06)] border border-outline-variant/10">
          <img 
            src={content.image} 
            alt={content.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-6 left-6 right-6 glass-card rounded-lg p-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
              <span className="material-symbols-outlined fill-1">{content.overlayIcon}</span>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">{content.overlayTitle}</div>
              <div className="text-on-surface font-semibold">{content.overlaySub}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full text-center mb-12">
        <span className="text-primary font-headline font-extrabold uppercase tracking-[0.2em] text-[10px] mb-2 block">
          {content.stepLabel}
        </span>
        <h1 className="font-headline text-4xl font-extrabold text-on-surface tracking-tight mb-4 leading-tight">
          {content.title.split(' ').map((word, i) => (
            word === 'Real' || word === 'Time' ? <span key={i} className="text-primary">{word} </span> : word + ' '
          ))}
        </h1>
        <p className="text-on-surface-variant text-lg leading-relaxed px-4">
          {content.description}
        </p>
      </div>

      <div className="w-full flex flex-col items-center gap-8">
        <div className="flex gap-2">
          {content.progress.map((active, i) => (
            <div 
              key={i} 
              className={`h-2 rounded-full transition-all duration-300 ${active ? 'w-8 bg-primary' : 'w-2 bg-outline-variant/30'}`}
            />
          ))}
        </div>

        <button 
          onClick={onNext}
          className="liquid-gradient w-full py-5 rounded-xl shadow-[0_20px_40px_rgba(0,97,164,0.15)] text-white font-headline font-bold text-lg flex items-center justify-center gap-3 active:scale-95 transition-all"
        >
          <span>{content.buttonText}</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </motion.div>
  );
}
