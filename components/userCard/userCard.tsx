import Image from "next/image";
import UserImage from "../../public/not_found.svg";

function UserCard() {
	return (
		<div className="flex flex-col items-center w-[448px] px-[24px] py-[40px] border-solid border-[1px] border-slate-300 rounded">
			<Image
				src={UserImage}
				width={200}
				height={200}
				alt="Picture of the user"
				className="rounded-full mb-[24px]"
			/>
			<h2 className="text-xl font-semibold">Nome do usuario</h2>
			<h3 className="text-sm mb-[24px]">@usuario</h3>
			<p className="text-sm">
				Trabalha com segurança cibernética, experiencia em empresas
				multinacionais.
			</p>
		</div>
	);
}

export default UserCard;
