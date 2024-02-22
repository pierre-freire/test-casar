import styles from "./projectsListItem.module.css";
import HeartHandler from "./heartHandler";
import moment from "moment";
import "moment/locale/pt-br";

interface IProjectListItem {
	name: string;
	id: number;
	description: string;
	tech: string;
	updated: Date;
}

function ProjectsListItem({
	name,
	id,
	description,
	tech,
	updated,
}: IProjectListItem) {
	return (
		<li className="text-left border-solid border-[1px] border-slate-300 rounded p-[16px] w-full max-w-[900px]">
			<div className="flex justify-between">
				<h2 className="text-lg text-[#616161] font-semibold mb-[6px]">
					{name}
				</h2>
				<HeartHandler id={id} />
			</div>
			<p className="text-sm text-[#8C8C8C] max-w-[560px]">{description}</p>
			<div className={`text-xs mt-[16px] grid items-center gap-1 grid-cols-3`}>
				<p className={`flex ${styles.tech} ${styles[tech]}`}>{tech}</p>
				<span className="grid-span-1">
					Atualizado em {moment(updated).locale("pt-br").format("DD MMM YYYY")}
				</span>
			</div>
		</li>
	);
}

export default ProjectsListItem;
