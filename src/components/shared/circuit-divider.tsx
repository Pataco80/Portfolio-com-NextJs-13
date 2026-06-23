'use client'

import { useAnimateOnce } from '@/hooks/use-animate-once'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import { useTheme } from 'next-themes'
import { useEffect, useId, useState, useSyncExternalStore } from 'react'

// ── Theme-aware color palette ──────────────────────────────────────

type ColorPalette = {
	baseTrace: string
	glowTrace: string
	nodeOuter: string
	nodeInner: string
	photon: string
	glowRingOuter: string
	glowRingInner: string
	orbital: string
	core: string
}

const DARK_COLORS: ColorPalette = {
	baseTrace: 'rgba(0,85,255,0.06)',
	glowTrace: 'rgba(0,85,255,0.35)',
	nodeOuter: 'rgba(0,85,255,0.15)',
	nodeInner: 'rgba(0,85,255,0.5)',
	photon: '#4D8AFF',
	glowRingOuter: 'rgba(0,85,255,0.08)',
	glowRingInner: 'rgba(0,85,255,0.15)',
	orbital: '#dddfe3',
	core: '#dddfe3',
}

const LIGHT_COLORS: ColorPalette = {
	baseTrace: 'rgba(0,85,255,0.15)',
	glowTrace: 'rgba(0,85,255,0.55)',
	nodeOuter: 'rgba(0,85,255,0.20)',
	nodeInner: 'rgba(0,85,255,0.70)',
	photon: '#0055FF',
	glowRingOuter: 'rgba(0,85,255,0.12)',
	glowRingInner: 'rgba(0,85,255,0.25)',
	orbital: '#3c4148',
	core: '#0055FF',
}

// ── Data: SVG trace paths ──────────────────────────────────────────

const TRACES = [
	// Right primary
	{ d: 'M 600 100 H 680 V 70 H 780', dur: 1.5, delay: 0.2 },
	{ d: 'M 600 100 H 700 V 130 H 820 V 100 H 900', dur: 1.8, delay: 0.4 },
	{ d: 'M 600 100 H 660 V 50 H 750 V 30 H 880', dur: 1.6, delay: 0.1 },
	{ d: 'M 600 100 H 670 V 160 H 790 V 140 H 870', dur: 1.7, delay: 0.5 },
	{ d: 'M 600 100 H 720 V 170 H 850 V 180 H 960', dur: 2.0, delay: 0.3 },
	// Right secondary
	{ d: 'M 900 100 H 1000 V 80 H 1100', dur: 1.2, delay: 1.8 },
	{ d: 'M 820 130 V 160 H 920 V 170 H 1050', dur: 1.4, delay: 2.0 },
	{ d: 'M 880 30 H 950 V 50 H 1080', dur: 1.1, delay: 1.7 },
	// Left primary (mirror)
	{ d: 'M 600 100 H 520 V 70 H 420', dur: 1.5, delay: 0.2 },
	{ d: 'M 600 100 H 500 V 130 H 380 V 100 H 300', dur: 1.8, delay: 0.4 },
	{ d: 'M 600 100 H 540 V 50 H 450 V 30 H 320', dur: 1.6, delay: 0.1 },
	{ d: 'M 600 100 H 530 V 160 H 410 V 140 H 330', dur: 1.7, delay: 0.5 },
	{ d: 'M 600 100 H 480 V 170 H 350 V 180 H 240', dur: 2.0, delay: 0.3 },
	// Left secondary
	{ d: 'M 300 100 H 200 V 80 H 100', dur: 1.2, delay: 1.8 },
	{ d: 'M 380 130 V 160 H 280 V 170 H 150', dur: 1.4, delay: 2.0 },
	{ d: 'M 320 30 H 250 V 50 H 120', dur: 1.1, delay: 1.7 },
	// Short stubs
	{ d: 'M 680 70 V 55', dur: 0.3, delay: 1.6 },
	{ d: 'M 520 70 V 55', dur: 0.3, delay: 1.6 },
	{ d: 'M 700 130 V 145', dur: 0.3, delay: 2.0 },
	{ d: 'M 500 130 V 145', dur: 0.3, delay: 2.0 },
	{ d: 'M 1000 80 V 60', dur: 0.3, delay: 2.3 },
	{ d: 'M 200 80 V 60', dur: 0.3, delay: 2.3 },
] as const

// ── Data: endpoint nodes ───────────────────────────────────────────

const NODES = [
	// Right
	{ cx: 780, cy: 70, r: 6, dotR: 2.5, delay: 1.7 },
	{ cx: 900, cy: 100, r: 6, dotR: 2.5, delay: 2.2 },
	{ cx: 880, cy: 30, r: 5, dotR: 2, delay: 1.7 },
	{ cx: 870, cy: 140, r: 5, dotR: 2, delay: 2.2 },
	{ cx: 960, cy: 180, r: 5, dotR: 2, delay: 2.3 },
	{ cx: 1100, cy: 80, r: 5, dotR: 2, delay: 3.0 },
	{ cx: 1050, cy: 170, r: 5, dotR: 2, delay: 3.2 },
	{ cx: 1080, cy: 50, r: 5, dotR: 2, delay: 2.8 },
	{ cx: 680, cy: 55, r: 4, dotR: 1.5, delay: 1.9 },
	{ cx: 700, cy: 145, r: 4, dotR: 1.5, delay: 2.3 },
	{ cx: 1000, cy: 60, r: 4, dotR: 1.5, delay: 2.6 },
	// Left (mirror)
	{ cx: 420, cy: 70, r: 6, dotR: 2.5, delay: 1.7 },
	{ cx: 300, cy: 100, r: 6, dotR: 2.5, delay: 2.2 },
	{ cx: 320, cy: 30, r: 5, dotR: 2, delay: 1.7 },
	{ cx: 330, cy: 140, r: 5, dotR: 2, delay: 2.2 },
	{ cx: 240, cy: 180, r: 5, dotR: 2, delay: 2.3 },
	{ cx: 100, cy: 80, r: 5, dotR: 2, delay: 3.0 },
	{ cx: 150, cy: 170, r: 5, dotR: 2, delay: 3.2 },
	{ cx: 120, cy: 50, r: 5, dotR: 2, delay: 2.8 },
	{ cx: 520, cy: 55, r: 4, dotR: 1.5, delay: 1.9 },
	{ cx: 500, cy: 145, r: 4, dotR: 1.5, delay: 2.3 },
	{ cx: 200, cy: 60, r: 4, dotR: 1.5, delay: 2.6 },
] as const

// ── Data: travelling photons ───────────────────────────────────────

const PHOTONS = [
	// Right
	{
		r: 2,
		dur: '4s',
		begin: '3s',
		path: 'M 600 100 H 700 V 130 H 820 V 100 H 900',
	},
	{
		r: 1.5,
		dur: '3.5s',
		begin: '3.5s',
		path: 'M 600 100 H 660 V 50 H 750 V 30 H 880',
	},
	{
		r: 1.5,
		dur: '5s',
		begin: '4s',
		path: 'M 600 100 H 720 V 170 H 850 V 180 H 960',
	},
	// Left
	{
		r: 2,
		dur: '4s',
		begin: '3.2s',
		path: 'M 600 100 H 500 V 130 H 380 V 100 H 300',
	},
	{
		r: 1.5,
		dur: '3.5s',
		begin: '3.8s',
		path: 'M 600 100 H 540 V 50 H 450 V 30 H 320',
	},
	{
		r: 1.5,
		dur: '5s',
		begin: '4.2s',
		path: 'M 600 100 H 480 V 170 H 350 V 180 H 240',
	},
] as const

// ── Sub-components ─────────────────────────────────────────────────

function BaseTraces({ colors }: { colors: ColorPalette }) {
	return (
		<g>
			{TRACES.map((t, i) => (
				<path key={i} d={t.d} fill='none' stroke={colors.baseTrace} strokeWidth={1} strokeLinecap='round' strokeLinejoin='round' />
			))}
		</g>
	)
}

function GlowTraces({ hasAnimated, glowId, colors }: { hasAnimated: boolean; glowId: string; colors: ColorPalette }) {
	return (
		<g>
			{TRACES.map((t, i) => (
				<motion.path
					key={i}
					d={t.d}
					fill='none'
					stroke={colors.glowTrace}
					strokeWidth={1.2}
					strokeLinecap='round'
					strokeLinejoin='round'
					filter={`url(#${glowId})`}
					initial={{ pathLength: 0, opacity: 0 }}
					animate={hasAnimated ? { pathLength: 1, opacity: 1 } : {}}
					transition={{ duration: t.dur, delay: t.delay, ease: 'easeOut' }}
				/>
			))}
		</g>
	)
}

function Nodes({ hasAnimated, colors }: { hasAnimated: boolean; colors: ColorPalette }) {
	return (
		<g>
			{NODES.map((n, i) => (
				<g key={i}>
					<motion.circle
						cx={n.cx}
						cy={n.cy}
						r={n.r}
						fill={colors.nodeOuter}
						initial={{ opacity: 0 }}
						animate={hasAnimated ? { opacity: 1 } : {}}
						transition={{ duration: 0.4, delay: n.delay, ease: 'easeOut' }}
					/>
					<motion.circle
						cx={n.cx}
						cy={n.cy}
						r={n.dotR}
						fill={colors.nodeInner}
						initial={{ opacity: 0 }}
						animate={hasAnimated ? { opacity: 1 } : {}}
						transition={{ duration: 0.4, delay: n.delay, ease: 'easeOut' }}
					/>
				</g>
			))}
		</g>
	)
}

function TravellingPhotons({ photonId, colors }: { photonId: string; colors: ColorPalette }) {
	return (
		<g>
			{PHOTONS.map((p, i) => (
				<circle key={i} r={p.r} fill={colors.photon} filter={`url(#${photonId})`} opacity={0}>
					<animate attributeName='opacity' values='0;0;1;1;0' dur={p.dur} repeatCount='indefinite' begin={p.begin} />
					<animateMotion dur={p.dur} repeatCount='indefinite' begin={p.begin} path={p.path} />
				</circle>
			))}
		</g>
	)
}

function ReactLogo({ reducedMotion, colors }: { reducedMotion: boolean; colors: ColorPalette }) {
	return (
		<g transform='translate(600,100)'>
			{/* Outer glow rings */}
			<circle r={68} fill='none' stroke={colors.glowRingOuter} strokeWidth={1} />
			<circle r={64} fill='none' stroke={colors.glowRingInner} strokeWidth={1}>
				{!reducedMotion && <animate attributeName='opacity' values='0.4;0.8;0.4' dur='4s' repeatCount='indefinite' />}
			</circle>

			{/* 3 orbital ellipses */}
			<ellipse rx={52} ry={20} fill='none' stroke={colors.orbital} strokeWidth={2} opacity={0.7}>
				{!reducedMotion && (
					<animateTransform attributeName='transform' type='rotate' from='0' to='360' dur='20s' repeatCount='indefinite' />
				)}
			</ellipse>
			<ellipse rx={52} ry={20} fill='none' stroke={colors.orbital} strokeWidth={2} opacity={0.7} transform='rotate(60)'>
				{!reducedMotion && (
					<animateTransform attributeName='transform' type='rotate' from='60' to='420' dur='24s' repeatCount='indefinite' />
				)}
			</ellipse>
			<ellipse rx={52} ry={20} fill='none' stroke={colors.orbital} strokeWidth={2} opacity={0.7} transform='rotate(120)'>
				{!reducedMotion && (
					<animateTransform attributeName='transform' type='rotate' from='120' to='480' dur='28s' repeatCount='indefinite' />
				)}
			</ellipse>

			{/* Core dot */}
			<circle r={6} fill={colors.core}>
				{!reducedMotion && (
					<>
						<animate attributeName='r' values='6;7;6' dur='3s' repeatCount='indefinite' />
						<animate attributeName='opacity' values='0.8;1;0.8' dur='3s' repeatCount='indefinite' />
					</>
				)}
			</circle>
		</g>
	)
}

// ── SVG filter definitions ─────────────────────────────────────────

function SvgDefs({ glowId, photonId }: { glowId: string; photonId: string }) {
	return (
		<defs>
			<filter id={glowId} x='-50%' y='-50%' width='200%' height='200%'>
				<feGaussianBlur in='SourceGraphic' stdDeviation='2' result='blur' />
				<feMerge>
					<feMergeNode in='blur' />
					<feMergeNode in='SourceGraphic' />
				</feMerge>
			</filter>
			<filter id={photonId} x='-200%' y='-200%' width='500%' height='500%'>
				<feGaussianBlur in='SourceGraphic' stdDeviation='3' result='blur' />
				<feMerge>
					<feMergeNode in='blur' />
					<feMergeNode in='SourceGraphic' />
				</feMerge>
			</filter>
		</defs>
	)
}

// ── Main component ─────────────────────────────────────────────────

type CircuitDividerProps = {
	className?: string
	animate?: boolean
	/** Couleur du fond de la section au-dessus (haut du degrade). */
	from?: string
	/** Couleur du fond de la section en dessous (bas du degrade). */
	to?: string
}

export function CircuitDivider({
	className,
	animate = true,
	from = 'hsl(var(--background))',
	to = 'hsl(var(--background))',
}: CircuitDividerProps) {
	const id = useId()
	const glowId = `${id}-blueGlow`
	const photonId = `${id}-photonGlow`

	const { ref, hasAnimated } = useAnimateOnce({ threshold: 0.2 })
	const [mounted, setMounted] = useState(false)
	const { resolvedTheme } = useTheme()

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect -- Standard pattern to detect client hydration
		setMounted(true)
	}, [])

	// Avant le mount client, utilise toujours LIGHT_COLORS pour matcher le SSR.
	// Après le mount, utilise le theme résolu.
	const colors = mounted && resolvedTheme === 'dark' ? DARK_COLORS : LIGHT_COLORS

	const reducedMotion = useSyncExternalStore(
		(cb) => {
			const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
			mq.addEventListener('change', cb)
			return () => mq.removeEventListener('change', cb)
		},
		() => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
		() => false,
	)

	const hasAnimate = !!animate
	// Zoom d'entree : joue une seule fois quand le divider entre dans le viewport (sauf reduced-motion)
	const animateEntrance = hasAnimate && !reducedMotion

	return (
		<div
			style={{ background: `linear-gradient(to bottom, ${from}, ${from} 20%, ${to} 80%, ${to})` }}
			className={cn(
				// Bande de fusion : le degrade fond les couleurs des 2 sections (couleur pleine aux
				// bords = couture invisible). py genereux => l'atome reste centre, jamais rogne.
				'relative flex items-center justify-center overflow-hidden',
				className,
			)}>
			<motion.div
				ref={ref as React.RefObject<HTMLDivElement>}
				className='relative h-[100px] sm:h-[130px] md:h-[160px] lg:h-[200px] w-full'
				initial={{ scale: animateEntrance ? 0.5 : 1 }}
				animate={{ scale: animateEntrance && !hasAnimated ? 0.5 : 1 }}
				transition={{ duration: 0.7, ease: 'easeOut' }}>
				<svg viewBox='0 0 1200 200' preserveAspectRatio='xMidYMid meet' className='absolute inset-0 w-full h-full'>
					<SvgDefs glowId={glowId} photonId={photonId} />
					<BaseTraces colors={colors} />
					<GlowTraces hasAnimated={hasAnimated} glowId={glowId} colors={colors} />
					<Nodes hasAnimated={hasAnimated} colors={colors} />
					{!reducedMotion && <TravellingPhotons photonId={photonId} colors={colors} />}
					<ReactLogo reducedMotion={reducedMotion} colors={colors} />
				</svg>
			</motion.div>
		</div>
	)
}
