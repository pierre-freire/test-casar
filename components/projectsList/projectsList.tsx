import ProjectsListItem from "./projectsListItem";

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
		return <h2>Não existem repositorios</h2>;

	return (
		<ul className="flex flex-col gap-2 w-full items-center">
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
