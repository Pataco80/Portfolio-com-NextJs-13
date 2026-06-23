'use server'

import { z } from 'zod'
import { Resend } from 'resend'

// Validation cote serveur (defense en profondeur, en plus du client).
const ContactSchema = z.object({
	name: z.string().min(3).max(20),
	email: z.string().email(),
	message: z.string().min(1).max(500),
})

export type ContactState = { success: boolean; error?: string }

export async function sendContact(data: unknown): Promise<ContactState> {
	const parsed = ContactSchema.safeParse(data)
	if (!parsed.success) {
		return { success: false, error: 'Données invalides.' }
	}
	const { name, email, message } = parsed.data

	const apiKey = process.env.RESEND_API_KEY
	const to = process.env.NEXT_PUBLIC_EMAIL_CONTACT

	// Fallback dev : sans cle Resend ou destinataire, on simule un succes
	// pour pouvoir tester tout le flux (validation, toast, localStorage).
	if (!apiKey || !to) {
		console.info('[contact] Resend non configure (RESEND_API_KEY / NEXT_PUBLIC_EMAIL_CONTACT) — envoi simule.', {
			name,
			email,
		})
		return { success: true }
	}

	try {
		const resend = new Resend(apiKey)
		const { data, error } = await resend.emails.send({
			from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
			to,
			replyTo: email,
			subject: `Nouveau message de ${name} (portfolio)`,
			text: `De : ${name} <${email}>\n\n${message}`,
		})
		if (error) {
			console.error('[contact] Resend error:', error)
			return { success: false, error: "L'envoi a échoué, réessaie plus tard." }
		}
		console.info('[contact] Resend OK — id:', data?.id)
		return { success: true }
	} catch (e) {
		console.error('[contact] exception:', e)
		return { success: false, error: "L'envoi a échoué, réessaie plus tard." }
	}
}
