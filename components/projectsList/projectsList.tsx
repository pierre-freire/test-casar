import ProjectsListItem from "./projectsListItem";

interface IProjectsList {
	repos: [
		{
			name: string;
			id: number;
			description: string;
			language: string;
			updated_at: Date;
		}
	];
}

function ProjectsList({ repos }: IProjectsList) {
	return (
		<ul className="flex flex-col gap-2 w-full items-center">
			{repos.map((elm, index) => {
				return (
					<ProjectsListItem
						key={index}
						id={elm.id}
						name={elm.name}
						description={elm.description}
						tech={elm.language}
						updated={elm.updated_at}
					/>
				);
			})}
		</ul>
	);
}

export default ProjectsList;
