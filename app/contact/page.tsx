"use client";
import { Instagram, Mail, Twitter, Facebook, Coffee } from "lucide-react";
import Link from "next/link";

const socials = [
	{
		icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
			<line x1="3" x2="21" y1="9" y2="9"/>
			<line x1="9" x2="9" y1="21" y2="9"/>
		</svg>,
		href: "https://www.artmajeur.com/olivier-kalimero-quemere",
		label: "Art Majeur - Portfolio artistique",
		handle: "@olivier-kalimero-quemere",
	},
	{
		icon: <Instagram size={20} />,
		href: "https://instagram.com/kalimero_____666",
		label: "Instagram",
		handle: "@kalimero_____666",
	},
	{
		icon: <Facebook size={20} />,
		href: "https://facebook.com/kalimero.officiel",
		label: "Facebook",
		handle: "@kalimero.officiel",
	},
	{
		icon: <Coffee size={20} />,
		href: "https://ko-fi.com/kalimero666",
		label: "Ko-Fi",
		handle: "@kalimero666",
	},
	{
		icon: <Twitter size={20} />,
		href: "https://twitter.com/kalimero_666_",
		label: "Twitter",
		handle: "@kalimero_666_",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:kalimero@ik.me",
		label: "Email",
		handle: "kalimero@ik.me",
	},
];

export default function ContactPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
			{/* Navigation */}
			<nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50">
				<div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
					<div className="flex justify-between items-center">
						<div className="logo"></div>
						<ul className="flex gap-10 list-none">
							<li>
								<Link 
									href="https://kalimero.ink" 
									className="text-zinc-400 hover:text-zinc-200 transition-colors text-sm uppercase tracking-wider"
								>
									Accueil
								</Link>
							</li>
							<li>
								<Link 
									href="/contact" 
									className="text-zinc-400 hover:text-zinc-200 transition-colors text-sm uppercase tracking-wider"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			{/* Background decoration */}
			<div className="fixed inset-0 pointer-events-none">
				<div className="absolute top-[20%] left-[10%] w-96 h-96 bg-zinc-500/5 rounded-full blur-3xl" />
				<div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-zinc-600/5 rounded-full blur-3xl" />
			</div>

			{/* Main Container */}
			<div className="relative container mx-auto px-4 min-h-screen flex items-center justify-center">
				<div className="w-full max-w-6xl">
					{/* Page Title */}
					<div className="text-center mb-16 pt-32">
						<h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
							<span className="bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
								Restons connectés
							</span>
						</h1>
						<p className="text-zinc-400 text-lg tracking-wide">
							Retrouvez-moi sur mes différentes plateformes
						</p>
					</div>

					{/* Social Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
						{socials.map((social, index) => (
							<div
								key={social.handle}
								className="group relative bg-zinc-900 rounded-2xl border border-zinc-800/50 overflow-hidden transition-all duration-700 hover:border-zinc-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-zinc-500/10"
								style={{
									animation: `fadeInUp 0.6s ease-out ${(index + 1) * 0.1}s backwards`
								}}
							>
								{/* Gradient overlay on hover */}
								<div className="absolute inset-0 bg-gradient-to-br from-zinc-200/3 to-zinc-400/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

								<Link
									href={social.href}
									target={social.href.startsWith('mailto:') ? undefined : "_blank"}
									className="relative flex flex-col items-center justify-center gap-8 p-12 min-h-[280px]"
								>
									{/* Gradient Line */}
									<span className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent" />

									{/* Icon Container */}
									<div className="relative z-10 w-16 h-16 flex items-center justify-center border-2 border-zinc-500 rounded-full bg-zinc-900 transition-all duration-1000 group-hover:border-zinc-200 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(161,161,170,0.3)]">
										<div className="text-zinc-200 group-hover:text-white transition-colors duration-300">
											{social.icon}
										</div>
									</div>

									{/* Text Content */}
									<div className="relative z-10 text-center">
										<div className="text-2xl font-bold text-zinc-200 group-hover:text-white transition-colors duration-300 mb-4 tracking-wide">
											{social.handle}
										</div>
										<div className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors duration-1000 tracking-wide">
											{social.label}
										</div>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>

			<style jsx>{`
				@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Courier+Prime:wght@400;700&display=swap');

				.logo {
					font-family: 'Bebas Neue', sans-serif;
				}

				h1 {
					font-family: 'Bebas Neue', sans-serif;
					letter-spacing: 3px;
				}

				body {
					font-family: 'Courier Prime', monospace;
				}

				@keyframes fadeInUp {
					from {
						opacity: 0;
						transform: translateY(30px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
			`}</style>
		</div>
	);
}