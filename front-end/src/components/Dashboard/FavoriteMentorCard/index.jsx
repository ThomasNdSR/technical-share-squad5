import { AiOutlineHeart } from "react-icons/ai";
import "./styles.css";

export const FavoriteMentorCard = () => {
    return (
        <div className="box-favorite-mentor">
            
            <div className="heart-icon-box-favorite">
                <AiOutlineHeart size={30} color="var(--primary-01)" />
            </div>
         
            <h4 className="favorite-mentor-name">John Doe</h4>
            <caption className="favorite-mentor-area">UX/UI Designer</caption>    
            
        </div>
    )
}