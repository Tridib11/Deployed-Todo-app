import TickIcon  from "./TickIcon.jsx";
import LinearProgress from '@mui/material/LinearProgress';
function ListItem({task}) {
    let progress=40;
    return (
        <li className="list-item">
            <div className="info-container">
                <TickIcon/>
                <p className="task-title">{task.title}</p>
                <LinearProgress variant="determinate" value={progress} />
            </div>

            <div className="button-container">
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </div>
        </li>
    )
}

export default ListItem
