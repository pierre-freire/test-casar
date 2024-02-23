"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { searchUser, getUserRepos } from "@/util/API";
import UserCard from "@/components/userCard";
import ProjectsList from "@/components/projectsList";
import { useRouter } from "next/navigation";

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

	const router = useRouter();
	const searchParams = useSearchParams();
	const user = searchParams.get("user");
	const [loading, setLoading] = useState(true);

	function redirectError() {
		return router.push(`/not_found?user=${user}`);
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

	if (loading) return <></>;

	return (
		<main className="p-4 mt-10 flex flex-col lg:flex-row lg:items-start items-center justify-center gap-2 text-slate-600 text-center">
			<UserCard user={userState} />
			{repos !== undefined && <ProjectsList repos={repos} />}
		</main>
	);
}
