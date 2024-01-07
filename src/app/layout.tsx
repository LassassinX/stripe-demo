import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Stripe payment demo',
	description: 'A demo of stripe payments',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className + ' min-h-screen flex flex-col'}>
				<main className="grow flex flex-col items-center justify-center p-24 gap-4" data-theme="cupcake">
					{children}
				</main>

				<footer className='flex flex-col items-center justify-center p-4'>
					<p>
						Made by {' '}
						<a href="https://github.com/LassassinX/" className='text-primary inline-block'>@SanjidIslamChowdhury
						</a>
						{' '}to test stripe payments.
					</p>
					<span className='text-sm opacity-60 text-center'>
						This is a test, no actual monies will be taken from you
						<br />
						Use 4242 4242 4242 4242 as a card number for successful payment
					</span>
				</footer>
			</body>
		</html>
	)
}
