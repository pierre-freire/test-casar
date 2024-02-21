import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

const poppins = Poppins({
	weight: "400",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Teste Casar.com",
	description: "Teste prático casar.com",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt">
			<body className={poppins.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
