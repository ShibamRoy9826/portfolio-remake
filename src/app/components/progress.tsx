import style from "../styles/components.module.css";
export default function Progress(){
    return(
        <div className={style.progressContainer}>
            <span className={style.progressBar}></span>
        </div>
    );
}