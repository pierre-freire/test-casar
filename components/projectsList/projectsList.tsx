import ProjectsListItem from "./projectsListItem";

function ProjectsList() {
	return (
		<ul className="flex flex-col gap-2 w-full items-center">
			{["0", "1", "2", "3", "4"].map((elm, index) => {
				return (
					<ProjectsListItem
						key={index}
						id={elm}
						name="Nome do projeto"
						description="Aplicativo de visualização de Pokémon utilizando o PokeAPI.co - Construído em React Native (Expo)"
						tech="typescript"
						updated="Updated on 17 Apr 2021"
					/>
				);
			})}
		</ul>
	);
}

export default ProjectsList;
