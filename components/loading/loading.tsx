import styles from "./loading.module.css";

interface ILoading {
	size: "small" | "medium";
}

function Loading({ size = "medium" }: ILoading) {
	return <div className={`${styles[size]} ${styles.loading}`} />;
}

export default Loading;
