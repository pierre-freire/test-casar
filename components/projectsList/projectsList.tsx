import ProjectsListItem from "./projectsListItem";
import { useRef, useState, useEffect } from "react";
import Loading from "../loading";
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
	const [currentRepos, setCurrentRepos] = useState(10);
	const loaderRef = useRef(null);

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "20px",
			threshold: 1.0,
		};

		const observer = new IntersectionObserver((entities) => {
			const target = entities[0];

			if (target.isIntersecting) {
				if (repos !== undefined && currentRepos < repos?.length) {
					setTimeout(() => {
						setCurrentRepos((old) => old + 4);
					}, 1000);
				}
			}
		}, options);

		if (loaderRef.current) {
			observer.observe(loaderRef.current);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const handleResquest = async () => {
			console.log("test:", currentRepos);
		};

		handleResquest();
	}, [currentRepos]);

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
			{repos.slice(0, currentRepos).map((elm, index) => {
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
			{currentRepos < repos.length && (
				<li className="flex flex-col items-center gap-4 p-4">
					<Loading size="small" />
					<p ref={loaderRef}>carregando mais itens...</p>
				</li>
			)}
		</ul>
	);
}

export default ProjectsList;
