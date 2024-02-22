import styles from "./projectsListItem.module.css";
import HeartHandler from "./heartHandler";

interface IProjectListItem {
	name: string;
	id: string;
	description: string;
	tech: string;
	updated: string;
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
			<p className={`text-xs mt-[16px] ${styles.tech} flex items-center gap-2`}>
				{tech} <span className="ml-[24px]">{updated}</span>
			</p>
		</li>
	);
}

export default ProjectsListItem;
