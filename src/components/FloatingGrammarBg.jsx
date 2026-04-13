import { motion } from 'framer-motion'

const grammarTerms = [
  'Articulate', 'Fluency', 'Confident', 'Succeed', 'Achieve',
  'Eloquent', 'Dialogue', 'Idiom', 'Grammar', 'Communication',
  'Vocabulary', 'Pronunciation', 'Listening', 'Speaking',
  'Reading', 'Writing', 'Professional', 'Personality',
  'Present Perfect', 'Modals', 'Phrases', 'Dynamic', 'Success', 'Global',
]

// Pre-computed positions so they're consistent across renders
const termConfigs = [
  { term: 0, top: '8%', left: '5%', size: 'text-sm', rotate: -12, delay: 0, dur: 18 },
  { term: 1, top: '15%', left: '85%', size: 'text-base', rotate: 8, delay: 2, dur: 22 },
  { term: 2, top: '25%', left: '45%', size: 'text-lg', rotate: -5, delay: 1, dur: 20 },
  { term: 3, top: '35%', left: '12%', size: 'text-xs', rotate: 15, delay: 3, dur: 16 },
  { term: 4, top: '45%', left: '75%', size: 'text-sm', rotate: -10, delay: 0.5, dur: 24 },
  { term: 5, top: '55%', left: '30%', size: 'text-base', rotate: 6, delay: 4, dur: 19 },
  { term: 6, top: '65%', left: '90%', size: 'text-xs', rotate: -18, delay: 1.5, dur: 21 },
  { term: 7, top: '72%', left: '60%', size: 'text-sm', rotate: 12, delay: 2.5, dur: 17 },
  { term: 8, top: '82%', left: '8%', size: 'text-lg', rotate: -8, delay: 3.5, dur: 23 },
  { term: 9, top: '90%', left: '50%', size: 'text-xs', rotate: 20, delay: 0, dur: 15 },
  { term: 10, top: '12%', left: '65%', size: 'text-sm', rotate: -15, delay: 5, dur: 20 },
  { term: 11, top: '40%', left: '92%', size: 'text-xs', rotate: 10, delay: 1, dur: 18 },
  { term: 12, top: '60%', left: '18%', size: 'text-base', rotate: -6, delay: 2, dur: 22 },
  { term: 13, top: '78%', left: '40%', size: 'text-sm', rotate: 14, delay: 4, dur: 16 },
  { term: 14, top: '20%', left: '25%', size: 'text-xs', rotate: -20, delay: 3, dur: 25 },
  { term: 15, top: '50%', left: '55%', size: 'text-sm', rotate: 7, delay: 1.5, dur: 19 },
  { term: 16, top: '32%', left: '88%', size: 'text-base', rotate: -12, delay: 0.8, dur: 21 },
  { term: 17, top: '68%', left: '5%', size: 'text-sm', rotate: 15, delay: 2.2, dur: 18 },
  { term: 18, top: '94%', left: '25%', size: 'text-xs', rotate: -5, delay: 4.5, dur: 23 },
  { term: 19, top: '42%', left: '15%', size: 'text-lg', rotate: 10, delay: 1.2, dur: 20 },
]

export default function FloatingGrammarBg({ className = '', count = 16 }) {
  const items = termConfigs.slice(0, count)

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}>
      {items.map((config, i) => (
        <motion.span
          key={i}
          className={`absolute font-display font-medium tracking-[0.2em] uppercase text-gray-800/15 hidden sm:block ${config.size}`}
          style={{
            top: config.top,
            left: config.left,
            rotate: `${config.rotate}deg`,
          }}
          animate={{
            y: [0, -15, 0, 12, 0],
            x: [0, 8, 0, -6, 0],
            rotate: [config.rotate, config.rotate + 3, config.rotate, config.rotate - 3, config.rotate],
          }}
          transition={{
            duration: config.dur,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: config.delay,
          }}
        >
          {grammarTerms[config.term]}
        </motion.span>
      ))}
    </div>
  )
}
