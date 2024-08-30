import Navbar from '@/components/layout/navbar';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className='min-h-screen w-full'>
			<Navbar />
			{children}
		</main>
	);
}
