import "../../styles/home_page/HistoryButtonsStyle.css"

import { useNavigate } from 'react-router-dom'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function HistoryButtons() {
    const navigate = useNavigate();

    return (
        <div className="history-buttons-container">
            <button onClick={() => navigate(-1)}>
                <IoIosArrowBack />
            </button>
            <button onClick={() => navigate(1)}>
                <IoIosArrowForward />
            </button>
        </div>
    )
}

export default HistoryButtons;