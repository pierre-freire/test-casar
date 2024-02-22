import Image from "next/image";

interface IUserCard {
	user: {
		avatar_url: string;
		bio: string;
		name: string;
		twitter_username: string;
	};
}

function UserCard({ user }: IUserCard) {
	return (
		<div className="flex flex-col items-center w-[448px] lg:min-w-[360px] sm:px-[24px] py-[40px] border-solid border-[1px] border-slate-300 rounded">
			{user.avatar_url && (
				<Image
					src={user.avatar_url}
					width={200}
					height={200}
					alt="Picture of the user"
					className="rounded-full mb-[24px]"
				/>
			)}
			<h2 className="text-xl font-semibold">{user.name}</h2>
			{user.twitter_username && (
				<h3 className="text-sm mb-[24px]">@{user.twitter_username}</h3>
			)}
			<p className="text-sm">{user.bio}</p>
		</div>
	);
}

export default UserCard;
