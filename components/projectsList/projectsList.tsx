import ProjectsListItem from "./projectsListItem";
import NoData from "@/public/no_data.svg";
import Image from "next/image";

interface IProjectsList {
	repos?: Array<{
		name: string;
		id: number;
		description: string;
		language: string;
		updated_at: Date;
	}>;
}

function ProjectsList({ repos }: IProjectsList) {
	if (repos === undefined || repos.length < 1)
		return (
			<>
				<h2>Não existem repositórios</h2>
				<Image
					src={NoData}
					width={230}
					className="h-auto mt-[48px]"
					alt="Picture of no repositories to be shown"
					priority
				/>
			</>
		);

	return (
		<ul className="flex flex-col gap-2 w-full max-w-[900px] items-center">
			{repos.map((elm, index) => {
				return (
					<ProjectsListItem
						key={index}
						id={elm.id}
						name={elm.name}
						description={elm.description}
						language={elm.language}
						updated_at={elm.updated_at}
					/>
				);
			})}
		</ul>
	);
}

export default ProjectsList;
