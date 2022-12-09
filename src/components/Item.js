import itemImage from '../images/item.png';
import './css/Item.scss';

export default function Item() {
    return (
        <div className="item">
            <p className="item-name">Item Name</p>
            <img src={itemImage} />
            <p className="item-price">$200.00</p>
        </div>
    )
}