import UserCard from "@/components/userCard";
import ProjectsList from "@/components/projectsList";

export default function User() {
	return (
		<main className="p-4 mt-10 flex flex-col lg:flex-row items-center justify-center gap-2 text-slate-600 text-center">
			<UserCard />
			<ProjectsList />
		</main>
	);
}
