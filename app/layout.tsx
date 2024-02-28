"use client";

import { Poppins } from "next/font/google";
import Header from "@/components/header";
import FavoritesContext from "./context/favorites";
import "./globals.css";

const poppins = Poppins({
	weight: "400",
	subsets: ["latin"],
});
/*
export const metadata: Metadata = {
	title: "Teste Casar.com",
	description: "Teste prático casar.com",
};
*/

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt">
			<body className={poppins.className}>
				<Header />
				<FavoritesContext>{children}</FavoritesContext>
			</body>
		</html>
	);
}
