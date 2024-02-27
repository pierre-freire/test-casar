"use client";

import { useState, useEffect } from "react";
import { searchUser, getUserRepos } from "@/util/API";
import UserCard from "@/components/userCard";
import ProjectsList from "@/components/projectsList";
import { useRouter } from "next/navigation";
import Loading from "@/components/loading";

interface IUserState {
	avatar_url: string;
	bio: string;
	name: string;
	twitter_username: string;
}

export default function User({ params }: { params: { user: string } }) {
	const [userState, setUserState] = useState<IUserState>({
		avatar_url: "",
		bio: "",
		name: "",
		twitter_username: "",
	});

	const [repos, setRepos] = useState<
		[
			{
				name: string;
				id: number;
				description: string;
				language: string;
				updated_at: Date;
			}
		]
	>();

	const router = useRouter();
	const user = params.user;
	const [loading, setLoading] = useState(true);

	function redirectError() {
		return router.push(`/not_found/${user}`);
	}

	async function getUser() {
		setLoading(true);

		if (user === null) return redirectError();

		try {
			const userData = await searchUser(user);
			setUserState(userData);

			const reposData = await getUserRepos(user);
			setRepos(reposData);

			setLoading(false);
		} catch (error) {
			redirectError();
		}
	}

	useEffect(() => {
		getUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	if (loading)
		return (
			<main className="w-full h-[400px] flex justify-center items-center">
				<Loading size="medium" />
			</main>
		);

	return (
		<main className="p-4 mt-10 flex flex-col lg:flex-row lg:items-start items-center justify-center gap-[48px] text-slate-600 text-center">
			<UserCard user={userState} />
			{repos !== undefined && (
				<div className="w-full max-w-[900px]">
					<h1 className="text-xl font-semibold mb-[16px] text-left text-[#32C0C6]">
						Repositórios
					</h1>
					<ProjectsList repos={repos} />
				</div>
			)}
		</main>
	);
}
