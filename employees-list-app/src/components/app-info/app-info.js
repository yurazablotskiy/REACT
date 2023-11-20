import "./app-info.css";

const AppInfo = ({totalEmployees, totalIncrease}) => {
    return (
        <div className="app-info">
            <h1>Облік співробітників в компанії Х</h1>
            <h2>Загальна к-сть співробітників: {totalEmployees}</h2>
            <h2>Премію отримають: {totalIncrease}</h2>
        </div>
    )
}

export default AppInfo;