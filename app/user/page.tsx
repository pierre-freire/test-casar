"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { searchUser, getUserRepos } from "@/util/API";
import UserCard from "@/components/userCard";
import ProjectsList from "@/components/projectsList";

interface IUserState {
	avatar_url: string;
	bio: string;
	name: string;
	twitter_username: string;
}

export default function User() {
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

	const searchParams = useSearchParams();
	const user = searchParams.get("user");

	async function getUser() {
		if (user === null) return;
		const userData = await searchUser(user);

		setUserState(userData);
		const reposData = await getUserRepos(user);
		console.log(reposData);
		setRepos(reposData);
	}

	useEffect(() => {
		getUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<main className="p-4 mt-10 flex flex-col lg:flex-row lg:items-start items-center justify-center gap-2 text-slate-600 text-center">
			<UserCard user={userState} />
			{repos !== undefined && <ProjectsList repos={repos} />}
		</main>
	);
}
