import Link from 'next/link'
import React from 'react'

function page() {
	return (
		<>
			<div>Thankyou for giving me monies</div>
			<Link href={"/"} className='btn'>
				Go back
			</Link>
		</>
	)
}

export default page