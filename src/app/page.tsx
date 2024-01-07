"use client";
import Image from 'next/image'
import { handlePayment } from './actions'
import { useRouter } from 'next/navigation';
import { useState } from 'react';



export default function Home() {
	const router = useRouter()
	const [loading, setLoading] = useState(false)

	return (<>
		<h1>
			Hay you whats up man gimme monies pliss
		</h1>
		<button disabled={loading} className='btn mb-20' onClick={async () => {
			setLoading(true)
			try {
				const x = await handlePayment()
				if (x?.redirect) {
					router.push(x.redirect)
				}
			} catch (error) {
				console.error(error)
			} finally {
				setLoading(false)
			}	
		}}>
			Pay monies
		</button>
	</>
	)
}
