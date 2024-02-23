import styles from "./projectsListItem.module.css";
import HeartHandler from "./heartHandler";
import moment from "moment";
import "moment/locale/pt-br";

interface IProjectListItem {
	name: string;
	id: number;
	description: string;
	language: string;
	updated_at: Date;
}

function ProjectsListItem({
	name,
	id,
	description,
	language,
	updated_at,
}: IProjectListItem) {
	return (
		<li className="text-left border-solid border-[1px] border-slate-300 rounded p-[16px] w-full max-w-[900px]">
			<div className="flex justify-between">
				<h2 className="text-lg text-[#616161] font-semibold mb-[6px]">
					{name}
				</h2>
				<HeartHandler
					elm={{
						id: id,
						name: name,
						description: description,
						language: language,
						updated_at: updated_at,
					}}
				/>
			</div>
			<p className="text-sm text-[#8C8C8C] max-w-[560px]">{description}</p>
			<div className={`text-xs mt-[16px] grid items-center gap-1 grid-cols-3`}>
				<p
					className={`flex ${styles.tech} ${
						styles[language.toLocaleLowerCase()]
					}`}
				>
					{language}
				</p>
				<span className="grid-span-1">
					Atualizado em{" "}
					{moment(updated_at).locale("pt-br").format("DD MMM YYYY")}
				</span>
			</div>
		</li>
	);
}

export default ProjectsListItem;
