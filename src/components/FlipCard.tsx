import React, {useState} from 'react';


// 定义接受的属性类型
interface FlipCardProps {
    front: React.ReactNode;
    back: React.ReactNode;
}

// FlipCard 组件
const FlipCard: React.FC<FlipCardProps> = ({front, back}) => {
    const [isFlipped, setIsFlipped] = useState(false); // 维护翻面状态

    // 处理点击事件，切换翻面状态
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="flip-card" onClick={handleClick}>
            <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    {front}
                </div>
                <div className="flip-card-back">
                    {back}
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
