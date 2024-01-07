"use client";
import Image from 'next/image'
import { handlePayment } from './actions'
import { useRouter } from 'next/navigation';



export default function Home() {
	const router = useRouter()

	return (<>
		<h1>
			Hay you whats up man gimme monies pliss
		</h1>
		<button className='btn mb-20' onClick={async () => {
			const x = await handlePayment()
			if (x?.redirect) {
				router.push(x.redirect)
			}
		}}>
			Pay monies
		</button>
	</>
	)
}
